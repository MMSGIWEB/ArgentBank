import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Lit le token depuis localStorage si disponible
const savedToken = localStorage.getItem('token');

//INITIAL STATE
const initialState = {
    data: {
        firstName: '',
        lastName: '',
        username: '',
    },
    token: savedToken || null, // Définit le jeton depuis localStorage
    isLoading: false,
    error: null,
}

//ASYNC THUNKS - LOGIN
export const login = createAsyncThunk('user/login', async (credentials, thunkAPI) => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });
        const data = await response.json();
        console.log("API login response:", data)

        if (!response.ok) throw new Error(data.message || 'Failed to login');

        // Vérifie si les propriétés existent dans `data.body.user`
        // const user = data.body.user || {};
        // const firstName = user.firstName || 'Unknown';  // Valeur par défaut si non défini
        // const lastName = user.lastName || 'Unknown';
        // const username = user.username || 'Unknown';

        // return { user: data.body.user, token: data.body.token }; // Assurez-vous que la structure des données est correcte

        // Retourner les informations de l'utilisateur extraites de `data.body`
        // return { user: { firstName, lastName, username }, token: data.body.token };

        // Retourner les informations de l'utilisateur extraites de `data.body`
        return {
            user: {
                firstName: data.body.firstName,
                lastName: data.body.lastName,
                username: data.body.username,
            },
            token: data.body.token,
        }
    } catch (error) {
        return thunkAPI.rejectWithValue({ message: error.message });
    }
});

//RECUP DONNEES DE L'UTILISATEUR
export const fetchUserInfo = createAsyncThunk('userInfo', async (token) => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        console.log("API fetchInfo response:", data) // Vérifie la réponse complète

        if (!response.ok) throw new Error(data.message || 'Failed to modify user profile');

        // Retourner les nouvelles données utilisateur
        return data.body; // Supposons que la réponse contienne les informations mises à jour
    } catch (error) {
        return thunkAPI.rejectWithValue({ message: error.message });
    }
});


//ASYNC THUNKS - MODIFY USER PROFILE (Pour modifier uniquement le username ici)
export const modify = createAsyncThunk('user/modify', async (userData, thunkAPI) => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        console.log("API modify response:", data) // Vérifie la réponse complète

        if (!response.ok) throw new Error(data.message || 'Failed to modify user profile');

        // Retourner les nouvelles données utilisateur
        return response.data.body; // Supposons que la réponse contienne les informations mises à jour
    } catch (error) {
        return thunkAPI.rejectWithValue({ message: error.message });
    }
});

//SLICE
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            console.log("Successfull logout!", state.token); // Vérifie le contenu du payload
            state.data = {};
            state.token = null;
            state.isLoading = false;
            state.error = null;
            localStorage.removeItem('token'); // Efface le token à la déconnexion
        },
    },
    extraReducers: (builder) => {
        builder
            // LOGIN()
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                console.log("Payload on fulfilled:", action.payload); // Vérifie le contenu du payload
                state.isLoading = false;
                state.data = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token); // Enregistre le token dans localStorage
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.message;
            })
            // MODIFY()
            .addCase(modify.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(modify.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data.username = action.payload.username; // Mettre à jour seulement le `username`
            })
            .addCase(modify.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.message;
            });
    },
});

//export des actions
export const { logout } = userSlice.actions;
export default userSlice.reducer;
