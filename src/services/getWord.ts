import { words } from "../constants/words"

export const getWord=  ():string =>  {
  const wordArray: string[] = Array.from(words)
    const randomWord = wordArray[Math.floor(Math.random()* wordArray.length)];
    console.log(randomWord);
    return randomWord
  }