import React from "react";
import home from "../assets/home.png";
import subscription from "../assets/subscription.png";
import video from "../assets/video-solid.svg";
import youtube from "../assets/Youtube_Shorts_(outline).svg";
import subscribe from "../assets/images.png";
import { useSelector } from "react-redux";
import video_white from "../assets/video.svg";
import subscribe_white from "../assets/jeevan.svg";
import { Link } from "react-router-dom";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return pattern
  if (!isMenuOpen)
    return (
      <div className="p-5 shadow-lg w-20">
        <ul>
          <li>
            <div className="flex flex-col items-center gap-1 rounded full  hover:bg-slate-200 cursor-pointer mb-8">
              <Link to="/">
                <img alt="Home" src={home} className="h-7" />
              </Link>
              <Link to="/">
                <div className="text-sm">Home</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center gap-1 hover:w-100 rounded full hover:bg-gray-300 cursor-pointer mb-8">
              <img alt="Home" src={subscribe_white} className="h-7 mt-1" />
              <div className="text-sm">Subscribe</div>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center gap-1  rounded full  hover:bg-slate-200 cursor-pointer mb-8">
              <img alt="Home" src={youtube} className="h-7 w-7 mt-1" />
              <div className="text-sm">Shorts</div>
            </div>
          </li>
          <div className="flex  flex-col items-center gap-1  rounded full  hover:bg-slate-200 cursor-pointer mb-8">
            <img alt="Home" src={video_white} className="h-6 mt-1" />
            <div className="text-sm">Video</div>
          </div>
          <li></li>
        </ul>
      </div>
    );

  return (
    <div className="p-5 shadow-lg w-72">
      <ul>
        <li>
          <div className="flex items-center gap-6 rounded full  hover:bg-slate-200 cursor-pointer">
            <Link to="/">
              <img alt="Home" src={home} className="h-7" />
            </Link>

            <Link to="/"><div className="text-sm">Home</div></Link>
            
          </div>
        </li>
        <li>
          <div className="flex items-center gap-6 hover:bg-slate-200 cursor-pointer">
            <img alt="Home" src={subscribe_white} className="h-7 mt-1" />
            <div className="text-sm">Subscribe</div>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-6  rounded full  hover:bg-slate-200 cursor-pointer">
            <img alt="Home" src={youtube} className="h-7 w-7 mt-1" />
            <div className="text-sm">Shorts</div>
          </div>
        </li>
        <div className="flex items-center gap-6  rounded full  hover:bg-slate-200 cursor-pointer">
          <img alt="Home" src={video_white} className="h-6 mt-1" />
          <div className="text-sm">Video</div>
        </div>
        <li></li>
      </ul>
      <div className="border border-solid border-gray-400 w-100 h-0 mt-1"></div>
      <div className="mt-1">
        <h1>Subscriptions</h1>
        <ul className="text-sm">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
