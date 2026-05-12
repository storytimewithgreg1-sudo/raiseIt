import { Plus, MailCheck, Vote } from "lucide-react"
import { useNavigate } from "react-router"

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen w-full" >

            {/* Navbar */}
            <div className=" flex flex-col max-w-3xl md:max-w-4xl lg:max-w-5xl  mx-auto w-full min-h-screen ">
                <div className="flex justify-around md:justify-between p-4 border-b border-blue-950/20">
                    <div className="flex items-center justify-center">
                        <span className="text-black text-xs md:text-lg cursor-pointer">Raise<span className="text-blue-800">It</span></span>
                        <img src="/RaiseIt.svg" className="size-5" alt="RaiseIt Logo" />
                    </div>
                    <div>
                        <button onClick={() => navigate('/signup')} className="btn btn-sm md:btn-md text-white rounded-xl hover:bg-linear-to-r hover:from-blue-400 hover:to-blue-600 border-none bg-linear-to-r from-blue-500 to-blue-700">Sign Up</button>
                    </div>
                </div>

                <div className=" flex mt-15 items-center justify-center ">
                    <div className="flex flex-col md:flex-row md:gap-10 items-center justify-center m-5 p-5 ">
                        <div className="m-5 flex flex-col  ">
                            <div className="flex flex-col justify-center text-center items-center">
                                <h1 className="text-lg font-medium md:font-black md:text-2xl lg:text-3xl text-blue-900 mb-3 ">Every Voice Matters, Anonymously</h1>

                                <h3 className=" font-medium text-blue-900/70 md:mt-3 text-xs md:text-sm lg:text-md">Anonymous Suggestions That Matter</h3>

                                <p className="text-xs md:text-sm lg:text-md max-w-md text-blue-900/60 mt-2">
                                    RaiseIt gives every member of your organisation a safe space
                                    to share ideas, raise concerns, and vote on what matters most
                                </p>
                            </div>
                            <div className="justify-center flex">
                                <button onClick={() => navigate('/signup')}  className="mt-5 btn btn-sm md:btn-md  border-none text-white rounded-xl hover:bg-linear-to-r hover:from-blue-400 hover:to-blue-600 border-none bg-linear-to-r from-blue-500 to-blue-700 ">Get Started

                                </button>
                            </div>
                        </div>
                        <img src="/anonymous.svg" className="size-70 md:size-100" alt="" />
                    </div>
                </div>

                <section className="min-h-screen w-full bg-slate-200/30 p-4">
                    <h1 className="text-lg md:text-2xl font-medium md:font-black text-blue-900 text-center mt-10">How It Works</h1>

                    <div className="flex flex-col items-center md:flex-row md:justify-between gap-6 md:gap=4 mt-20">
                        <div className="card  w-65 shadow-xl ">
                            <div className="card-body">

                                <div className="flex justify-center mb-2">
                                    <Plus strokeWidth={3} className="text-blue-900 size-8" />
                                </div>
                                <h1 className="text-blue-900/80">Create A Room</h1>
                                <p className="text-xs text-blue-900/60">  Sign up and create a room for your team, class, or community in seconds.</p>

                            </div>


                        </div>

                        <div className="card  w-65 shadow-xl ">
                            <div className="card-body">

                                <div className="flex justify-center mb-2">
                                    <MailCheck strokeWidth={3} className="text-blue-900 size-8" />
                                </div>
                                <h1 className="text-blue-900/80">Invite Your Members</h1>
                                <p className="text-xs text-blue-900/60"> Share a unique room code. Anyone with the code joins instantly — no extra setup.</p>

                            </div>


                        </div>

                        <div className="card  w-65 shadow-xl ">
                            <div className="card-body">

                                <div className="flex justify-center mb-2">
                                    <Vote strokeWidth={3} className="text-blue-900 size-10" />
                                </div>
                                <h1 className="text-blue-900/80">Raise & Vote Anonymously</h1>
                                <p className="text-xs text-blue-900/60"> Members post suggestions without revealing who they are.The best ideas rise to the top through votes.</p>

                            </div>


                        </div>
                    </div>
                    <div className="w-full mt-25">

                        <div className="text-center shadow-md border border-blue-900/40 max-w-sm md:max-w-md mx-auto p-8 rounded-xl ">
                            <p className="text-blue-900 text-sm md:text-md">Whether you're a professor wanting honest student feedback,
                                a manager building a healthier team culture, or a student body
                                looking for a fairer way to collect ideas, RaiseIt was built for you.
                            </p>
                        </div>

                    </div>

                </section>

                <footer className="text-blue-950/80 text-sm text-center p-5">
                      © {new Date().getFullYear()} RaiseIt

                </footer>


            </div>




        </div>
    )
}

export default LandingPage