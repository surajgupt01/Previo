import { useRef, useState } from "react";
import "./App.css";
import Play from "./play";
import Pause from "./pause";
import Less from "./Less";
import More from "./More";
import Back from "./Back";
import { useNavigate } from "react-router-dom";

export default function Lecture() {
  const [play, setPlay] = useState(false);
  const video = useRef<HTMLVideoElement | null>(null);
  const Navigate = useNavigate()

  const skipTime = (seconds: number) => {
    if (video.current) {
      video.current.currentTime += seconds;
    }
  };

  return (
    <div className="bg-black w-full h-auto  flex flex-col justify-center items-center relative">
      
      <div className="text-purple-400 font-semibold absolute top-5 left-5 text-2xl flex justify-center items-center ">
        <Play />
        Pevio
      </div>

      <button className="flex justify-center items-center absolute sm:top-15 top-25 sm:left-40 left-10 cursor-pointer text-gray-500 hover:text-gray-600 p-2" onClick={()=>
        Navigate('/')
      }>
        <Back />
        back
      </button>

      <div className="border-1 flex sm:flex-row  flex-col  sm:mt-25 mt-35 p-2">
        <div className="border-1 border-gray-800 sm:w-200 w-full sm:h-120 h-60 rounded-lg mr-8 relative  flex justify-center items-center  group ">
          <video
            ref={video}
           
            className="w-full h-full object-cover rounded-lg absolute shadow-lg shadow-gray-900 "
            
          >
            <source  type="video/mp4" />
          </video>

          <div className="absolute flex justify-center items-center group-hover:opacity-100 opacity-0 duration-300 ease-in-out sm:scale-100 scale-80">
            <div
              className="w-10 rounded-full hover:scale-110 duration-300 bg-gray-200 shadow-lg shadow-gray-600 h-10 flex justify-center items-center mr-6"
              onClick={() => {
                skipTime(-10);
              }}
            >
              <Less />
            </div>
            <div
              className="bg-gray-200 shadow-lg hover:scale-110  shadow-gray-600 rounded-full w-20 h-20 flex justify-center items-center  duration-500 ease-in-out z-100 g cursor-pointer "
              onClick={() => {
                setPlay(!play);
                if (play) video.current?.play();
                else video.current?.pause();
              }}
            >
              {play ? <Play /> : <Pause />}
            </div>

            <div
              className="w-10 rounded-full bg-gray-200 shadow-lg hover:scale-110 duration-300 shadow-gray-600 h-10 flex justify-center items-center ml-6 "
              onClick={() => skipTime(10)}
            >
              <More />
            </div>
          </div>
        </div>

        <hr className="text-gray-600 mt-8"></hr>

        <div className=" border-1 border-gray-900 shadow-lg shadow-gray-900 w-90 sm:mt-0 mt-8 sm:h-[450px] h-[220px] rounded-lg  p-4 overflow-auto flex flex-col items-center  ">
          <span className="font-semibold text-purple-600 mb-4">Chapters</span>

          <div className="w-full h-[95%] scroll-smooth rounded-lg  overflow-auto p-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <li
                key={i}
                className="w-full h-14 bg-gray-900 list-none rounded-md mb-2"
              ></li>
            ))}
          </div>
        </div>
      </div>

      <div className="sm:w-280 w-[90%] sm:h-70 h-auto overflow-auto mb-20  bg-neutral-900  mt-8 rounded-lg font-semibold text-white font p-4 text-left">
        <div className="flex justify-center items-center w-20">
          <div className="w-5 h-5 rounded-full bg-purple-300"></div>
          <span className="font-semibold ml-2">Pevio</span>{" "}
        </div>
        <br></br>
        <div>
          <span>Chapter Title: Magnetism and Magnetic Effects of Current</span>
            <br></br>
          <div className="text-gray-400 text-sm mt-4 text-justify ml-4 w-[95%]">
            Welcome to this exciting chapter on Magnetism, where we explore one
            of nature’s most fascinating forces! In this lesson, we’ll take you
            on a journey from the mysterious behavior of magnets to the powerful
            connection between electricity and magnetism. Starting with the
            basics — like magnetic fields, poles, and field lines — we’ll move
            into how electric current produces magnetic fields, and how this
            principle powers real-world technologies like motors and generators.
            By the end of this video, you'll understand: What causes magnetic
            forces How to visualize and map magnetic field lines The working of
            a solenoid and bar magnet Oersted's experiment and its revolutionary
            impact The concept of Ampere’s Law Applications of magnetism in
            everyday life With clear animations, step-by-step explanations, and
            practical examples, this video is designed to help you grasp
            concepts faster and retain them longer.
          </div>
        </div>
      </div>
    </div>
  );
}

