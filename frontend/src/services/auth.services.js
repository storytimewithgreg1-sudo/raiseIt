import axiosInstance from "../utils/axios"


export const loginService = async (data) => {
    
        const res = await axiosInstance.post("/auth/login", data);
        return res;

  
}

export const signupService = async (data) => {
    
        const res = await axiosInstance.post("/auth/signup", data);
        return res;
  
}

export const logoutService = async () => {
   
        await axiosInstance.post("/auth/logout");
        return { success: true };
   }


export const checkAuthService = async () => {
    const res = await axiosInstance.get("/auth/check");
    return res;
}