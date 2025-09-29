import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getMyProfile } from "../../../services/ApiCalls";
// import { checkResponse } from "../../../utils/commonFunc";

const initialState = {
  user: null,
  token: null,
  customerId: null,
  currencySymbol: "$",
  currency: "USD",
  error: "",
  status: "idle",
};

// export const fetchUser = createAsyncThunk(
//   "auth/fetchUser",
//   async (_, { rejectWithValue, fulfillWithValue }) => {
//     try {
//       const res = await getMyProfile();
//       if (checkResponse({ res }))
//         return fulfillWithValue({ user: res?.data?.data });
//       rejectWithValue("something went wrong");
//     } catch (err: a) {
//       return rejectWithValue(err?.message);
//     }
//   }
// );

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      localStorage.setItem("authToken", action.payload.token);
      localStorage.setItem("customerId", action?.payload?.user?._id);

      document.cookie = `authorization=${action.payload.token}; path=/;`;
      document.cookie = `role=${action.payload.role}; path=/;`;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.customerId = action.payload.user?._id;
    },
    logoutSuccess(state) {
      state.token = null;
      state.user = null;
    },
    updateUser(state, action) {
      state.user = action.payload;
    },



  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchUser.pending, (state) => {
    //     state.status = "loading";

    //   })
    //   .addCase(fetchUser.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     state.user = action.payload?.user || null;
    //   })
    //   .addCase(fetchUser.rejected, (state, action) => {
    //     state.status = "failed";

    //   });
  },
});

export const {
  loginSuccess,
  logoutSuccess,
  updateUser,

} = authSlice.actions;

export default authSlice.reducer;
