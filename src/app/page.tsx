"use client";
import { useState } from "react";

export default function Home() {
  const [ltype, setType] = useState(true);
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1518704618243-b719e5d5f2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-no-repeat">
      <div className="px-5 pt-5 md:pt-10 h-screen w-screen flex">
        {ltype ? (
          <div className="md:p-5  md:py-10 py-5 px-3 z-10 md:sm:w-1/3  blur-0 m-auto w-full bg-[#cbdcdf85] rounded-md shadow-md">
            <div className="mx-auto w-full">
              <button
                onClick={() => {
                  setType(!ltype);
                }}
                className="bg-black p-4 w-full"
              >
                Change login type
              </button>
            </div>
            <form className="mt-5">
              <h1 className="text-3xl font-medium ">Organization Login</h1>
              <div className="pt-4 flex flex-col">
                <label className="text-xl pb-3">Phone no.</label>
                <input
                  className="text-lg p-2  rounded-md"
                  type="text"
                  placeholder="9090900909"
                  required
                  // onChange={(e)=>setLogin(e.target.value)}
                />
              </div>
              <div className="pt-4 flex flex-col">
                <label className="text-xl pb-3 ">
                  <span>Password</span>
                </label>
                <input
                  className="text-lg p-2 rounded-md"
                  type="text"
                  placeholder="*********"
                  required
                />
              </div>
              <div className="pt-4 flex">
                <input
                  className="text-2xl p-3 rounded-md"
                  type="checkbox"
                ></input>
                <label className="text-lg p-3">Remember me</label>
              </div>
              <div className="pt-6 flex justify-center">
                <button className="text-2xl font-medium text-white p-3 rounded-lg sm:w-1/3 w-full bg-teal-700">
                  Login
                </button>
              </div>
              <div className="pt-6 flex justify-between">
                <label className="text-lg">Do not have an account? </label>
                <span className="text-red-500 underline">Sign up</span>
              </div>
              <p className="text-xl text-center bg-red-100 mt-4 p-1 hidden">
                Incorrect credentials
              </p>
            </form>
          </div>
        ) : (
          <div className="md:p-5  md:py-10 py-5 px-3 z-10 md:sm:w-1/3  blur-0 m-auto w-full bg-[#cbdcdf85] rounded-md shadow-md">
            <div className="mx-auto w-full">
              <button
                onClick={() => {
                  setType(!ltype);
                }}
                className="bg-black p-4 w-full"
              >
                Change login type
              </button>
            </div>
            <form className="mt-5">
              <h1 className="text-3xl font-medium ">Goverment Login</h1>
              <div className="pt-4 flex flex-col">
                <label className="text-xl pb-3">Phone no.</label>
                <input
                  className="text-lg p-2  rounded-md"
                  type="text"
                  placeholder="9090900909"
                  required
                  // onChange={(e)=>setLogin(e.target.value)}
                />
              </div>
              <div className="pt-4 flex flex-col">
                <label className="text-xl pb-3 ">
                  <span>Password</span>
                </label>
                <input
                  className="text-lg p-2 rounded-md"
                  type="text"
                  placeholder="*********"
                  required
                />
              </div>
              <div className="pt-4 flex">
                <input
                  className="text-2xl p-3 rounded-md"
                  type="checkbox"
                ></input>
                <label className="text-lg p-3">Remember me</label>
              </div>
              <div className="pt-6 flex justify-center">
                <button className="text-2xl font-medium text-white p-3 rounded-lg sm:w-1/3 w-full bg-teal-700">
                  Login
                </button>
              </div>
              <p className="text-xl text-center bg-red-100 mt-4 p-1 hidden">
                Incorrect credentials
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
