import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
export default function Home() {
  const [pfp, setPfp] = useState("");
  function changeHandler(event) {
    setPfp(event.target.value);
  }

  if (pfp === "padawan") {
    window.open(
      "https://app.utopialabs.com/request/payment?daoId=6192ee4b6fb2705ff74d340c"
    );
  }

  return (
    <div className="bg-black w-screen h-screen p-2">
      <div className="">
        <div className="grid place-items-center pt-40">
          <h1 className="text-white text-2xl md:text-5xl">
            {" "}
            Access Our Utopia Labs
          </h1>
          <label
            htmlFor="name"
            className="text-base leading-7 text-blueGray-500"
          >
            Password
          </label>

          <textarea
            value={pfp}
            onChange={changeHandler}
            placeholder="Password"
            className=" w-1/2 h-3/6 px-4 py-1   mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
// w-1/2 px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
