/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import wordsList from "@/mock/wordsList.json";

type Store = {


  word: string;
  guessArray: string[];
  currenGuess: number;
  win: {
    win:boolean
  };

  lost: {lost:boolean};
  gameInit:()=>void
  submitGuess:()=>void

  handleKeyup:(e:KeyboardEvent)=>void
};

export const useGameStore = create<Store>()((set, get) => ({
  word: "",
  guessArray: ['','','','','',''],
  currenGuess: 0,
  isLost: false,
  win: {
    get win() {
      const isWin = get().guessArray[get().currenGuess - 1] === get().word;
      return isWin;
    },
  },
  lost: {
    get lost() {
      const isLost = get().currenGuess === 6 ? true : false;
      return isLost;
    },
  },

  gameInit:()=>set(()=>({
    word:wordsList[Math.round(Math.random()*wordsList.length)],
    guessArray:['','','','','',''],
    currenGuess:0
  })),
  submitGuess:()=>{
    if(wordsList.includes(get().guessArray[get().currenGuess])){
      set((state)=>({
        currenGuess:state.currenGuess + 1
      }))
    }
  },
  handleKeyup:(e)=>{
      console.log('le key',e.key)
      if(get().win|| get().lost){
        return
      }
      if(e.key=== "Enter"){
        console.log('enter',e.key)
        return get().submitGuess
      }
      if(e.key==="Backspace"){
        const lastCharIndex = get().guessArray[get().currenGuess].length - 1
        get().guessArray[get().currenGuess].slice(0,lastCharIndex)
        return
      }
      if(get().guessArray[get().currenGuess].length<5 && e.key.match(/[A-z]/)){
        set((state)=>({
          guessArray:[...state.guessArray, get().guessArray[get().currenGuess] + e.key.toLowerCase()]
        }))

      }

  },

  })
);
