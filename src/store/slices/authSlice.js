import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  token: localStorage.getItem('token') || null,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true
      state.token = action.payload.token
      state.user = action.payload.user
      localStorage.setItem('token', action.payload.token)
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.token = null
      state.user = null
      localStorage.removeItem('token')
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer 