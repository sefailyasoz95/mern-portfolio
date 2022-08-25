import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { EncryptStorage } from "encrypt-storage";

// export const encryptStorage = new EncryptStorage("medus-secret-key", {
// 	encAlgorithm: "Rabbit",
// 	storageType: "localStorage",
// 	prefix: "@medus-auth-token",
// });
// const token = encryptStorage.getItem("medus_auth_token");
// const savedUser = encryptStorage.getItem<UserProfile>("medus_saved_user");

export const initialState = {
	error: false,
	success: false,
	message: "",
	isAuthenticated: false,
};

export const reducer = createSlice({
	name: "global",
	initialState,
	reducers: {
		clearStates: (state) => {
			state.message = "";
			state.error = false;
			state.success = false;
		},
		logout: (state) => {
			state.isAuthenticated = false;
		},
	},
	// extraReducers: (builder) => {
	// 	builder;
	// },
});

export const { clearStates, logout } = reducer.actions;

export default reducer.reducer;
