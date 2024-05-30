import darkDelIcon from "@/assets/icon/dark_Union.png";
import lightDelIcon from "@/assets/icon/light_Union.png";


type Props={
  darkMode:boolean,
  setDarkMode:(value:boolean)=>void
}

const keys = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "ñ",
  "Enter",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "del",
];

export default function Keyboard({darkMode}:Props) {
  return (
    <div className="flex flex-wrap gap-4 w-[638px] bg-[#dadce04d] dark:bg-[#dadce008] p-5 rounded-lg">
      {keys &&
        keys.map((key) => {
          if (key === "del") {
            return (
              <button className="flex justify-center items-center gap-1 w-[72px] h-[45px] rounded-md uppercase bg-[#D3D6DA] text-[#56575E] dark:bg-[#565F7E] dark:text-white text-2xl">
                <img src={darkMode?darkDelIcon:lightDelIcon} alt="" />
              </button>
            );
          } else {
            return (
              <button
                className={`flex justify-center items-center gap-1 ${key==='Enter'?'w-[72px] text-[15px]':'w-[45px]'} h-[45px] rounded-md uppercase bg-[#D3D6DA] text-[#56575E] dark:bg-[#565F7E] dark:text-white text-2xl`}
                key={key}
              >
                {" "}
                {key}
              </button>
            );
          }
        })}
    </div>
  );
}
