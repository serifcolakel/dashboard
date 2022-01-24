import React from "react";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { RiDeleteBin5Fill, RiCloseLine } from "react-icons/ri";
import Users from "../users.json";

export default function Customers() {
  const [text, setText] = React.useState("");
  const [users, setUsers] = React.useState(Users);
  const [isAdd, setIsAdd] = React.useState(false);
  const [addUserForm, setAddUserForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    id: "",
  });
  const [showUser, setShowUser] = React.useState(false);
  const [sendUser, setSendUser] = React.useState({});
  console.log(sendUser);
  function handleDelete(id) {
    const data = users.filter((user) => user.id !== id);
    setUsers(data);
  }
  function handleAddUser() {
    addUserForm.id = users.length + 2;
    setUsers([...users, addUserForm]);
    setIsAdd(false);
  }
  return (
    <div className="flex flex-col p-2 h-full">
      <div className="flex flex-row justify-between items-center h-[60px] bg-[#132238] rounded-t-xl px-4 py-8 md:py-0">
        <p className="text-xl text-[#d8e2ef] ">{`Users (${users.length})`}</p>
        <div className="flex flex-row md:gap-x-1 items-center">
          <input
            type="text"
            name="search-user"
            placeholder="Search..."
            onChange={(e) => setText(e.target.value)}
            className="md:w-[250px] w-[150px] h-10 md:block border-[1px] font-bold text-[#344050] rounded-full px-4 border-[#344050] bg-[#061325] "
          />
          <FaPlus
            onClick={() => setIsAdd(true)}
            className="text-xl text-white mx-4 bg-blue-500 rounded-lg p-1 hover:bg-white hover:text-blue-500 cursor-pointer "
            size={35}
          />
        </div>
        {isAdd && (
          <div className="md:absolute md:top-[20%] md:left-[30%] flex flex-col items-center justify-center gap-y-8 fixed top-0 left-0 w-full h-[100vh] z-50 md:w-[800px] md:h-[600px] bg-customers-card-bg bg-[#132238]  md:bg-white bg-contain  md:bg-cover md:rounded-lg p-4">
            <RiCloseLine
              onClick={() => setIsAdd(false)}
              className="text-white absolute hover:text-red-500 cursor-pointer hover:bg-white top-10 right-10 md:right-8 md:top-8  bg-red-500 rounded-xl md:w-8 md:h-8 w-6 h-6 p-1"
            />
            <div className="flex flex-col justify-center ">
              {["name", "email", "phone", "role"].map((item, index) => (
                <div key={index} className="flex flex-col w-full gap-y-2">
                  <label
                    htmlFor="name"
                    className="text-white md:text-black  text-lg font-bold text-left uppercase "
                  >
                    {item}
                  </label>
                  <input
                    name={item}
                    onChange={(e) =>
                      setAddUserForm({ ...addUserForm, [item]: e.target.value })
                    }
                    placeholder={`Enter new user ${item}`}
                    type={item === "email" ? "email" : "text"}
                    className="bg-white mb-4 text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={handleAddUser}
                type="submit"
                className="hover:scale-105 text-white hover:text-green-500 hover:bg-white font-bold py-2 px-4 rounded-lg w-full bg-green-500 "
              >
                Create New User
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="grid md:grid-cols-4 grid-cols-3 md:p-4 pt-4 bg-[#0e1c2f70] gap-y-8 p-4 relative">
        {text.length < 0
          ? null
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
                      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    }
                    className="md:w-[100px] w-[70px] h-[70px] md:h-[100px] object-cover rounded-full p-2 border-2 border-[#0e1c2f] shadow-xl "
                    alt={user.name}
                  />
                  <p
                    onClick={() => {
                      setSendUser(user);
                      setShowUser(true);
                    }}
                    className="text-[#2c7be5] font-semibold md:text-xl pt-4 cursor-pointer hover:underline"
                  >
                    {user.name}{" "}
                  </p>

                  <p className="text-gray-500 font-semibold text-sm ">
                    {user.role}
                  </p>
                  <FaPencilAlt className="text-white absolute top-0 hover:text-blue-500 cursor-pointer hover:bg-white md:right-0 right-1 flex flex-row items-end bg-blue-500 rounded-xl md:w-8 md:h-8 w-6 h-6 p-1" />

                  <RiDeleteBin5Fill
                    onClick={() => handleDelete(user.id)}
                    className="text-white absolute hover:text-red-500 cursor-pointer hover:bg-white top-0 md:left-0 left-1 flex flex-row items-end bg-red-500 rounded-xl md:w-8 md:h-8 w-6 h-6 p-1"
                  />
                </div>
              ))}
      </div>
      {showUser && (
        <div className="md:absolute md:top-[20%] md:left-[40%] flex flex-col items-center justify-center gap-y-8 fixed top-0 left-0 w-full h-[100vh] z-50 md:w-[350px] md:h-[600px] bg-customers-card-bg bg-[#132238]  md:bg-white bg-contain md:rounded-lg p-4">
          <RiCloseLine
            onClick={() => setShowUser(false)}
            className="text-white absolute hover:text-red-500 cursor-pointer hover:bg-white top-10 right-10 md:right-8 md:top-8  bg-red-500 rounded-xl md:w-8 md:h-8 w-6 h-6 p-1"
          />
          <img
            src={sendUser.imgUrl}
            className="md:w-[100px] w-[70px] h-[70px] md:h-[100px] object-cover rounded-full p-2 border-2 border-[#0e1c2f] shadow-xl"
            alt={sendUser.name}
          />
          <p className="text-[#2c7be5] font-semibold  md:text-xl p-4 border-2 rounded-lg border-black">
            <strong>Name :</strong> {sendUser.name}
          </p>
          <p className="text-gray-500 font-semibold text-sm border-2 p-4 rounded-lg border-black">
            <strong>Email :</strong> {sendUser.email}
          </p>
          <p className="text-gray-500 font-semibold text-sm border-2 p-4 rounded-lg border-black">
            <strong>Role : </strong>
            {sendUser.role}
          </p>
          <p className="text-gray-500 font-semibold text-sm border-2 p-4 rounded-lg border-black">
            <strong>Phone :</strong> {sendUser.phone}
          </p>
        </div>
      )}
      {users.filter((user) => user.name.includes(text)).length === 0 && (
        <div className="text-red-500 font-bold text-center mx-auto bg-[#0e1c2f70] w-full pb-8">
          {`No users found for ${text} search`}
        </div>
      )}
    </div>
  );
}
