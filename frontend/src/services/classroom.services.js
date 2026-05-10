import axiosInstance from "../utils/axios";

export const createClassroomService = async (data) => {
  
        const res = await axiosInstance.post("/classroom", data);
        return res.data;
        
   
}

export const getClassroomsService = async () => {   
   
        const res = await axiosInstance.get("/classroom");
        return res.data;
   
};

export const getClassroomByIdService = async (classId) => {

        const res = await axiosInstance.get(`/classroom/${classId}`);
        return res.data;
   
};

export const deleteClassroomService = async (classId) => {
    
        const res = await axiosInstance.delete(`/classroom/${classId}`);
        return res.data;
    
};

export const joinClassroomService = async (classId, code) => {
  
        const res = await axiosInstance.post(`/classroom/${classId}/join`, { code });
        return res.data;
    
};

export const enterClassroomService = async (classId) => {
        const res = await axiosInstance.post(`/classroom/${classId}/enter`);
        return res.data;

}