


type CharType = {
    value: string;
    color: string
}

export const formatGuess = (word:string,guess:string):CharType[] =>  {
    const wordArray: (string | null)[] = [...word]
    const formatGuess: CharType[] = [...guess].map((value) => {

        return { value: value, color: 'grey' }
    })

    formatGuess.forEach((char, i) => {
        if (wordArray[i] === char.value) {
            formatGuess[i].color = 'green'
            wordArray[i] = null
        }
    })

    formatGuess.forEach((char, i) => {
        if (wordArray.includes(char.value) && char.color !== 'green') {
            formatGuess[i].color = 'yellow'
            wordArray[wordArray.indexOf(char.value)] = null
        }
    })
    return formatGuess
  }