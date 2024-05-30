/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import wordsList from "@/mock/wordsList.json";

type Store = {
  isFirstTime: boolean;
  setIsFirstTime: () => void;
  theRules: boolean;
  setTheRules: (value: boolean) => any;
  stats: boolean;
  setStats: (value: boolean) => void;

  word: string;
  guessArray: string[];
  currentGuess: number;
  numberOfGuesses: number;
  win: { win: boolean };
  lost: { lost: boolean };


  keypadGuess:{
    allGuesses:string[];
    setAllGuesses:()=>void;
    inexactGuesses:string[];
    setInexactGuesses:()=>void;
    exactGuesses:string[];
    setExactGuesses:()=>void;

  }

  gameInit: () => void;
  submitGuess: () => void;
  handleKeypad: (value: string) => void;

  handleKeyup: (e: KeyboardEvent) => void;
};

export const useGameStore = create<Store>()((set, get) => ({
  isFirstTime: true,
  setIsFirstTime: () =>
    set((state) => ({
      ...state,
      isFirstTime: false,
    })),
  // Ux States
  theRules: false,
  setTheRules: (value: boolean) =>
    set((state) => ({
      ...state,
      theRules: value,
    })),
  stats: false,
  setStats: (value: boolean) =>
    set((state) => ({
      ...state,
      stats: value,
    })),

  // Game State
  word: "",
  guessArray: ["", "", "", "", ""],
  currentGuess: 0,

  get numberOfGuesses() {
    return get().guessArray.length;
  },


  win: {
    get win() {
      const isWin = get().guessArray[get().currentGuess - 1] === get().word;
      return isWin;
    },
  },

  lost: {
    get lost() {
      const isLost = get().currentGuess === 5 ? true : false;
      return isLost;
    },
  },


  keypadGuess:{
    allGuesses:[''],
    setAllGuesses: ()=> set((state)=>({
      ...state,
      keypadGuess:{
        ...state.keypadGuess,
        allGuesses: state.guessArray.join("").split("")
      }
    })),
    inexactGuesses:[''],
    setInexactGuesses() {
      const inexactLetter = get().word.split('').filter((letter)=> get().keypadGuess.allGuesses.includes(letter))
      set((state)=>({
        ...state,
        keypadGuess:{
          ...state.keypadGuess,
          inexactGuesses: inexactLetter
        }
      }))
    },
    exactGuesses:[''],
    setExactGuesses:()=>{
      const wordGame = get().word.split('')
      const exactLetters = wordGame.filter((letter, i)=>{
        return get().guessArray.slice(0, get().currentGuess - 1).map((word)=>word[i]).includes(letter)
      })
      set((state)=>({
        ...state,
        keypadGuess:{
          ...state.keypadGuess,
          exactGuesses: [...get().keypadGuess.exactGuesses, ...exactLetters]
        }
      }))
    }
  },
  gameInit: () =>
    set(() => ({
      word: wordsList[Math.round(Math.random() * wordsList.length)],
      guessArray: ["", "", "", "", ""],
      currentGuess: 0,
    })),
  submitGuess: () => {
    console.log(
      "submit",
      get().guessArray[get().currentGuess],
      get().currentGuess
    );
    if (get().guessArray[get().currentGuess].length === 5) {
      get().keypadGuess.setAllGuesses()
      get().keypadGuess.setInexactGuesses()
      get().keypadGuess.setExactGuesses()
      set((state) => ({
        ...state,
        currentGuess: state.currentGuess + 1,
      }));
      console.log("gano?", get().win.win);
      console.log("perdio?", get().lost.lost);

    }
  },

  handleKeypad:(value:string)=>{
    if (get().win.win || get().lost.lost) {
      return;
    }
    if (value === "Enter") {
      console.log("enter");
      get().submitGuess();
    }
    if (value  === "Delete" || value  === "Backspace") {
      const lastCharIndex = get().guessArray[get().currentGuess].length - 1;
      const leGuess = get().guessArray[get().currentGuess];
      const updatedGuess = leGuess.slice(0, lastCharIndex);
      console.log(lastCharIndex, leGuess, updatedGuess);
      set((state) => ({
        ...state,
        guessArray: state.guessArray.map((guess, index) => {
          return index === state.currentGuess ? updatedGuess : guess;
        }),
      }));
      return;
    }
    if (
      get().guessArray[get().currentGuess].length < 5 &&
      value.match(/^[A-z]$/)
    ) {
      const stringTest = (get().guessArray[get().currentGuess] +=
        value.toLowerCase());

      set((state) => ({
        ...state,
        guessArray: state.guessArray.map((guess, index) => {
          return index === state.currentGuess ? stringTest : guess;
        }),
      }));
    }
  },
  handleKeyup: (e) => {
    if (get().win.win || get().lost.lost) {
      return;
    }
    if (e.key === "Enter") {
      console.log("enter");
      get().submitGuess();
    }
    if (e.key === "Delete" || e.key === "Backspace") {
      const lastCharIndex = get().guessArray[get().currentGuess].length - 1;
      const leGuess = get().guessArray[get().currentGuess];
      const updatedGuess = leGuess.slice(0, lastCharIndex);
      console.log(lastCharIndex, leGuess, updatedGuess);
      set((state) => ({
        ...state,
        guessArray: state.guessArray.map((guess, index) => {
          return index === state.currentGuess ? updatedGuess : guess;
        }),
      }));

      return;
    }
    if (
      get().guessArray[get().currentGuess].length < 5 &&
      e.key.match(/^[A-z]$/)
    ) {
      const stringTest = (get().guessArray[get().currentGuess] +=
        e.key.toLowerCase());

      set((state) => ({
        ...state,
        guessArray: state.guessArray.map((guess, index) => {
          return index === state.currentGuess ? stringTest : guess;
        }),
      }));
    }
  },
}));
