import { useState } from "react";
import Header from "../components/Header";

function CounterPage() {
  const [num, setNum] = useState(0);

  return (
    <>
      <Header title={"Counter"} />
      <div className="flex justify-center gap-4 py-4">
        <button
          className="bg-gray-500 text-white text-center w-8"
          onClick={() => {
            if (num > 0) {
              setNum(num - 1);
            }
          }}
        >
          -
        </button>
        <h1>{num}</h1>
        <button
          className="bg-gray-500 text-white text-center w-8"
          onClick={() => {
            if (num < 10) {
              setNum(num + 1);
            }
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default CounterPage;
