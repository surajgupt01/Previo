import Upload from "./Upload";
import Mic from "./Mic";
import SendIcon from "./SendIcon";
import Play from "./play";
import { useNavigate } from "react-router-dom";
export default function Input() {

 

    

   const Navigate = useNavigate()
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center absolute p-4">
      <div className="text-purple-400 font-semibold absolute top-5 left-5 sm:text-2xl flex justify-center items-center ">
        <Play />
        Previo
      </div>


      <p className="font-semibold text-xl text-gray-400 text-center ">
        Redefining How Educational Content is Delivered.

        <br></br>
       <span className="text-lg text-gray-500">Turn your PDFs into engaging educational videos using AI — instantly.</span>
        </p>
      <div className="sm:w-190 w-100 min-h-45 h-auto rounded-xl bg-neutral-900 p-2 shadow-lg shadow-gray-900 mt-10">
        <textarea
          className="w-full min-h-30 h-auto  border-1 border-neutral-700 p-2 rounded-lg text-gray-300 resize-none"
          placeholder="Enter your requirements..."
          onChange={(e: any) => {
            console.log(e.currentTarget.offsetHeight);
            e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
          }}
        ></textarea>

        <div className="w-full flex">
          <div className="rounded-full hover:bg-neutral-700  relative sm:w-10 h-10 flex justify-center items-center duration-300 ease-in-out group">
            <Upload />

            <div className="bg-white text-neutral-900 text-xs absolute sm:w-17 shadow-md shadow-gray-700 rounded-md p-1 duration-300 ease-in-out top-4 group-hover:-top-4 group-hover:opacity-100 opacity-0">
              Upload file
            </div>
          </div>

          <div className="rounded-full hover:bg-neutral-700  relative sm:w-12 h-10 flex justify-center items-center duration-300 ease-in-out group">
            <Mic />

            <div className="bg-white text-neutral-900 text-xs absolute w-10 shadow-md shadow-gray-700 rounded-md p-1 duration-300 ease-in-out top-4 group-hover:-top-4 group-hover:opacity-100 opacity-0 ml-2">
              speak{" "}
            </div>
          </div>

           <div className="rounded-full hover:bg-neutral-700  relative sm:w-14 h-12 flex justify-center items-center duration-300 ease-in-out group ml-[80%] sm:ml-[85%]">
            
             <button onClick={()=>{Navigate('/videoLect')}}><SendIcon/></button>

            <div className="bg-white text-neutral-900 text-xs absolute w-10 shadow-md shadow-gray-700 rounded-md p-1 duration-300 ease-in-out top-4 group-hover:-top-4 group-hover:opacity-100 opacity-0 ml-2">
              Send{" "}
            </div>
          </div>
        </div>
      </div>

      <button className=" text-red-400 p-2 text-xs hover:border-red-700 hover:text-red-700 rounded-full border-1 border-red-400 cursor-pointer absolute top-10 right-10 ">
        Logout
      </button> 
    </div>
  );
}
