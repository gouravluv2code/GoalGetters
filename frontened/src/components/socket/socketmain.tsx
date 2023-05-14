import React, { useEffect, useState } from "react";
import io, {Socket} from 'socket.io-client';

import { Chat } from "./chat";

interface rooms {
  name: string;
  room: string;
}
const socket: Socket = io("http://localhost:8080");

export const SocketMain = () => {
  let [state, setstate] = useState<rooms>({
    name: "",
    room: "",
  });

  let [show, setShow] = useState<boolean>(false);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  const handelClick = (e: React.FormEvent) => {
    e.preventDefault();
    socket.emit("join_room", state);
    setShow(true);
  };

  return (
    <>
      {!show ? (
        <div className="mt-40  bg-no-repeat bg-contain bg-center mb-48
        bg-[url(https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=456&q=80)]

        ">
           <h1 className="font-serif text-xl font-bold text-center ">JOIN Chat</h1>
          <div className="flex justify-center mx-auto mt-4
          
          ">
         
            <div className=" w-2/5 m-auto p-12 text-start">
              <form onSubmit={handelClick} className="max-w-md mx-auto">
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="border-[#345B63] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    name="name"
                    placeholder="Enter name"
                    value={state.name}
                    onChange={handelChange}
                  />
                </div>
                <div className="mb-4
                ">
                  <label htmlFor="password" className="block mb-2 mt-9">
                    Room:
                  </label>
                  <input
                    type="text"
                    id="password"
                    className="border-[#345B63] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    name="room"
                    placeholder="Enter Room id"
                    value={state.room}
                    onChange={handelChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#48426D] text-white py-2 px-4 mt-8 rounded hover:bg-blue-300
       transition-colors duration-300"
                >
                  JOIN
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Chat socket={socket} username={state.name} room={state.room} />
        </div>
      )}
    </>
  );
};
