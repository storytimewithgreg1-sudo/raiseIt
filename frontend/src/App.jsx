import LoginPage from "./pages/LoginPage.jsx";
import {Navigate, Route, Routes} from "react-router";
import useAuthStore from "./store/auth.store.js";
import ClassroomsPage from "./pages/ClassroomsPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  const {authUser} = useAuthStore();

  return (
    <div>
      <Toaster />
      <Routes>
        
        /* Public Routes */
        
        <Route path="/login" element= {authUser ? <Navigate to="/"/> : <LoginPage />} />
        <Route path="/signup" element= {authUser ? <Navigate to="/"/> : <SignupPage />} />


        /* Protected Routes */

        <Route path="/" element={ authUser ? ClassroomsPage : <Navigate to="/login"/>}/>
      </Routes>
    </div>
  )
}

export default App