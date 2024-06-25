"use client";
import "./Loader.scss";
import logos from "../../Assets/Logo/zondra.png";
import Image from "next/image";
import { GlobalStore } from "@/ContextAPI/Store";
import { useContext } from "react";

function Loader() {
  const { isLoader } = useContext(GlobalStore);
  return (
    <>
      {isLoader ? (
        <div className="loaderContainer">
          <Image src={logos} alt="logo" className="logo" width={'90px'}height={'100px'}/>
        </div>
      ) : null}
    </>
  );
}

export default Loader;
