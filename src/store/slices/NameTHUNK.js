import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const NameTHUNK = createAsyncThunk(
  "slices/NameTHUNK",
  async (date, thunkAPI) => {
    console.log("date", date);
    try {
      const response = await axios.post("http://localhost:4444/users", {
        name: date,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue("smth went wrong, try it later pls");
    }
  }
);
