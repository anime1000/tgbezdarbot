import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const NameTHUNK = createAsyncThunk(
  "slices/NameTHUNK",
  async (date, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:4444/users", {
        name: date,
      });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue("smth went wrong, try it later pls");
    }
  }
);
