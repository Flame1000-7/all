import "./App.css";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [operration, setOperration] = useState(0);
    const [sim, setSim] = useState(0)
    const changeOpera = (e) => {
        setOperration(parseInt(e.target.value));
    };
    return (
        <div>
            <p>{count}</p>
            <button
                onClick={() => {
                    if (count + operration > 500) {
                        alert("БОЛЬШЕ НИЗЯ");
                        setCount(500);
                    } else if (count + operration < -500) {
                        alert("МЕНЬШЕ НИЗЯ");
                        setCount(-500);
                    } else {
                        setCount(count + operration);
                    }
                }}
            >
                операция
            </button>
            <input onChange={changeOpera} type="number" />
            <button
            onClick={()=>{
                setSim(count)
                setCount(0)
            }}
            >Сбросить</button>
            <button
            onClick={()=>{
                setCount(sim)
            }}
            >Вернуть</button>
        </div>
    );
}

export default App;
