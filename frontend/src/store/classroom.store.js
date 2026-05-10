import { create } from "zustand";
import { createClassroomService, deleteClassroomService, getClassroomByIdService, getClassroomsService, joinClassroomService, enterClassroomService } from "../services/classroom.services.js";
import toast from "react-hot-toast";


const useClassroomStore = create((set) => ({
    classrooms: [],
    currentClassroom: null,
    isLoading: false,

    setClassrooms: (classrooms) => set({ classrooms }),
    setCurrentClassroom: (classroom) => set({ currentClassroom: classroom }),
    setIsLoading: (loading) => set({ isLoading: loading }),

    fetchClassrooms: async () => {
        set({ isLoading: true });
        try {
            const classrooms = await getClassroomsService();
            set({ classrooms });

        } catch (error) {
           const errorMessage = error.response?.data?.message || "Delete failed. Please check your details and try again.";
            toast.error(errorMessage);
           console.log(errorMessage)
        } finally {
            set({ isLoading: false })
        }
    },

    createClassroom: async (data) => {
        set({ isLoading: true });

        try {
            const newClassroom = await createClassroomService(data);
            set((state) => ({ classrooms: [...state.classrooms, newClassroom] }));
            toast.success("Classroom created successfully");
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Create failed. Please check your details and try again.";
            toast.error(errorMessage);
            console.log(errorMessage);
        } finally {
            set({ isLoading: false });
        }
    },

    getClassroomById: async (classId) => {
        set({ isLoading: true });

        try {
            const classroom = await getClassroomByIdService(classId);
            set({ currentClassroom: classroom });
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Fetch failed. Please check your details and try again.";
            toast.error(errorMessage);
            console.log(errorMessage);
        } finally {
            set({ isLoading: false });
        }
    },

    deleteClassroom: async (classId) => {
        set({ isLoading: true });

        try {
            await deleteClassroomService(classId);
            set((state) => ({ classrooms: state.classrooms.filter((c) => c._id !== classId) }));
            toast.success("Classroom deleted successfully");

        } catch (error) {
            const errorMessage = error.response?.data?.message || "Delete failed. Please check your details and try again.";
            toast.error(errorMessage);
            console.log(errorMessage);
        } finally {
            set({ isLoading: false });
        }
    },

    joinClassroom: async (classId, code) => {
        set({ isLoading: true });

        try {
            await joinClassroomService(classId, code);
            toast.success("Joined classroom successfully");
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Join failed. Please check your details and try again.";
            toast.error(errorMessage);
           console.log(errorMessage)
        } finally {
            set({ isLoading: false });
        }
    },

    enterClassroom: async (classId) => {
        set({ isLoading: true });

        try {
            const res = await enterClassroomService(classId);

            toast.success(res.message);
            return true;
            
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Enter failed. Please check your details and try again.";
            toast.error(errorMessage);
            console.log(errorMessage);
            return false;   
        } finally {
            set({ isLoading: false });
        }
    }
}


))

export default useClassroomStore;