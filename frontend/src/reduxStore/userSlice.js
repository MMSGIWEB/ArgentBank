import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Lit le token depuis localStorage si disponible
const savedToken = localStorage.getItem('token');

//INITIAL STATE
const initialState = {
    data: {
        firstName: '',
        lastName: '',
        username: '',
    },
    token: savedToken || null,
    isLoading: false,
    error: null,
};

//ASYNC THUNKS - LOGIN
export const login = createAsyncThunk('user/login', async (credentials, thunkAPI) => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });
        const data = await response.json();

        if (!response.ok) throw new Error(data.message || 'Failed to login');

        return {
            user: {
                firstName: data.body.firstName,
                lastName: data.body.lastName,
                username: data.body.username,
            },
            token: data.body.token,
        };
    } catch (error) {
        return thunkAPI.rejectWithValue({ message: error.message });
    }
});

// FETCH USER INFO
export const fetchUserInfo = createAsyncThunk('user/fetchUserInfo', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().user.token;

        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.message || 'Failed to fetch user info');

        return data.body;
    } catch (error) {
        return thunkAPI.rejectWithValue({ message: error.message });
    }
});

// MODIFY USER PROFILE (Pour modifier uniquement le username ici)
export const modify = createAsyncThunk('user/modify', async (newUserName, thunkAPI) => {
    try {
        const token = thunkAPI.getState().user.token;

        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userName: newUserName }),
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.message || 'Failed to modify user profile');

        return data.body;
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
            state.data = {};
            state.token = null;
            state.isLoading = false;
            state.error = null;
            localStorage.removeItem('token');
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
            })
            // MODIFY
            .addCase(modify.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(modify.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data.username = action.payload.username;
            })
            .addCase(modify.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.message;
            });
    },
});

// Export des actions
export const { logout } = userSlice.actions;

// Export du reducer
export default userSlice.reducer;
