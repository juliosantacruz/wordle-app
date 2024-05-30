import "./App.css";
import Header from "@/components/Header";
import Keyboard from "@/components/Keyboard";
import GuessRow from "@/components/GuessRow";
import { useState } from "react";
import TheRules from "./components/TheRules";
import Stats from "@/components/Stats";
import { useGameStore } from "./store/gameStore";
import AsideModal from "./components/AsideModal";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { theRules, stats } = useGameStore();

  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#F9F9F9] dark:bg-[#262B3C]">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex flex-col items-center m-[100px]">
          <GuessRow guess="tests" word="loles" isGuessed={true} />
          <GuessRow guess="tests" word="loles" isGuessed={true} />
          <GuessRow guess="tests" word="loles" isGuessed={true} />
          <GuessRow guess="" word="loles" isGuessed={false} />
          <GuessRow guess="" word="loles" isGuessed={false} />
        </div>
        <Keyboard darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      {theRules ? (
        <AsideModal children={<TheRules />} openModal={theRules} />
      ) : null}
      {stats ? <AsideModal children={<Stats />} openModal={stats} /> : null}
    </>
  );
}

export default App;
