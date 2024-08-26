import axios from 'axios';



export const getWord= async ():Promise<string> =>  {
    const words:string[] = await axios.get('https://raw.githubusercontent.com/charlesreid1/five-letter-words/master/sgb-words.txt',{
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((response)=> response.data.split('\n'))

    const randomWord = words[Math.floor(Math.random()* words.length)]
    return randomWord
  }