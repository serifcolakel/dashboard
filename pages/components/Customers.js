import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const users = [
  {
    name: "akeag Mihajlov",
    email: "test@gmail.com",
    phone: "+359 888 888 888",
    role: "Electrician",
    imgUrl: "https://falconreactbs4.prium.me/static/media/1.38f0341f.jpg",
  },
  {
    name: "mehere Mihajlov",
    email: "test@gmail.com",
    phone: "+359 888 888 888",
    role: "Electric Engineer",
  },
  {
    name: "Serif",
    email: "test@gmail.com",
    phone: "+359 888 888 888",
    role: "Software Engineer",
    imgUrl: "https://falconreactbs4.prium.me/static/media/1.38f0341f.jpg",
  },
  {
    name: "rast Mihajlov",
    email: "test@gmail.com",
    phone: "+359 888 888 888",
    role: "Software Engineer",
  },
  {
    name: "akeağaüe Mihajlov",
    email: "test@gmail.com",
    phone: "+359 888 888 888",
    role: "Electrician",
    imgUrl: "https://falconreactbs4.prium.me/static/media/1.38f0341f.jpg",
  },
  {
    name: "meheişe Mihajlov",
    email: "test@gmail.com",
    phone: "+359 888 888 888",
    role: "Electric Engineer",
  },
  {
    name: "SerifCk",
    email: "test@gmail.com",
    phone: "+359 888 888 888",
    role: "Software Engineer",
    imgUrl: "https://falconreactbs4.prium.me/static/media/1.38f0341f.jpg",
  },
  {
    name: "rest Mihajlov",
    email: "test@gmail.com",
    phone: "+359 888 888 888",
    role: "Software Engineer",
  },
  {
    name: "meheişe Mihajlov",
    email: "test@gmail.com",
    phone: "+359 888 888 888",
    role: "Electric Engineer",
  },
  {
    name: "SerifCk",
    email: "test@gmail.com",
    phone: "+359 888 888 888",
    role: "Software Engineer",
    imgUrl: "https://falconreactbs4.prium.me/static/media/1.38f0341f.jpg",
  },
  {
    name: "rest Mihajlov",
    email: "test@gmail.com",
    phone: "+359 888 888 888",
    role: "Software Engineer",
  },
];

export default function Customers() {
  const [text, setText] = React.useState("");
  return (
    <div className="flex flex-col p-2 h-full">
      <div className="flex flex-row justify-between items-center h-[60px] bg-[#132238] rounded-t-xl px-4 py-8 md:py-0">
        <p className="text-xl text-[#d8e2ef] ">{`Users (${users.length})`}</p>
        <input
          type="text"
          name="search-user"
          placeholder="Search..."
          onChange={(e) => setText(e.target.value)}
          className="md:w-[250px] w-[150px] h-10 md:block border-[1px] font-bold text-[#344050] rounded-full px-4 border-[#344050] bg-[#061325] "
        />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-3 md:p-4 pt-4 bg-[#0e1c2f70] gap-y-8 p-4">
        {text.length < 0
          ? users.map((user, index) => (
              <div key={index} className="mx-auto text-center w-full">
                <img
                  src={
                    user.imgUrl || "https://ake.com.tr/uploads/images/logo.png"
                  }
                  className="md:w-[100px] w-[70px] h-[70px] md:h-[100px] object-cover rounded-full p-2 border-2 border-[#0e1c2f] shadow-xl "
                  alt={user.name}
                />
                <p className="text-[#2c7be5] font-semibold md:text-xl pt-4">
                  {user.name}{" "}
                </p>
                <p className="text-gray-500 font-semibold text-sm ">
                  {user.role}
                </p>
              </div>
            ))
          : users
              .filter((user) => user.name.includes(text))
              .map((user, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center  mx-auto text-center relative "
                >
                  <img
                    src={
                      user.imgUrl ||
                      "https://ake.com.tr/uploads/images/logo.png"
                    }
                    className="md:w-[100px] w-[70px] h-[70px] md:h-[100px] object-cover rounded-full p-2 border-2 border-[#0e1c2f] shadow-xl "
                    alt={user.name}
                  />
                  <p className="text-[#2c7be5] font-semibold md:text-xl pt-4">
                    {user.name}{" "}
                  </p>
                  <p className="text-gray-500 font-semibold text-sm ">
                    {user.role}
                  </p>
                  <FaPencilAlt className="text-white absolute top-0 hover:text-blue-500 cursor-pointer hover:bg-white md:right-0 right-1 flex flex-row items-end bg-blue-500 rounded-xl md:w-8 md:h-8 w-6 h-6 p-1" />

                  <RiDeleteBin5Fill className="text-white absolute hover:text-red-500 cursor-pointer hover:bg-white top-0 md:left-0 left-1 flex flex-row items-end bg-red-500 rounded-xl md:w-8 md:h-8 w-6 h-6 p-1" />
                </div>
              ))}
      </div>

      {users.filter((user) => user.name.includes(text)).length === 0 && (
        <div className="text-red-500 font-bold text-center mx-auto bg-[#0e1c2f70] w-full pb-8">
          {`No users found for ${text} search`}
        </div>
      )}
    </div>
  );
}
