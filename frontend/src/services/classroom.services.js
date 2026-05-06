import axiosInstance from "../utils/axios";

export const createClassroomService = async (data) => {
    try {
        const res = await axiosInstance.post("/classroom", data);
        return res.data;
        
    } catch (error) {
        console.log("Unable to create classroom, try again", error)
    }
}

export const getClassroomsService = async () => {   
    try {
        const res = await axiosInstance.get("/classroom");
        return res.data;
    } catch (error) {
        console.log("Unable to fetch classrooms, try again", error);
    }
};

export const getClassroomByIdService = async (classId) => {
    try {
        const res = await axiosInstance.get(`/classroom/${classId}`);
        return res.data;
    } catch (error) {
        console.log("Unable to fetch classroom details, try again", error);
    }};

export const deleteClassroomService = async (classId) => {
    try {
        const res = await axiosInstance.delete(`/classroom/${classId}`);
        return res.data;
    } catch (error) {
        console.log("Unable to delete classroom, try again", error);
    }
};

export const joinClassroomService = async (classId, code) => {
    try {
        const res = await axiosInstance.post(`/classroom/${classId}/join`, { code });
        return res.data;
    } catch (error) {
        console.log("Unable to join classroom, try again", error);
    }
};