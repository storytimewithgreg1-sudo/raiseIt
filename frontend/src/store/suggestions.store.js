import { create } from "zustand";
import { createSuggestionService, deleteSuggestionService, getClassroomSuggestionsService, pinSuggestionService, voteOnSuggestionService } from "../services/suggestion.services.js";
import toast from "react-hot-toast";
import useClassroomStore from "./classroom.store.js";


const useSuggestionStore = create((set) => ({
    suggestions: [],
    isFetching: false,
    isLoading: false,

    setSuggestions: (suggestions) => set({ suggestions }),
    setisFetching: (loading) => set({ isFetching: loading }),
    setIsLoading: (loading) => set({isLoading:loading}),

    fetchSuggestions: async (classId) => {
        set({ isFetching: true });
        try {
            const res = await getClassroomSuggestionsService(classId);
            set({ suggestions: res });

        } catch (error) {
            toast.error("Failed to fetch suggestions.");
            console.log("Unable to fetch suggestions, try again", error);
        } finally {
            set({ isFetching: false });
        }
    },

    createSuggestion: async (classId, data) => {
        set({ isLoading: true });
        try {
            const newSuggestion = await createSuggestionService(classId, data);
            set((state) => ({ suggestions: [...state.suggestions, newSuggestion] }));
            const {classrooms, setClassrooms} = useClassroomStore.getState();
            const updated = classrooms.map((c) => c._id === classId ? {...c, suggestions: [...c.suggestions, newSuggestion]} : c)
            setClassrooms(updated);
            toast.success("Suggestion created successfully");
        } catch (error) {
            toast.error("Failed to create suggestion.");
            console.log("Unable to create suggestion, try again", error);
        } finally {
            set({ isLoading: false });
        }
    },

    deleteSuggestion: async (classId, suggestionId) => {
        set({ isFetching: true });

        try {
            const updatedSuggestions = await deleteSuggestionService(classId, suggestionId);
            set({ suggestions: updatedSuggestions });
            toast.success("Suggestion deleted successfully");

        } catch (error) {
            toast.error("Failed to delete suggestion.");
            console.log("Unable to delete suggestion, try again", error);
        } finally {
            set({ isFetching: false });
        }

    },

    voteOnSuggestion: async (suggestionId) => {
        try {
            const voteCount = await voteOnSuggestionService(suggestionId);
            set((state) => ({
                suggestions: state.suggestions.map((sug) => sug._id === suggestionId ? { ...sug, votes: voteCount } : sug)
            }))
        } catch (error) {
            toast.error("Failed to vote on suggestion.");
            console.log("Unable to vote on suggestion, try again", error);
        }
    },

    pinSuggestion: async (classId, suggestionId) => {
        try {

            const pinnedSuggestion = await pinSuggestionService(classId, suggestionId);
            set((state) => ({
                suggestions: state.suggestions.map((sug) => sug._id === suggestionId ? { ...sug, isPinned: pinnedSuggestion.isPinned } : sug)
            }))
        } catch (error) {
            toast.error("Failed to pin suggestion.");
            console.log("Unable to pin suggestion, try again", error);
        }
    },

}))

export default useSuggestionStore;