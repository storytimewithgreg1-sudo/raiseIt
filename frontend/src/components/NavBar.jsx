import { Link } from 'react-router';
import { LogOut } from 'lucide-react';
import useAuthStore from '../store/auth.store';

const NavBar = () => {
  const {logout} = useAuthStore()
  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
  }

  return (
    <div className="flex justify-between p-5 border-b border-white/30 items-center mb-10">
      <div className='flex items-center justify-center'>
        <span className="text-white text-xs md:text-lg cursor-pointer">Raise<span className="text-purple-400">It</span></span>
        <img src="/RaiseIt.svg" alt="" className='size-5 md:size-7' />
      </div>
      <div className='flex items-center justify-center space-x-2'>
        <Link to='/create'>
          <button className="btn border-purple-600/50 text-sm hover:border-none bg-linear-to-r from-blue-600 to-purple-600 btn-xs text-xs md:btn-md md:text-md text-white">Create Room</button>
        </Link>
        <button onClick={handleLogout} className='btn btn-xs md:btn-md'>
          <LogOut className=' text-purple-950 size-5 md:size-6' />

        </button>
      </div>

    </div>
  )
}

export default NavBar