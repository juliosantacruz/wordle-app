import React, { useEffect, useState } from "react";
import lightIcon from "@/assets/icon/light_Sky Switch - Light.png";
import lightChart from "@/assets/icon/light_Chart_duotone_line.png";
import lightQuestion from "@/assets/icon/light_question-circle-fill.png";

import darkIcon from "@/assets/icon/dark_Sky Switch - Dark.png";
import darkChart from "@/assets/icon/dark_Chart_fill.png";
import darkQuestion from "@/assets/icon/dark_question-circle-fill.png";

export default function Header() {
  const [darkMode, setDarkMode]=useState(true)

  useEffect(()=>{
    if(darkMode){
      document.querySelector('html')?.classList.add('dark')
    }else{
      document.querySelector('html')?.classList.remove('dark')

    }
  },[darkMode])
  return (
    <nav className="flex items-center justify-between w-[638px] h-[84px] mb-6 rounded-[15px] bg-[#F3F3F3] dark:bg-gray-800 p-4 ">
      <div>
        <button>
          {" "}
          <img
            src={darkMode ? darkQuestion : lightQuestion}
            className="h-[32px]"
            alt="Question Icon"
          />
        </button>
      </div>

      <div className="text-6xl font-bold uppercase font text-[#202537] dark:text-[#DADCE0]">wordle</div>

      <div>
        <div className="flex items-center gap-4">
          <button>
            {" "}
            <img
              src={darkMode ? darkChart : lightChart}
              className="h-[32px]"
              alt="Chart Icon"
            />
          </button>
          <button onClick={()=>setDarkMode(!darkMode)}>
            {" "}
            <img
              src={darkMode ? darkIcon : lightIcon}
              className="h-[32px]"
              alt="IconDarkMode"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
