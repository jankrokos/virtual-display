import { MoveLeft, MoveRight, MoveUp, MoveDown } from "lucide-react";
import { useState } from "react";
import NavButton from "./components/navButton";

function App() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const maxFrames = 60;

  const leftClick = () => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame > 0 ? prevFrame - 1 : 479));
    }, 33);

    setTimeout(() => {
      clearInterval(interval);
    }, 33 * maxFrames);
  };

  const rightClick = () => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame < 480 ? prevFrame + 1 : 1));
    }, 33);

    setTimeout(() => {
      clearInterval(interval);
    }, 33 * maxFrames);
  };

  const middleClick = () => {
    if (currentFrame == 0) {
      setCurrentFrame(480);
    }

    if (currentFrame == 240) {
      setCurrentFrame(540);
    }

    if (currentFrame == 480 || currentFrame == 0) {
      const interval = setInterval(() => {
        setCurrentFrame((prevFrame) => prevFrame + 1);
      }, 33);

      setTimeout(() => {
        clearInterval(interval);
        setCurrentFrame(240);
      }, 33 * maxFrames);
    }

    if (currentFrame == 240 || currentFrame == 540) {
      const interval = setInterval(() => {
        setCurrentFrame((prevFrame) => prevFrame - 1);
      }, 33);

      setTimeout(() => {
        clearInterval(interval);
        setCurrentFrame(0);
      }, 33 * maxFrames);
    }
  };

  return (
    <main className="h-screen w-screen overflow-hidden bg-black">
      <div className="h-[75vh] flex items-center justify-center">
        <img
          className="ml-7"
          src={`/virtual-display${currentFrame
            .toString()
            .padStart(4, "0")}.jpg`}
          alt="Museum"
        />
        img
      </div>

      <div
        className="h-[25vh] flex items-center justify-center sm:gap-14 gap-5
       px-5"
      >
        <NavButton
          onClick={
            currentFrame === 0 || currentFrame === 480 ? rightClick : leftClick
          }
        >
          <MoveLeft size={48} className="mx-auto" />
        </NavButton>
        <NavButton
          onClick={middleClick}
          visible={
            currentFrame === 0 ||
            currentFrame === 480 ||
            currentFrame === 240 ||
            currentFrame === 540
          }
        >
          {currentFrame == 0 || currentFrame == 480 ? (
            <MoveUp size={48} className="mx-auto" />
          ) : (
            <MoveDown size={48} className="mx-auto" />
          )}
        </NavButton>
        <NavButton
          onClick={
            currentFrame === 0 || currentFrame === 480 ? leftClick : rightClick
          }
        >
          <MoveRight size={48} className="mx-auto" />
        </NavButton>
      </div>
    </main>
  );
}

export default App;
