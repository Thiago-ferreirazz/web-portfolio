import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    // <div className=" rounded-md h-auto shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 ">
    //   <div
    //     className="h-72 w-auto  relative group"
    //     style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        
    //   >
    
    //     <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex  rounded-t-xl transition-all duration-500 ">
    //       <Link
    //         href={gitUrl}
    //         className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
    //       >
    //         <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
    //       </Link>
    //       <Link
    //         href={previewUrl}
    //         className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
    //       >
    //         <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="bg-zinc-900 text-white rounded-b-xl  bg-[#181818]py-6 px-4 ">
    //     <h5 className="text-xl font-semibold mb-2">{title}</h5>
    //     <p className="text-[#ADB7BE]">{description}</p>
    //   </div>
    // </div>

    
     <div className='h-80 group relative overflow-hidden border-2 border-white/50 rounded-xl'>
  
     <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

     <img
       className=' h-full w-full group-hover:scale-125 transition-all duration-500'
       src={imgUrl}
       alt=''
     />
   
     <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
       <span className='text-gradient'>{description}</span>
     </div>
 
     <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
       <span className='text-3xl text-white'>{title}</span>
     </div>
   </div>
  );
};

export default ProjectCard;