import axios from "axios";

const API_URL = "/api/goals/";

const CreateGoalAsync = async (goalData, token) => {
	const response = await axios.post(API_URL, goalData, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
};

const GetGoalsAsync = async () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const response = await axios.get(API_URL, { auth: `Bearer ${user.token}` });
	return response.data;
};

const GetGoalsByUserIdAsync = async (token) => {
	const response = await axios.get(API_URL, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
};

const GetGoalByIdAsync = async (id) => {
	const user = JSON.parse(localStorage.getItem("user"));
	const response = await axios.get(API_URL + id, {
		auth: `Bearer ${user.token}`,
	});
	return response.data;
};

const UpdateGoalAsync = async (goalData) => {
	const user = JSON.parse(localStorage.getItem("user"));
	const response = await axios.put(API_URL + goalData.id, {
		auth: `Bearer ${user.token}`,
		data: goalData,
	});
	return response.data;
};
const DeleteGoalAsync = async (id, token) => {
	const response = await axios.delete(API_URL + id, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
};

const goalService = {
	CreateGoalAsync,
	GetGoalsAsync,
	GetGoalByIdAsync,
	UpdateGoalAsync,
	DeleteGoalAsync,
	GetGoalsByUserIdAsync,
};

export default goalService;
