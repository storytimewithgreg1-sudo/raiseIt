import  axiosInstance from "../utils/axios";


export const getClassroomSuggestionsService = async (classId) => {
    try {

        const res = await axiosInstance.get(`/classroom/${classId}/suggestions`);
        return res.data;
        
    } catch (error) {
        console.log("Unable to fetch classroom suggestions, try again", error);
    }
}

export const createSuggestionService = async (classId, data) => {  
    try {
        const res = await axiosInstance.post(`/classroom/${classId}/suggestions`, data);
        return res.data;
    } catch (error) {
        console.log("Unable to create suggestion, try again", error);
    }
};

export const deleteSuggestionService = async (classId, suggestionId) => {
    try {
        const res = await axiosInstance.delete(`/classroom/${classId}/suggestions/${suggestionId}`);
        return res.data;
    } catch (error) {
        console.log("Unable to delete suggestion, try again", error);
    }
}

export const voteOnSuggestionService = async (suggestionId) => {
    try {
        const res = await axiosInstance.post(`/suggestions/${suggestionId}/vote`);
        return res.data;
    } catch (error) {
        console.log("Unable to vote on suggestion, try again", error);
    }

}

export const pinSuggestionService = async (classId, suggestionId) => {
    try {
        const res = await axiosInstance.post(`/classroom/${classId}/suggestions/${suggestionId}/pin`);
        return res.data;
    } catch (error) {
        console.log("Unable to pin suggestion, try again", error);
    }
}
