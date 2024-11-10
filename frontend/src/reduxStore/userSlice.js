import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

// Lit le token depuis localStorage si disponible
const savedToken = localStorage.getItem('token');

// INITIAL STATE
const initialState = {
    data: {
        firstName: '',
        lastName: '',
        userName: '',
    },
    token: savedToken || null,
    isLoading: false,
    error: null,
};

// ASYNC THUNKS - LOGIN
export const login = createAsyncThunk('user/login', async (credentials, thunkAPI) => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials),
        });
        const data = await response.json();

        if (!response.ok) throw new Error(data.message || 'Failed to login');

        return {
            token: data.body.token,
        };
    } catch (error) {
        return thunkAPI.rejectWithValue({ message: error.message });
    }
});

// FETCH USER INFO
export const fetchUserInfo = createAsyncThunk('user/fetchUserInfo', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().user.token || localStorage.getItem('token');

        if (token) {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();
            console.log('fetchUserInfo - Data utilisateur :', data.body);  // Log de la donnée utilisateur complète

            if (!response.ok) throw new Error(data.message || 'Failed to fetch user info');

            return {
                firstName: data.body.firstName || 'Unknown',
                lastName: data.body.lastName || 'Unknown',
                userName: data.body.userName || 'Unknown',
            };
        }
    } catch (error) {
        return thunkAPI.rejectWithValue({ message: error.message });
    }
});

// MODIFY USERNAME (Pour modifier uniquement le username ici)
export const modify = createAsyncThunk('user/modify', async (username, thunkAPI) => {
    try {
        const token = thunkAPI.getState().user.token || localStorage.getItem('token');

        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            // Envoie le `username` comme un objet JSON
            body: JSON.stringify(username),  // Envoie l'objet JSON avec newUserName
        });

        const data = await response.json();
        console.log('modify return:', data);

        if (!response.ok) throw new Error(data.message || 'Failed to modify user profile');

        return data.body; // Les données renvoyées par l'API doivent contenir les informations mises à jour
    } catch (error) {
        return thunkAPI.rejectWithValue({ message: error.message });
    }
});



// SLICE
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = {}; // Effacer les données utilisateur
            state.token = null; // Effacer le token
            state.isLoading = false; // Réinitialiser le chargement
            state.error = null; // Réinitialiser l'erreur
            localStorage.removeItem('token'); // Retirer le token du localStorage
        },
    },
    extraReducers: (builder) => {
        builder
            // LOGIN
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.message;
            })
            // FETCH USER INFO
            .addCase(fetchUserInfo.pending, (state) => {
                state.isLoading = true;
                state.error = null;

            })
            .addCase(fetchUserInfo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchUserInfo.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.message;
                console.error('Failed to fetch username:', action.error);
            })
            // MODIFY USERNAME
            .addCase(modify.pending, (state) => {
                state.isLoading = true;
                state.error = null;
                console.log('Loading...')
            })
            .addCase(modify.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data.userName = action.payload.userName; // Met à jour le nom d'utilisateur
                console.log('userName update Succed !', action.payload.userName)
            })
            .addCase(modify.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.message;
                console.log('Failed to update userName', action.payload.message)
            });
    },
});

// Export des actions
export const { logout } = userSlice.actions;

// Export du reducer
export default userSlice.reducer;
