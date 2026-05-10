import { create } from 'zustand';
import { loginService, logoutService, signupService, checkAuthService } from '../services/auth.services';
import toast from 'react-hot-toast';




const useAuthStore = create((set) => ({
    isFetching: false,
    authUser: null,

    setAuthUser: (user) => set({ authUser: user }),
    setisFetching: (loading) => set({ isFetching: loading }),

    login: async (data) => {
        set({ isFetching: true });

        try {
            const res = await loginService(data);

            toast.success(`Welcome Back, ${res.data.name}`);
            set({ authUser: res.data })
            console.log("response:", res.data)


        } catch (error) {
            const errorMessage = error.response?.data?.message || "Login failed. Please check your credentials and try again.";
            toast.error(errorMessage);
            console.log(errorMessage)
        } finally {
            set({ isFetching: false });
        }
    },

    signup: async (data) => {
        set({ isFetching: true });
        try {
            console.log("Store recieved", data)
            const res = await signupService(data);
            toast.success(`Welcome ${res.data.name}`);
            console.log(res.data)

        } catch (error) {
            const errorMessage = error.response?.data?.message || "Signup failed. Please check your details and try again.";
            toast.error(errorMessage);
            console.log(errorMessage)
        } finally {
            set({ isFetching: false });
        }
    },

    logout: async () => {
        set({ isFetching: true });
        try {
            await logoutService();
            set({ authUser: null })
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Logout failed. Please try again.";
            toast.error(errorMessage);
            console.log("Error logging out", error)
        } finally {
            set({ isFetching: false });
        }

    },

    checkAuth: async () => {
        set({ isFetching: true });
        try {
            const res = await checkAuthService();
            set({ authUser: res.data })
        } catch (error) {
            const errorMessage = error.response?.data?.message || "CheckAuth failed. Please check your details and try again.";
            toast.error(errorMessage);


        } finally {
            set({ isFetching: false })

        }
    }
}
));

export default useAuthStore;
