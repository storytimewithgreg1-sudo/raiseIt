import {Link} from 'react-router';

const NavBar = () => {
  return (
    <div className="flex justify-between p-5 border-b border-white/30 items-center mb-10">
          <span className="text-white">Raise<span className="text-purple-400">It</span></span>
          <Link to='/create'>
            <button className="btn border-purple-600/50 text-sm hover:border-none bg-linear-to-r from-blue-600 to-purple-600 text-white">Create Classroom</button>
          </Link>

     </div>
  )
}

export default NavBar