export default function SignUp(){
    return(
        <>
        <div className="h-screen w-screen absolute flex blur-md -z-[1]" style={{ backgroundImage: `url("./Assets/Login.jpg")`, backgroundPosition: "center" }}></div>
        <div className="px-5 pt-5 md:pt-10 h-screen w-screen flex">
            <div className="md:p-5  md:py-10 py-5 px-3 z-10 md:sm:w-1/3  blur-0 m-auto w-full bg-[#cbdcdf85] rounded-md shadow-md">
                <form>
                    <h1 className="text-3xl font-Normal ">SIGN UP</h1>
                    <div className="pt-6 flex flex-col">
                        <label className="text-lg pb-3 font-medium ">Name</label>
                        <input className="text-lg p-2 rounded-md" type="text" placeholder=""></input>
                    </div>
                    <div className="pt-4 flex flex-col">
                        <label className="text-lg pb-3 font-medium">Phone no.</label>
                        <input className="text-lg p-2 rounded-md" type="text" placeholder=""></input>
                    </div>
                    <div className="pt-4 flex flex-col">
                        <label className="text-lg pb-3 font-medium flex justify-between items-center"><span>Password</span></label>
                        <input className="text-lg p-2 rounded-md" type="text" placeholder="*********"></input>
                    </div>
                    <div className="pt-4 flex">
                        <input className="text-lg p-2 rounded-md" type="checkbox"></input>
                        <label className="text-lg p-2 font-medium">Remember me</label>
                    </div>
                    <div className="pt-2 flex flex-1 justify-center">
                        <div className="pt-2">
                            <button className="text-lg font-medium text-white p-2 rounded-lg w-max bg-teal-700">Signup</button>
                        </div>
                    </div>
                    <div className="pt-6 flex justify-between">
                        <label className="text-lg">Already have an account? </label><Link to="/login"><span className="text-red-500 underline">Login</span></Link>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}