import { create } from 'zustand';
import { loginService, logoutService, signupService } from '../services/auth.services';
import toast from 'react-hot-toast';


const useAuthStore = create((set) => ({
    isloading: false,
    authUser: null,

    setAuthUser: (user) => set({ authUser: user }),
    setIsLoading: (loading) => set({ isloading: loading }),

    login: async (data) => {
        set({ isloading: true });

        try {
            const res = await loginService(data);
            set({ authUser: res });

        } catch (error) {
            console.log("Error logging in", error)
            toast.error("Login failed. Please check your credentials and try again.");
        } finally {
            set({ isloading: false });
        }
    },

    signup: async (data) => {
        set({ isloading: true });
        try {
            const res = await signupService(data);
            set({ authUser: res })
        } catch (error) {
            toast.error("Signup failed. Please check your details and try again.");
            console.log("Error signing up", error)
        } finally {
            set({ isloading: false });
        }
    },

    logout: async () => {
        set({ isloading: true });
        try {
            await logoutService();
            set({ authUser: null })
        } catch (error) {
            toast.error("Logout failed. Please try again.");
            console.log("Error logging out", error)
        } finally {
            set({ isloading: false });
        }

    }
}));

export default useAuthStore;
