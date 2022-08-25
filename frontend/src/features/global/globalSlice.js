import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import animalService from "../animals/animalService";
import objectService from "../objects/objectService";
import categoryService from "../categories/categoryService";

const initialState = {
	isFetchingCategories: true,
	categories: [],
	category: {},
	isFetchingAnimals: true,
	animals: [],
	animal: {},
	isFetchingObjects: true,
	objects: [],
	object: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

export const createAnimal = createAsyncThunk("animal/create", async (animalData, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await animalService.CreateAnimalAsync(token, animalData);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const updateAnimal = createAsyncThunk("animal/update", async (animalData, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await animalService.UpdateAnimalAsync(token, animalData);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const deleteAnimal = createAsyncThunk("animal/delete", async (id, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await animalService.DeleteAnimalAsync(token, id);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const getAnimalsByName = createAsyncThunk("animal/getByName", async (animalName, thunkAPI) => {
	try {
		return await animalService.GetAnimalsByName(animalName);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const getAllAnimals = createAsyncThunk("animal/getAll", async (_, thunkAPI) => {
	try {
		return await animalService.GetAllAnimalsAsync();
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const createCategory = createAsyncThunk("category/create", async (categoryData, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await categoryService.CreateCategoryAsync(token, categoryData);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const updateCategory = createAsyncThunk("category/update", async (categoryData, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await categoryService.UpdateCategoryAsync(token, categoryData);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const deleteCategory = createAsyncThunk("category/delete", async (id, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await categoryService.DeleteCategoryAsync(token, id);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const getCategoriesByName = createAsyncThunk("category/getByName", async (categoryName, thunkAPI) => {
	try {
		return await categoryService.GetCategoriesByName(categoryName);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const getAllCategories = createAsyncThunk("category/getAll", async (_, thunkAPI) => {
	try {
		return await categoryService.GetAllCategoriesAsync();
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const createObject = createAsyncThunk("object/create", async (objectData, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await objectService.CreateObjectAsync(token, objectData);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const updateObject = createAsyncThunk("object/update", async (objectData, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await objectService.UpdateObjectAsync(token, objectData);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const deleteObject = createAsyncThunk("object/delete", async (id, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await objectService.DeleteObjectAsync(token, id);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const getObjectsByName = createAsyncThunk("object/getByName", async (objectName, thunkAPI) => {
	try {
		return await objectService.GetObjectsByName(objectName);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const getAllObjects = createAsyncThunk("object/getAll", async (_, thunkAPI) => {
	try {
		return await objectService.GetAllObjectsAsync();
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		reset: (state) => {
			state.isError = false;
			state.isSuccess = false;
			state.message = "";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createAnimal.pending, (state) => {
				state.isFetchingAnimals = true;
			})
			.addCase(createAnimal.fulfilled, (state, action) => {
				state.animals.push(action.payload.animal);
				state.isFetchingAnimals = false;
				state.isError = false;
				state.isSuccess = true;
			})
			.addCase(createAnimal.rejected, (state, action) => {
				state.isFetchingAnimals = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			})
			.addCase(getAnimalsByName.pending, (state) => {
				state.isFetchingAnimals = true;
			})
			.addCase(getAnimalsByName.fulfilled, (state, action) => {
				state.isFetchingAnimals = false;
				state.isError = true;
				state.isSuccess = false;
				state.animals = action.payload.animals;
			})
			.addCase(getAnimalsByName.rejected, (state, action) => {
				state.isFetchingAnimals = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			})
			.addCase(getAllAnimals.pending, (state) => {
				state.isFetchingAnimals = true;
			})
			.addCase(getAllAnimals.fulfilled, (state, action) => {
				state.isFetchingAnimals = false;
				state.isError = true;
				state.isSuccess = false;
				state.animals = action.payload.animals;
			})
			.addCase(getAllAnimals.rejected, (state, action) => {
				state.isFetchingAnimals = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			})
			.addCase(updateAnimal.pending, (state) => {
				state.isFetchingAnimals = true;
			})
			.addCase(updateAnimal.fulfilled, (state, action) => {
				let filtered = state.animals.filter((animal) => animal._id !== action.payload.animal._id);
				console.log("filtered: ", filtered);
				filtered.push(action.payload.animal);
				console.log("pushed: ", filtered);
				state.animals = filtered;
				state.isFetchingAnimals = false;
				state.isError = false;
				state.isSuccess = true;
			})
			.addCase(updateAnimal.rejected, (state, action) => {
				state.isFetchingAnimals = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			})
			.addCase(deleteAnimal.pending, (state) => {
				state.isFetchingAnimals = true;
			})
			.addCase(deleteAnimal.fulfilled, (state, action) => {
				let filtered = state.animals.filter((animal) => animal._id !== action.payload.id);
				state.animals = filtered;
				state.isFetchingAnimals = false;
				state.isError = false;
				state.isSuccess = true;
			})
			.addCase(deleteAnimal.rejected, (state, action) => {
				state.isFetchingAnimals = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			})
			.addCase(createCategory.pending, (state) => {
				state.isFetchingCategories = true;
			})
			.addCase(createCategory.fulfilled, (state, action) => {
				state.categories.push(action.payload.category);
				state.isFetchingCategories = false;
				state.isError = false;
				state.isSuccess = true;
			})
			.addCase(createCategory.rejected, (state, action) => {
				state.isFetchingCategories = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			})
			.addCase(getCategoriesByName.pending, (state) => {
				state.isFetchingCategories = true;
			})
			.addCase(getCategoriesByName.fulfilled, (state, action) => {
				state.isFetchingCategories = false;
				state.isError = true;
				state.isSuccess = false;
				state.categories = action.payload.categories;
			})
			.addCase(getCategoriesByName.rejected, (state, action) => {
				state.isFetchingCategories = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			})
			.addCase(getAllCategories.pending, (state) => {
				state.isFetchingCategories = true;
			})
			.addCase(getAllCategories.fulfilled, (state, action) => {
				state.isFetchingCategories = false;
				state.isError = true;
				state.isSuccess = false;
				state.categories = action.payload.categories;
			})
			.addCase(getAllCategories.rejected, (state, action) => {
				state.isFetchingCategories = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			})
			.addCase(updateCategory.pending, (state) => {
				state.isFetchingCategories = true;
			})
			.addCase(updateCategory.fulfilled, (state, action) => {
				// let filtered = state.categories.filter(
				// 	(category) => category._id !== action.payload.category._id
				// );
				// state.categories = filtered.push(action.payload.category);
				state.isFetchingCategories = false;
				state.isError = false;
				state.isSuccess = true;
			})
			.addCase(updateCategory.rejected, (state, action) => {
				state.isFetchingCategories = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			})
			.addCase(deleteCategory.pending, (state) => {
				state.isFetchingCategories = true;
			})
			.addCase(deleteCategory.fulfilled, (state, action) => {
				let filtered = state.categories.filter((category) => category._id !== action.payload.id);
				state.categories = filtered;
				state.isFetchingCategories = false;
				state.isError = false;
				state.isSuccess = true;
			})
			.addCase(deleteCategory.rejected, (state, action) => {
				state.isFetchingCategories = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			})
			.addCase(createObject.pending, (state) => {
				state.isFetchingObjects = true;
			})
			.addCase(createObject.fulfilled, (state, action) => {
				state.objects.push(action.payload.object);
				state.isFetchingObjects = false;
				state.isError = false;
				state.isSuccess = true;
			})
			.addCase(createObject.rejected, (state, action) => {
				state.isFetchingObjects = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			})
			.addCase(getObjectsByName.pending, (state) => {
				state.isFetchingObjects = true;
			})
			.addCase(getObjectsByName.fulfilled, (state, action) => {
				state.isFetchingObjects = false;
				state.isError = true;
				state.isSuccess = false;
				state.objects = action.payload.objects;
			})
			.addCase(getObjectsByName.rejected, (state, action) => {
				state.isFetchingObjects = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			})
			.addCase(getAllObjects.pending, (state) => {
				state.isFetchingObjects = true;
			})
			.addCase(getAllObjects.fulfilled, (state, action) => {
				state.isFetchingObjects = false;
				state.isError = true;
				state.isSuccess = false;
				state.objects = action.payload.objects;
			})
			.addCase(getAllObjects.rejected, (state, action) => {
				state.isFetchingObjects = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			})
			.addCase(updateObject.pending, (state) => {
				state.isFetchingObjects = true;
			})
			.addCase(updateObject.fulfilled, (state, action) => {
				let filtered = state.objects.filter((object) => object._id !== action.payload.object._id);
				console.log("filtered: ", filtered);
				filtered.push(action.payload.object);
				console.log("pushed: ", filtered);
				state.objects = filtered;
				state.isFetchingObjects = false;
				state.isError = false;
				state.isSuccess = true;
			})
			.addCase(updateObject.rejected, (state, action) => {
				state.isFetchingObjects = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			})
			.addCase(deleteObject.pending, (state) => {
				state.isFetchingObjects = true;
			})
			.addCase(deleteObject.fulfilled, (state, action) => {
				let filtered = state.objects.filter((object) => object._id !== action.payload.id);
				state.objects = filtered;
				state.isFetchingObjects = false;
				state.isError = false;
				state.isSuccess = true;
			})
			.addCase(deleteObject.rejected, (state, action) => {
				state.isFetchingObjects = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			});
	},
});

export const { reset } = globalSlice.actions;

export default globalSlice.reducer;
