import { useState } from "react";

export default function Counter() {
  const [number, setNum] = useState(0)
  const updateCounter = (value) => setNum((prev) => prev + value);
  const buttonStyles = 'border p-4 hover:bg-slate-800 text-slate-50 bg-slate-900'

  const numsArr = [5, 10, 15, 25];

  return (
    <div className="flex justify-center">
      <div className="border mt-2 w-6/12">
        <div className="border p-2 flex justify-center">
          <h2>Counter</h2>
        </div>
        <div className="bg-orange-400 p-2 text-center text-2xl">{number}</div>

        <div className="flex">
          <button onClick={() => updateCounter(1)} className={`w-6/12 ${buttonStyles}`}>
            +
          </button>
          <button onClick={() => updateCounter(-1)} className={`w-6/12 ${buttonStyles}`}>
            -
          </button>
        </div>

        <div className="grid grid-cols-4 ">
          {numsArr.map((val) => (
            <button key={val} onClick={() => updateCounter(val)} className={buttonStyles}>
              + {val}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4">
          {[5, 10, 15, 25].map((val) => (
            <button key={val} onClick={() => updateCounter(-val)} className={buttonStyles}>
              - {val}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
