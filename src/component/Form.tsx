import React from "react";
import { useGlobalContext } from "../store";

const Form = () => {
  const [user, setUser] = React.useState("");
  const { setName, setAge } = useGlobalContext();

  const handleClick = () => {
    setName(user);
    setAge(50)
    setUser("");
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex h-2/4 w-2/4 border mx-auto  flex-col items-center justify-center rounded-xl bg-white">
        <form className="w-full flex flex-col items-center gap-2 px-20">
          <div className="flex-col w-full flex">
            <label htmlFor="name">Name</label>
            <input
              className="border h-10 rounded-md"
              type="text"
              name="name"
              id="name"
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
          </div>
          <button
            className="bg-green-400 hover:bg-green-600 transition-colors duration-300 h-10 rounded-md w-full text-white"
            onClick={handleClick}
            type="button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
