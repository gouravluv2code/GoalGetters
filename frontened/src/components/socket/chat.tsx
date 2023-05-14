import React, { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
interface user {
  socket: Socket;
  username: string;
  room: string;
}
// interface message{
//     author:string,
//     room:string,
//     time:string,
//     message:string
// }
interface userstype {
  room: string;
  message: string;
  author: string;
  time: number | string;
}

export const Chat: React.FC<user> = ({ socket, username, room }) => {
  let [state, currentState] = useState<string>("");
  let [render, setRender] = useState<boolean>(false);
  let [messager, setMessage] = useState<userstype[]>([]);
  const sendMessage = async () => {
    if (state !== "") {
      const messageuserData = {
        room: room,
        message: state,
        author: username,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      socket.emit("send_Message", messageuserData);
      setMessage((prev) => [...prev, messageuserData]);
    }
  };
  useEffect(() => {
    socket.on("received_message", (data) => {
      setMessage((prev) => [...prev, data]);
    });
  }, [socket]);

  return (
    <section className="bg-black dark:bg-black-900 px-21 m-auto bg-no-repeat bg-contain mb-48
    bg-[url(https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)]
    ">
    <div className=" w-2/5 m-auto   p-10 bg-transparent">
      <div className="bg-gray-800 text-white py-4 px-6 rounded">
        <h1 className="text-lg font-semibold">Talk And Work</h1>{" "}
      </div>
      <div className="border-solid  border-4 gray-blue-800 h-screen p-10 flex flex-col mt-7   
      overflow-hidden overflow-y-scroll ">
        {messager.map((item, index) => {
          return (
            <>
              <div
                className="h-full mt-7 lex items-center justify-center  bg-[#4D4C7D] text-white rounded-full mr-3 "
                id={username === item.author ? "you" : "nextperson"}
              >
                <h1
                  className=" bg-[#F4FCD9] font-serif decoration- text-black rounded w-auto h-auto min-h-40 max-w-120 
              flex items-center mr-5 ml-5 pr-5 pl-3 p-3 overflow-wrap-break overflow-break-word	"
                  key={index + 1}
                >
                  {/* font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; */}
                  {item.message}
                </h1>
              </div>
              <div className="justify-between mt-3 mr-5 ml-5 pr-5 pl-5 flex text-white">
                <p bg-purple-200>{item.author}</p>
                <p>{item.time}</p>
              </div>
            </>
          );
        })}
      </div>
      <input
        className="placeholder-green-400  mt-10 
        border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-4/5
        "
        type="text"
        placeholder="Message"
        value={state}
        onChange={(e) => {
          currentState(e.target.value);
        }}
      />
      <button
        className="bg-[#D4ECDD] decoration-white ml-3 placeholder-red-100 mt-10 p-3 rounded-e-3xl
        text-center::placeholder
        "
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
    </section>
  );
};

// <div className="flex flex-col h-screen">
// {/* Header */}
// <div className="bg-gray-800 text-white py-4 px-6">
//   <h1 className="text-lg font-semibold">Chat Window</h1>
// </div>

// {/* Chat messages */}
// <div className="flex-1 bg-gray-100 px-6 py-4">
//   <div className="flex flex-col space-y-4">
//     {/* Individual chat message */}
//     <div className="flex">
//       <div className="flex items-center justify-center h-8 w-8 bg-blue-500 text-white rounded-full mr-3">
//         <span className="text-sm">A</span>
//       </div>
//       <div className="flex flex-col">
//         <span className="font-semibold">Alice</span>
//         <span className="text-gray-500 text-sm">Hello!</span>

//       </div>
//     </div>

//   </div>
// </div>

// {/* Input area */}
// <div className="bg-gray-200 py-4 px-6 flex">
//   <input
//     type="text"
//     placeholder="Type your message..."
//     className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//   />
//       <button className="bg-gray-500 decoration-white ml-3 placeholder-red-100 mt-10 p-4 rounded-e-3xl
//   text-center::placeholder
//   " onClick={sendMessage}>Send</button>
// </div>
// </div>
