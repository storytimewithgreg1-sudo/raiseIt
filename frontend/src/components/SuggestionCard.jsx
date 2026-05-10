import {Pin, PinOff , Heart} from 'lucide-react'

const SuggestionCard = ({suggestion}) => {
  return (
    <div className="card shadow-xl w-96 md:w-80 h-40 flex flex-col items-center justify-center bg-sky-500">
        <div className="card-body w-full">
            <h3 className="card-title  text-sky-800">{suggestion.title}</h3>
            <p className='text-sky-800/80'>{suggestion.content}</p>

            <div className="card-actions items-center justify-between">
                {suggestion.isPinned ?  <Pin className='text-sky-800 size-5 ' /> : <PinOff className='text-sky-800 size-5' />}
                <div className='relative '>
                    <div className='bg-blue-600/80  rounded-full p-2 btn border-none hover:bg-blue-600/60  '>
                        <Heart  className='size-5 text-white '/>
                    </div>
                    <span className='absolute -top-1  -right-1 bg-rose-400 text-white rounded-full p-1 text-xs font-bold w-5 h-5 flex items-center justify-center'>4</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default SuggestionCard