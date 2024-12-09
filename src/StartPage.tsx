import "./assets/css/StartPage.css";
import diceLogo from "/d20.png";
function StartPage({ onRemove }: { onRemove: () => void }) {
    return (
        <div className="StartPage" onAnimationEnd={onRemove}>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={diceLogo} className="logo" alt="Dice logo" />
                </a>
            </div>
            <h1>骰子工具</h1>
        </div>
    );
}

export default StartPage;
