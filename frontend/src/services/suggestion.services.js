import  axiosInstance from "../utils/axios";


export const getClassroomSuggestionsService = async (classId) => {
  
        const res = await axiosInstance.get(`/classroom/${classId}/suggestions`);
        return res.data;
        
 
}

export const createSuggestionService = async (classId, data) => {  
   
        const res = await axiosInstance.post(`/classroom/${classId}/suggestions`, data);
        return res.data;
   
};

export const deleteSuggestionService = async (classId, suggestionId) => {

        const res = await axiosInstance.delete(`/classroom/${classId}/suggestions/${suggestionId}`);
        return res.data;
   
}

export const voteOnSuggestionService = async (suggestionId, classId) => {
  
        const res = await axiosInstance.post(`classroom/${classId}/suggestions/${suggestionId}/vote`);
        return res.data;
   

}

export const pinSuggestionService = async (classId, suggestionId) => {
   
        const res = await axiosInstance.post(`/classroom/${classId}/suggestions/${suggestionId}/pin`);
        return res.data;
    
}
