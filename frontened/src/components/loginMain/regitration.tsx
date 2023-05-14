import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface rooms {
  name: string;
  username: string;
  email: string;
  password: string;
  weight: string;
  height: string;
  age: number;
}
export const Regitration = () => {
  let [state, setstate] = useState<rooms>({
    name: "",
    username: "",
    email: "",
    password: "",
    weight: "",
    height: "",
    age: 0,
  });
  const { name, username, email, password, weight, height, age } = state;
  let navigate=useNavigate()
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setstate((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  console.log(state);
  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post("https://hackathon-1qcd.onrender.com/users/register",state)
    .then((res)=>{
      if(res.status){
        Swal.fire("Good job!", "New user has been registered", "success");
        navigate("/login")
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  };

  return (
    <div>
      {" "}
      <section className="bg-black dark:bg-black-900  m-auto">
        <div
          className="container flex items-center justify-center min-h-screen px-6 mx-auto
        bg-[url(https://cdn.wallpapersafari.com/10/60/BmOpKL.jpg)] bg-cover bg-left 
        "
        >
          <form className="w-full max-w-md mt-28 mb-20" onSubmit={handelSubmit}>
            <div className="flex justify-center mx-auto">
              <img
                className="w-auto h-14 sm:h-24 rounded-3xl"
                src="https://static.vecteezy.com/system/resources/previews/000/595/983/original/vector-object-and-icons-for-sport-label-gym-badge-fitness-logo-design.jpg"
                alt=""
              />
            </div>

            <div className="flex items-center justify-center mt-6">
              <a className="w-1/3 pb-4 font-medium text-center text-[#B0DAFF] bg-[#394867] rounded-xl p-4 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                sign up
              </a>
            </div>

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900
                 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300
                  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="name"
                value={name}
                onChange={handelChange}
                placeholder="Name"
              />
              <br />
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900
                 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300
                  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="username"
                value={username}
                onChange={handelChange}
                placeholder="Username"
              />
            </div>

            <div className="flex gap-3">
              <input
                type="string"
                className="block w-full px-10 py-3 text-gray-700 bg-white mt-2 border rounded-lg
                 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300
                  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="weight"
                value={weight}
                onChange={handelChange}
                placeholder="weight"
              />

              <input
                type="string"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg mt-2
                 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300
                  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name={"height"}
                value={height}
                onChange={handelChange}
                placeholder="height"
              />
            </div>

            <input
              type="number"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg mt-2
                 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300
                  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="age"
              value={age}
              onChange={handelChange}
              placeholder="age"
            />

            {/* <label  className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed
             rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>

                <h2 className="mx-3 text-gray-400">Profile Photo</h2>

                <input id="dropzone-file" type="file" className="hidden" />
            </label> */}

            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                type="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900
                 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 
                 focus:outline-none focus:ring focus:ring-opacity-40"
                name="email"
                value={email}
                onChange={handelChange}
                placeholder="Email address"
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg
                 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300
                  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="password"
                value={password}
                onChange={handelChange}
                placeholder="Password"
              />
            </div>

            <div className="mt-6">
              <button
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors 
              duration-300 transform bg-[#394867] rounded-lg hover:bg-blue-400 focus:outline-none focus:ring
               focus:ring-blue-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>

              <div className="mt-6 text-center ">
                <a
                  href="#"
                  className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                >
                  Already have an account?
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>{" "}
    </div>
  );
};
