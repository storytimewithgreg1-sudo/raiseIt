import {  useState } from "react";
import { UserRound } from "lucide-react";
import { Link } from "react-router";
import toast from "react-hot-toast";
import useAuthStore from "../store/auth.store.js";

const SignupPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup, isFetching} = useAuthStore();

    const handleRegistration = async (e) => {
        e.preventDefault();

        console.log("Form submitted")
        if (!name || !email || !password) {
            toast.error("Please fill in all fields");
            return;
            
        }

        try {

            console.log("Calling signup")
            await signup({ name, email, password });
        } catch (error) {
            toast.error("Registration failed");
            console.log(error)
        }
        
    };

  

    return (
       <div className="min-h-screen w-full items-center px-5  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <div className=" flex items-center justify-center mx-auto  h-screen container px-4 py-8">
                <div className="shadow-lg  px-4 py-8 max-w-3xl w-full  mx-auto card bg-blue-200">
                    <div className="card-body">
                        <div className="mx-auto w-full flex flex-col items-center gap-6 ">

                            <div className=" text-blue-950 flex flex-col items-center gap-4">
                                <UserRound strokeWidth={1} size={70} className="bg-blue-300 rounded-full" />
                                <h1 className="font-medium text-2xl md:text-3xl l text-blue-950"> Register</h1>
                            </div>

                            <form onSubmit={handleRegistration} className=" w-full max-w-md">
                                <div className="form-control flex flex-col gap-2 mb-4">

                                    <label className="text-lg text-blue-950/80" >

                                        <span>Name</span>
                                    </label>

                                    <input type="text"
                                        value={name}
                                        className="input input-bordered border-blue-800/20 bg-transparent w-full"
                                        placeholder="Please Enter Your Fullname"
                                        onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className="form-control flex flex-col gap-2 mb-4">

                                    <label className="text-lg text-blue-950/80" >

                                        <span>Email</span>
                                    </label>

                                    <input type="text"
                                        value={email}
                                        className="input input-bordered border-blue-800/20 bg-transparent w-full"
                                        placeholder="Please Enter Your Email"
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>



                                <div className="form-control flex flex-col gap-2 mb-4">

                                    <label className="text-lg text-blue-950/80" >

                                        <span>Password</span>
                                    </label>

                                    <input type="password"
                                        value={password}
                                        className="input input-bordered border-blue-800/20 bg-transparent w-full"
                                        placeholder="Please Enter Your Password"
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                <div className="card-actions justify-center mb-3">
                                    <button type="submit" className="btn btn-primary w-full bg-blue-600/90 " disabled={isFetching}>
                                        {isFetching ? "loading" : "Submit"}
                                    </button>

                                </div>

                                <span className="text-sm text-blue-950/80"> 
                                    Don't have an account? 
                                    <Link to="/login" > Login</Link>
                                
                                </span>



                            </form>
                        </div>   


                    </div>
                </div>

            </div>

        </div>
    )
}

export default SignupPage