import React from "react";
import Dice from "./Dice";
import "./assets/css/MainPage.css";
import Card from "./Card";


interface DiceSum {
    dices: Array<number>;
    sum:number;
}
function MainPage() {
    const [dices, setDices] = React.useState<Array<number>>([]);
    const [dicesStage, setDicesStage] = React.useState<Array<boolean>>([]);
    const [sums, setSums] = React.useState<DiceSum[]>([]);
    const HandleRollClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setDices([...dices, Math.floor(Math.random() * 20) + 1]);
        setDicesStage([...dicesStage, false]);
    };
    const HandleClearClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setDices([]);
        setDicesStage([]);
    };
    const HandleDiceClick = (index: number) => {
        const newDicesStage = [...dicesStage];
        newDicesStage[index] = !newDicesStage[index];
        setDicesStage(newDicesStage);
    };
    const HandleCancleSelect = () => {
        setDicesStage(dicesStage.map(() => false));
    };
    const HandleSumClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        let sum = 0;
        const selectDice: number[] = [];
        for (let i = 0; i < dices.length; i++) {
            if (dicesStage[i]) {
                sum += dices[i];
                selectDice.push(dices[i]);
            }
        }
        setSums([...sums, { dices: selectDice, sum: sum }])
    };
    const HandleSumClear = (event: React.MouseEvent) => {
        event.stopPropagation();
        setSums([]);
    }

    const HandleHelpCilck = () => {
        alert("点击骰子可以选中, 双击空白位置可以取消选中.\n点击 Sum 按钮可以计算选中骰子的和.\n点击 Clear Sum 按钮可以清空所有计算结果.\n点击 Clear 按钮可以清空所有骰子.\n点击 Roll 按钮可以投掷一个骰子.")
    }
    React.useEffect(() => {
        const helpButton = document.getElementById("help");
        helpButton?.classList.add("emphasize")
        setTimeout(() => {
            helpButton?.classList.remove("emphasize")
        }, 3000);
    }, [])

    return (
        <div className="main-page" onDoubleClick={HandleCancleSelect}>
            <div className="main-container">
                <div className="dices-container">
                    {dices.length != 0
                        ? dices.map((dice, index) => {
                            return (<Dice key={index} index={index} acitive={dicesStage[index]} n={dice} onClick={HandleDiceClick} />)
                        })
                        : "请点击 Roll 按钮, 投掷一个骰子."}
                </div>
                <button className="btn roll-btn" onClick={HandleRollClick}>
                    Roll
                </button>
                <button className="btn clear-btn" onClick={HandleClearClick}>
                    Clear
                </button>

            </div>
            <div className="sum-container">
                {
                    sums.map((sum, index) => {
                        return (
                            <Card key={index} title={`骰子: ${sum.dices.join("+")}`}>
                                <div>{sum.sum}</div>
                            </Card>
                        )
                    })
                }
                <button className="btn sum-btn" onClick={HandleSumClick}>
                    Sum
                </button>
                <button className="btn sum-btn" onClick={HandleSumClear}>
                    Clear Sum
                </button>
            </div>
            <div id="help" className="help-button" onClick={HandleHelpCilck}>?</div>
        </div>
    );
}

export default MainPage;
