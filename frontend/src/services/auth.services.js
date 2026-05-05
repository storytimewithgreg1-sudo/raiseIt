import axiosInstance from "../utils/axios"


export const loginService = async (data) => {
    try {
        const res = axiosInstance.post("auth/login", data);
        return res.data;

        
    } catch (error) {
        console.log("Error in logging in", error)
       
    }

}

export const signupService = async (data) => {
    try {
         await axiosInstance.post("auth/signup", data);
         return { success: true };
    } catch (error) {
        console.log("Error signing up", error)
        return { success: false, error };
    }
}

export const logoutService = async () => {
    try {
        await axiosInstance.post("auth/logout");
        return { success: true };
    } catch (error) {
        console.log("Error logging out", error);
        return { success: false, error };
    }}