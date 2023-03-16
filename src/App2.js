import "./App2.css";
import { useState } from "react";
function Random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function App2() {
    const [eng, setEng] = useState("english");
    const [symbols, setSymbols] = useState([
        { symbol: "!", state: false },
        { symbol: "@", state: false },
        { symbol: "#", state: false },
        { symbol: "$", state: false },
        { symbol: "%", state: false },
    ]);
    const [pass, setPass] = useState(0);
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);
    const changelet = (e) => {
        setCount(parseInt(e.target.value));
    };
    const changenum = (e) => {
        setNum(parseInt(e.target.value));
    };
    const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    const [leters] = useState([
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ]);
    const [ruslett] = useState([
        "а",
        "б",
        "в",
        "г",
        "д",
        "е",
        "ё",
        "ж",
        "з",
        "и",
        "й",
        "к",
        "л",
        "м",
        "н",
        "о",
        "п",
        "р",
        "с",
        "т",
        "у",
        "ф",
        "х",
        "ц",
        "ч",
        "ш",
        "щ",
        "э",
        "ю",
        "я",
    ]);
    return (
        <div className="wrap">
            <div className="text">
                <input onChange={changelet} type="number" />
                <p>БУКВЫ</p>
            </div>
            <div className="text">
                <input onChange={changenum} type="number" />
                <p>ЦИФРЫ</p>
            </div>
            <button
                onClick={() => {
                    let password = "";
        
                    // добавление букв
                    if (eng == "english") {
                        for (let i = 0; i < count; i++) {
                            password += leters[Random(0, 25)];
                        }
                    } else {
                        for (let i = 0; i < count; i++) {
                            password += ruslett[Random(0, 30)];
                        }
                    }

                    // добавление цифр
                    for (let b = 0; b < num; b++) {
                        password += numbers[Random(0, 9)];
                    }

                    // добавление символов
                    for (let t = 0; t < symbols.length; t++) {
                        if (symbols[t].state) {
                            password += symbols[t].symbol;
                        }
                    }

                    password = password
                        .split("")
                        .sort(() => Math.random() - 0.5)
                        .join("");
                    setPass(password);
                }}
            >
                ГЕНЕРАЦИЯ
            </button>
            <select
                className="lenguage"
                onChange={(e) => setEng(e.target.value)}
            >
                <option value="english">Пендосский</option>
                <option value="rus">Христианский</option>
            </select>
            <div className="symbols">
                {symbols.map((item) => {
                    return (
                        <div
                            className={`map ${item.state ? "active" : ""}`}
                            onClick={() => {
                                let newSymbols = symbols.slice(0);
                                newSymbols.forEach((symbol, index) => {
                                    if (item.symbol == symbol.symbol) {
                                        newSymbols[index].state =
                                            !newSymbols[index].state;
                                    }
                                    setSymbols(newSymbols);
                                });
                            }}
                        >
                            {item.symbol}
                        </div>
                    );
                })}
            </div>
            <p className="password">{pass} - ПАРОЛЬ</p>
        </div>
    );
}
export default App2;
