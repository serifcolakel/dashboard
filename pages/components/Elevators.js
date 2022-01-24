import React from "react";
import { FaPlus, FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin5Fill, RiCloseLine } from "react-icons/ri";
import item from "../item.json";
export default function Elevators() {
  const [text, setText] = React.useState("");
  const [elevators, setElevators] = React.useState(item.elevator);
  const [isAdd, setIsAdd] = React.useState(false);
  const [addElevatorForm, setAddElevatorForm] = React.useState({
    name: "",
    explanation: "",
  });
  function handleDeleteElevator(id) {
    const data = elevators.filter((user) => user.id !== id);
    setElevators(data);
  }
  function handleAddElevator() {
    addElevatorForm.id = elevators.length + 2;
    setElevators([...elevators, addElevatorForm]);
    setIsAdd(false);
  }
  return (
    <>
      <div className="flex flex-row justify-between items-center h-[60px] bg-[#132238] rounded-t-xl px-4 py-8 md:py-0 mb-4">
        <p className="text-xl text-[#d8e2ef] ">{`Elevators (${elevators.length})`}</p>
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
              {["name", "explanation"].map((item, index) => (
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
                      setAddElevatorForm({
                        ...addElevatorForm,
                        [item]: e.target.value,
                      })
                    }
                    placeholder={`Enter new elevator ${item}`}
                    type="text"
                    className="bg-white mb-4 text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={handleAddElevator}
                type="submit"
                className="hover:scale-105 text-white hover:text-green-500 hover:bg-white font-bold py-2 px-4 rounded-lg w-full bg-green-500 "
              >
                Create New Elevator
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-4 rounded-lg md:px-0 px-4">
        {text.length < 0
          ? null
          : elevators
              .filter((item) =>
                item.name.toUpperCase().includes(text.toUpperCase())
              )
              .map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-y-4 relative bg-customers-card-bg bg-cover !rounded-xl shadow-xl "
                >
                  <img
                    src={item.img || "https://i.hizliresim.com/otraj3b.png"}
                    alt={item.name}
                    className="w-[300px] h-[250px] object-cover mx-auto rounded-xl pt-2"
                  />
                  <p className="text-[#f5803e] font-bold text-lg text-center">
                    {item.name}
                  </p>
                  <p className="text-gray-400 text-lg p-4 text-center">
                    {item.explanation.slice(0, 200)}...
                  </p>
                  <FaPencilAlt className="text-white absolute hover:text-blue-500 cursor-pointer hover:bg-white  right-8 top-8 flex flex-row items-end bg-blue-500 rounded-xl md:w-8 md:h-8 w-8 h-8 p-1" />

                  <RiDeleteBin5Fill
                    onClick={() => handleDeleteElevator(item.id)}
                    className="text-white absolute hover:text-red-500 cursor-pointer hover:bg-white left-8 top-8 flex flex-row items-end bg-red-500 rounded-xl md:w-8 md:h-8 w-8 h-8 p-1"
                  />
                </div>
              ))}

        {elevators.filter((item) =>
          item.name.toUpperCase().includes(text.toUpperCase())
        ).length === 0 && (
          <div className="text-red-500 font-bold text-center mx-auto bg-[#0e1c2f70] w-full pb-8">
            {`No elevators found for ${text} search`}
          </div>
        )}
      </div>
    </>
  );
}
