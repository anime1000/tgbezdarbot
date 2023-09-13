import { createSlice } from "@reduxjs/toolkit";
import { NameTHUNK } from "./NameTHUNK";

const initialState = {
  name: "Вадим Семенов",
  users: [],
  isLoading: false,
  error: "",
};

export const NameSlice = createSlice({
  name: "nameSlice",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(NameTHUNK.pending, (state, action) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(NameTHUNK.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(NameTHUNK.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
  },
});

export const { setName } = NameSlice.actions;

export default NameSlice.reducer;
