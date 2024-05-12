import JSConfetti from "js-confetti";
import { useEffect, useState } from "react";

/**
 * You've learned too much by seeing this.
 *
 * 이걸 본 넌 너무 많은 것들을 알아버렸어.
 */

export default function EasterEgg() {
  const [currentInput, setInput] = useState(0);
  const [triggerCount, setTriggerCount] = useState(0);
  const command = ["u", "n", "d", "e", "r", "t", "a", "l", "e"];

  const voice = new Audio("/dont-open-it/please/no/dont-do-that/voice.mp3");
  const sans = new Audio("/dont-open-it/please/no/dont-do-that/sans.mp3");
  const highlight = new Audio(
    "/dont-open-it/please/no/dont-do-that/highlight.mp3"
  );
  const death = new Audio("/dont-open-it/please/no/dont-do-that/death.mp3");

  const confetti = () => {
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
      emojis: ["💀", "☠️", "🩻", "🏴‍☠️", "WA!", "SANS!"],
    });
  };

  useEffect(() => {
    const handleKeypress = (e: KeyboardEvent) => {
      if (e.key === command[currentInput]) {
        setInput(currentInput + 1);
        if (currentInput === 0 && triggerCount === 0) {
          console.log(
            "it's a beautiful day outside. birds are singing, flowers are blooming..."
          );
        }
        if (currentInput > 4) {
          voice.play();
        }
        if (currentInput === command.length - 1) {
          if (triggerCount === 0) {
            console.log("that expression that you're wearing...");
          }
          if (triggerCount === 1) {
            console.log("well, i won't grace it with a description.");
          }
          if (triggerCount === 2) {
            console.log("you're really kind of a freak, huh?");
          }
          if (triggerCount > 2) {
            console.log("until suddenly, everything ends.");
          }
          setTriggerCount(triggerCount + 1);
          if (triggerCount > 2) {
            highlight.play();
          } else {
            sans.play();
          }
          setInput(0);
          confetti();
          return;
        }
      } else {
        if (currentInput > 5) {
          let body = document.querySelector("body");
          let shakeCount = 0;
          const shake = () => {
            if (body) {
              if (shakeCount < 10) {
                const move = shakeCount % 2 === 0 ? 10 : -10;
                body.style.transform = `translate(${move}px, ${move}px)`;
                shakeCount++;
                setTimeout(shake, 50);
              } else {
                body.style.transform = "";
              }
            }
          };
          shake();
          death.play();
        }
        setInput(0);
      }
    };

    document.addEventListener("keydown", handleKeypress);

    return () => {
      document.removeEventListener("keydown", handleKeypress);
    };
  }, [currentInput]);

  useEffect(() => {
    voice.load();
    sans.load();
    highlight.load();
  }, []);

  return <></>;
}
