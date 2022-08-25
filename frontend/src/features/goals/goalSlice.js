import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import goalService from "./goalService";

const initialState = {
	goals: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

export const createGoal = createAsyncThunk(
	"goal/create",
	async (goalData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await goalService.CreateGoalAsync(goalData, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const getAllGoals = createAsyncThunk(
	"goal/getAll",
	async (undefined, thunkAPI) => {
		try {
			return await goalService.GetGoalsAsync();
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const getGoalsByUserId = createAsyncThunk(
	"goal/getUserGoals",
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await goalService.GetGoalsByUserIdAsync(token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const updateGoal = createAsyncThunk(
	"goal/update",
	async (goal, thunkAPI) => {
		try {
			return await goalService.UpdateGoalAsync(goal);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);
export const deleteGoal = createAsyncThunk(
	"goal/delete",
	async (id, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await goalService.DeleteGoalAsync(id, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const getGoalById = createAsyncThunk(
	"goal/getById",
	async (id, thunkAPI) => {
		try {
			return await goalService.GetGoalByIdAsync(id);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const goalSlice = createSlice({
	name: "goal",
	initialState,
	reducers: {
		resetGoal: (state) => {
			state = initialState;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createGoal.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createGoal.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.isError = false;
				state.goals.push(action.payload.goal);
				state.message = action.payload.message;
			})
			.addCase(createGoal.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			})
			.addCase(updateGoal.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateGoal.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(updateGoal.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload; // comes from thunkAPI => message
			})
			.addCase(deleteGoal.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteGoal.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.goals = state.goals.filter(
					(goal) => goal._id !== action.payload.id
				);
			})
			.addCase(deleteGoal.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload; // comes from thunkAPI => message
			})
			.addCase(getGoalsByUserId.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getGoalsByUserId.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.goals = action.payload.goals;
				state.message = action.payload.message;
			})
			.addCase(getGoalsByUserId.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload; // comes from thunkAPI => message
			});
	},
});

export const { resetGoal } = goalSlice.actions;

export default goalSlice.reducer;
