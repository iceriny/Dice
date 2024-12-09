import React from "react";
import Dice from "./Dice";
import "./assets/css/MainPage.css";

function MainPage() {
    const [dices, setDices] = React.useState<Array<number>>([]);
    const HandleRollClick = () => {
        setDices([...dices, Math.floor(Math.random() * 20) + 1]);
    };
    const HandleClearClick = () => {
        setDices([]);
    };
    return (
        <div className="main-page">
            <div className="dices-container">
                {dices.length != 0
                    ? dices.map((dice, index) => <Dice key={index} n={dice} />)
                    : "请点击 Roll 按钮, 投掷一个骰子."}
            </div>
            <button className="btn roll-btn" onClick={HandleRollClick}>
                Roll
            </button>
            <button className="btn clear-btn" onClick={HandleClearClick}>
                Clear
            </button>
        </div>
    );
}

export default MainPage;
