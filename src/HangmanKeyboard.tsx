const KEYS = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
import styles from "./HangmanKeyboard.module.css"  

type KeyboardProps = {
    disabled?: boolean
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
  }
  

export function HangmanKeyboard({
    activeLetters,
    inactiveLetters,
    addGuessedLetter,
    disabled = false,
  }: KeyboardProps) {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
          gap: ".5rem",
        }}
      >
        {KEYS.map(key => {
          const isActive = activeLetters.includes(key)
          const isInactive = inactiveLetters.includes(key)
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`${styles.btn} ${isActive ? styles.active : ""} ${
                isInactive ? styles.inactive : ""
              }`}
              disabled={isInactive || isActive || disabled}
              key={key}
            >
              {key}
            </button>
          )
        })}
      </div>
    )
  }


// {KEYS.map((letter, index) => {          
//     return <button key={index}>
//         {letter}
//     </button>
// })}