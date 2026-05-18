import LoginPage from "./pages/LoginPage.jsx";
import {Navigate, Route, Routes} from "react-router";
import useAuthStore from "./store/auth.store.js";
import ClassroomsPage from "./pages/ClassroomsPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import CreateClassroomPage from "./pages/CreateClassroomPage.jsx";
import ClassroomPage from "./pages/ClassroomPage.jsx";
import CreateSuggestion from "./pages/CreateSuggestionPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";


const App = () => {
  const {authUser, checkAuth} = useAuthStore();
  useEffect(() => {checkAuth()}, [])

 



  return (
    <div>
      <Toaster />
      <Routes>
        
        /* Public Routes */
        <Route path="/" element={ authUser ? <Navigate to="/dashboard"/>  : <LandingPage/>}/>
        <Route path="/login" element= {authUser ? <Navigate to="/dashboard"/> : <LoginPage />} />
        <Route path="/signup" element= {authUser ? <Navigate to="/dashboard"/> : <SignupPage />} />


        /* Protected Routes */

        <Route path="/dashboard" element={ authUser ? <ClassroomsPage/> : <Navigate to="/"/>}/>
        <Route path="/create" element={ authUser ? <CreateClassroomPage/> : <Navigate to="/"/>}/>
        <Route path="/:classId" element={ authUser ? <ClassroomPage/> : <Navigate to="/"/>}/>
        <Route path="/:classId/suggestion" element={ authUser ? <CreateSuggestion/> : <Navigate to="/"/>}/>
      </Routes>
    </div>
  )
}

export default App