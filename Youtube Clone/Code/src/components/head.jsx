import React, { useState } from "react";
import mic from "../assets/mic.svg";
import bell from "../assets/bell.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import video from "../assets/video_plus.png";
import mic_off from "../assets/mic_off.svg";
import menu from "../assets/menu.svg";
import search from "../assets/search.svg";
import video_off from "../assets/videocam_off.svg";
function Head() {
  const [isActive, setIsActive] = useState(true);
  const [isvideo, setIsvideo] = useState(true);

  const handleclick = () => {
    // alert("trying to acccess microphone")

    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
    // console.log(isActive)
  };

  const handleClick = () => {
    if (isvideo) {
      setIsvideo(false);
    } else {
      setIsvideo(true);
    }
    // console.log(isActive)

    //alert("trying to access Video Camera")
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5  shadow-lg">
      <div className="flex col-span-1 justify-center items-center ">
        <div className="z-1 rounded-full w-100  hover:bg-gray-200 p-1">
          <img
            alt="menu"
            src={menu}
            className="h-8 cursor-pointer z-2"
            onClick={() => toggleMenuHandler()}
          />
        </div>

        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>

      <div className="col-span-12">
        <div className="flex justify-center">
          <input
            type="text"
            className="px-5 w-1/2 border border-gray-400 rounded-l-full py-2 "
          />
          <button className="border border-gray-400 rounded-r-full px-5 py-2 bg-gray-200 hover:bg-gray-300">
            <img src={search} alt="search" />
          </button>
          {isActive ? (
            <img
              alt="mic"
              src={mic}
              className=" h-9 hover:bg-gray-300  p-1 rounded-full cursor-pointer "
              onClick={handleclick}
            />
          ) : (
            <img
              alt="mic"
              src={mic_off}
              className=" h-9 hover:bg-gray-300 p-1 rounded-full cursor-pointer "
              onClick={handleclick}
            />
          )}
        </div>
      </div>

      <div className="col-span-1">
        <div className="flex items-center justify-center">
          {isvideo ? (
            <img
              src={video}
              className="h-9 hover:bg-gray-300 rounded-full p-1"
              onClick={handleClick}
            />
          ) : (
            <img
              src={video_off}
              className="h-9 hover:bg-gray-300 rounded-full p-1"
              onClick={handleClick}
            />
          )}

          <img src={bell} className="h-9 hover:bg-gray-300 rounded-full p-1" />
          <img
            className="h-9 hover:bg-gray-300 rounded-full p-1"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Head;
