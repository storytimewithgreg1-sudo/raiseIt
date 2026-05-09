import { create } from "zustand";
import { createClassroomService, deleteClassroomService, getClassroomByIdService, getClassroomsService, joinClassroomService } from "../services/classroom.services.js";
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
            toast.error("Unable to fetch classrooms, try again");
            console.log("Unable to fetch classrooms, try again", error);

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
            toast.error("Unable to create classroom, try again");
            console.log("Unable to create classroom, try again", error);
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
            toast.error("Unable to fetch classroom, try again");
            console.log("Unable to fetch classroom, try again", error);
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
            toast.error("Unable to delete classroom, try again");
            console.log("Unable to delete classroom, try again", error);
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
            toast.error("Unable to join classroom, try again");
            console.log("Unable to join classroom, try again", error);
        } finally {
            set({ isLoading: false });
        }
    },


}))

export default useClassroomStore;