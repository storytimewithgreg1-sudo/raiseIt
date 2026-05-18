import {Pin, PinOff , Heart, X} from 'lucide-react'
import useSuggestionStore from '../store/suggestions.store'
import { useParams } from 'react-router';


const SuggestionCard = ({suggestion}) => {
   const {deleteSuggestion, voteOnSuggestion, pinSuggestion} = useSuggestionStore();
   const {classId} = useParams();
   const suggestionId = suggestion._id;
   const voteNumber = suggestion.votes.length;

   const handleSuggestionDelete = async (e) => {
    e.preventDefault();
    await deleteSuggestion(classId, suggestionId);
   } 

    const handlePinSuggestion = async (e) => {
    e.preventDefault();
    await pinSuggestion(classId, suggestionId);
   }
   
    const handleVoteOnSuggestion = async (e) => {
    e.preventDefault();
    await voteOnSuggestion( classId ,suggestionId);
   } 
  
    return (
    <div className={ voteNumber > 10 ? "card  shadow-xl min-h-64 w-70 md:w-80 flex flex-col  bg-linear-to-r from-green-400 to-green-600 overflow-hidden" : "card min-h-64  shadow-xl w-70 md:w-80 flex flex-col bg-linear-to-r from-blue-400 to-purple-400 overflow-hidden"}>
        <div className="p-6 flex flex-col h-full w-full">
            <button onClick={handleSuggestionDelete} className='btn btn-xs btn-ghost text-white/60 hover:text-white hover:bg-transparent border-none self-end '>
                <X className='size-5 '/>
            </button>
            
            <h3 className="card-title text-sm md:text-md  text-teal-100">{suggestion.title}</h3>
            <p className='text-teal-100/80 mb-1 mt-2 text-xs md:text-sm break-words flex-grow'>{suggestion.content}</p>

            <div className="flex items-center justify-between mt-auto">
               <button onClick={handlePinSuggestion} className='btn btn-sm rounded-full hover:bg-slate-200 btn border-none'>
                {suggestion.isPinned ?  <Pin className='text-sky-800 size-4 ' /> : <PinOff className='text-sky-800 size-4' />}
                </button>


                <div className='relative '>
                    <button onClick={handleVoteOnSuggestion} className='btn btn-sm  rounded-full  btn border-none bg-blue-600/30 hover:bg-blue-600/60  '>
                        <Heart  className='size-4 text-white '/>
                    </button>
                    <span className='absolute -top-1  -right-1 bg-rose-400 text-white rounded-full p-1 text-xs font-bold w-5 h-5 flex items-center justify-center'>{(suggestion.votes?.length) || 0}</span>
                </div>
            </div>
           <div className='mt-auto  p-2 pt-4 flex justify-between'>
             <p className='text-xs text-white/70'>{new Date(suggestion.createdAt).toLocaleDateString("en-GB",{
                                                                                                                    day : 'numeric',
                                                                                                                    month : 'short',
                                                                                                                    year : 'numeric'
            })}</p>
             <p className='text-xs text-white/70'>{new Date(suggestion.createdAt).toLocaleTimeString("en-GB",{
                                                                                                                    hour : '2-digit',
                                                                                                                    minute : '2-digit'
                                                                                                                   
            })}</p>
           </div>
        </div>
        
    </div>
  )
}

export default SuggestionCard