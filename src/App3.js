import "./App3.css";
import { useState } from "react";
function App3() {
    const mass = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ];
    const [start, setStart] = useState(true);
    const [pole, setPole] = useState(["", "", "", "", "", "", "", "", ""]);
    const [symbol, setSymbol] = useState("X");

    const checkWin = (newPole) => {
        const newStart = start;
        setStart(false);
        setTimeout(() => {
            let checkWin = true;
            for (let i = 0; i < mass.length; i++) {
                if (
                    newPole[mass[i][0]] == "X" &&
                    newPole[mass[i][1]] == "X" &&
                    newPole[mass[i][2]] == "X"
                ) {
                    alert("ВЫИГРАЛИ КРЕСТИКИ");
                    checkWin = false;
                    setSymbol("X");
                }
                if (
                    newPole[mass[i][0]] == "O" &&
                    newPole[mass[i][1]] == "O" &&
                    newPole[mass[i][2]] == "O"
                ) {
                    alert("ВЫИГРАЛИ НОЛИКИ");
                    checkWin = false;
                }
            }
            if (checkWin == false) {
                setPole(["", "", "", "", "", "", "", "", ""]);
            }
            let emptyPole = true;
            for (let k = 0; k < newPole.length; k++) {
                if (newPole[k] == "") {
                    emptyPole = false;
                }
            }

            if (emptyPole && checkWin == true && !newStart) {
                alert("НИЧЬЯ");
                setSymbol("X");
                setPole(["", "", "", "", "", "", "", "", ""]);
            }
        }, 0);
    };

    const addSymbol = (index) => {
        if (pole[index] != "") {
            return;
        }
        const newPole = pole.slice(0);
        newPole[index] = symbol;
        setPole(newPole);
        if (symbol == "X") {
            setSymbol("O");
        }
        if (symbol != "X") {
            setSymbol("X");
        }

        checkWin(newPole);
    };

    return (
        <div className="TikTakToe">
            {pole.map((item, index) => {
                return (
                    <div className="play" onClick={()=>addSymbol(index)}>
                        <p>{pole[index]}</p>
                    </div>
                );
            })}
        </div>
    );
}
export default App3;
