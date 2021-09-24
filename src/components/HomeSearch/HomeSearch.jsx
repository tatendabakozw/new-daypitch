import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";
import { Input } from "@chakra-ui/react";

function HomeSearch() {
  const history = useHistory();
  // eslint-disable-next-line
  const [category, setCategory] = useState("");
  const [selected, setSelected] = useState("jobs");

  const searchItems = (e) => {
    e.preventDefault();
    {
      selected === "jobs"
        ? history.push("/explorejobs")
        : history.push("/explore");
    }
  };

  return (
    <div className="sear transition duration-500 ease-in-out w-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-row items-center">
          <div
            className={`${
              selected === "jobs" ? "bg-blue-200 " : "bg-white "
            }  dark:bg-gray-700 dark:text-gray-200 ml-4 cursor-pointer rounded-tl-lg border-r border-gray-300 w-24 py-2 text-center flex flex-col items-center`}
          >
            <div
              onClick={() => setSelected("jobs")}
              className="text-center text-gray-600 dark:text-gray-400"
            >
              Jobs
            </div>
          </div>
          <div
            onClick={() => setSelected("sellers")}
            className={`${
              selected === "sellers" ? "bg-blue-200 " : "bg-white "
            } cursor-pointer dark:bg-gray-700 dark:text-gray-200 rounded-tr-lg w-24 py-2 text-center flex flex-col items-center`}
          >
            <p className="text-center text-gray-600 dark:text-gray-400">
              Sellers
            </p>
          </div>
        </div>
        <form
          onSubmit={searchItems}
          className="transition duration-100 transform hover:scale-105 cursor-pointer flex flex-row items-center bg-white dark:bg-gray-800 md:p-4 p-2 px-4 shadow rounded-lg w-full"
        >
          <Input
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            className="bg-white w-full border dark:bg-gray-700 dark:border-gray-700 border-gray-100 md:mx-2 mx-0 p-6 my-2 rounded-lg outline-none"
            placeholder="Search..."
          />
          {/* <input 
                        type="text" 
                        onChange={e=>setLocation(e.target.value)}
                        className="bg-white border w-full dark:bg-gray-700 dark:border-gray-700 border-gray-300 md:mx-2 mx-0 p-3 rounded-lg outline-none"
                        placeholder="Location"
                    /> */}
          <button
            type="submit"
            className="dark:text-blue-800 text-blue-800 cursor-pointer outline-none hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700 rounded-full p-2"
          >
            <SearchIcon
              height={24}
              width={24}
              className="dark:text-blue-800 text-blue-800"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomeSearch;
