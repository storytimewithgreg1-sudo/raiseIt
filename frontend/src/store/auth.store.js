import { create } from 'zustand';
import { loginService, logoutService, signupService } from '../services/auth.services';
import toast from 'react-hot-toast';



const useAuthStore = create((set) => ({
    isLoading: false,
    authUser: null,

    setAuthUser: (user) => set({ authUser: user }),
    setIsLoading: (loading) => set({ isLoading: loading }),

    login: async (data) => {
        set({ isLoading: true });

        try {
            const res = await loginService(data);
           
            set({ authUser: res.data});
            toast.success(`Welcome Back, ${res.data.name}`);
            console.log("response:", res.data)
            

        } catch (error) {
            const errorMessage = error.response?.data?.message || "Login failed. Please check your credentials and try again.";
            toast.error(errorMessage);
            console.log(errorMessage)
        } finally {
            set({ isLoading: false });
        }
    },

    signup: async (data) => {
        set({ isLoading: true });
        try {
            console.log("Store recieved", data)
            const res = await signupService(data);
            set({ authUser: res.data })
            toast.success(`Welcome ${res.data.name}`);
            console.log(res.data)
           
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Signup failed. Please check your details and try again.";
            toast.error(errorMessage);
            console.log(errorMessage)
        } finally {
            set({ isLoading: false });
        }
    },

    logout: async () => {
        set({ isLoading: true });
        try {
            await logoutService();
            set({ authUser: null })
        } catch (error) {
            toast.error("Logout failed. Please try again.");
            console.log("Error logging out", error)
        } finally {
            set({ isLoading: false });
        }

    }
}));

export default useAuthStore;
