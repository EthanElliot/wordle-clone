import { words } from "../constants/words"

export const checkWord=  (word:string):boolean =>  {
  return words.has(word)
}