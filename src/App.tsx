import "./App.css";
import Header from "@/components/Header";
import Keyboard from "@/components/Keyboard";
import GuessRow from "@/components/GuessRow";
import Stats from "@/components/Stats";
import TheRules from "./components/TheRules";

function App() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#F9F9F9] dark:bg-[#262B3C]">
      <Header />
      <div className="flex flex-col items-center m-[100px]">
        {/* <GuessRow guess="tests" word="loles" isGuessed={true} />
        <GuessRow guess="tests" word="loles" isGuessed={true} />
        <GuessRow guess="tests" word="loles" isGuessed={true} />
        <GuessRow guess="" word="loles" isGuessed={false} />
        <GuessRow guess="" word="loles" isGuessed={false} /> */}
      </div>
        {/* <Keyboard /> */}
        {/* <Stats/> */}
        <TheRules/>
    </div>
  );
}

export default App;
