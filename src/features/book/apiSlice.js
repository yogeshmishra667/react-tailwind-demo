import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";


const initialState = {
  loading:false,
  book : [],
  error:'',
}


//generated promise pending, fulfilled, rejected action type
export const fetchBookData = createAsyncThunk('book/fetchBookData', () => {
  return axios.get('http://localhost:8000/api/v1/books').then((response) => 
    response.data.data.book.map(book => book)
  )
})

const bookSlice = createSlice({
  name:'books',
  initialState,
  extraReducers:(builder) => {
    builder.addCase(fetchBookData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchBookData.fulfilled, (state, action) => {
      state.loading = false
      state.book = action.payload
      state.error = ''
    })
    builder.addCase(fetchBookData.rejected, (state, action) => {
      state.loading = false
      state.book = []
      state.error = action.error.message
    })
  }
})

export default bookSlice.reducer