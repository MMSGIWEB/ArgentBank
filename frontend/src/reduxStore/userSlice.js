import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

//INITIAL STATE
const initialState = {
    data: {},
    token: null,
    isLoading: false,
    error: null,
}

//ASYNC THUNKS - LOGIN
export const login = createAsyncThunk('login', async (credentials, thunkAPI) => {
    try { //requête login
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(credentials),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Failed to login');
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const modify = createAsyncThunk('userModify', async (userData, thunkAPI) => {
    try { //requête modif username
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${thunkAPI.getState().user.token}`
            },
            body: JSON.stringify(userData),
        })
        const data = await response.json()
        if (!response.ok) throw new Error(data.message || 'Failed to modify')
        return data.user
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

//SLICE
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
            state.token = null;
            state.isLoading = false;
            state.error = null;
        },
    },
    //mis à jour de l'état en réponse aux actions dispatchées
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            // Modify
            .addCase(modify.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(modify.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(modify.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});
//importation de l'action entre {} + la rend utilisable + export le reducer userSlice
export const { logout } = userSlice.actions
export default userSlice.reducer