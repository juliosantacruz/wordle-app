import "./App.css";
import Header from "@/components/Header";
import Keyboard from "@/components/Keyboard";
import GuessRow from "@/components/GuessRow";

function App() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#262B3C]">
      <Header />
      <div className="flex flex-col items-center">


      <GuessRow guess="tests" word="loles" isGuessed={true} />
      <GuessRow guess="tests" word="loles" isGuessed={true} />
      <GuessRow guess="tests" word="loles" isGuessed={true} />
      <GuessRow guess="" word="loles" isGuessed={false} />
      <Keyboard />
      </div>
    </div>
  );
}

export default App;
