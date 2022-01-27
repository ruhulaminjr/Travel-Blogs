import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
      <div className="relative sm:max-w-sm w-full">
        <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
        <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
          <h1 className="text-center font-bold text-lg text-gray-800">
            Make Admin
          </h1>
          <div className="flex mt-7 justify-center w-full">
            <form>
              <div className="flex flex-col gap-2 items-center justify-center">
                <label htmlFor="name" className="text-lx font-serif">
                  Email:
                </label>
                <input
                  type="text"
                  placeholder="User Email"
                  id="name"
                  className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                  {...register("email")}
                  required
                />
              </div>
              <div className="flex items-center justify-center my-2">
                <button className="p-2 rounded bg-green-700 text-white">
                  Make Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
