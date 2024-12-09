import { useState } from "react";
import StartPage from "./StartPage";
import MainPage from "./MainPage";

function App() {
    const [start, setStart] = useState(true);
    const StartPageRemove = () => {
        setStart(false);
    };

    return (
        <>{start ? <StartPage onRemove={StartPageRemove} /> : <MainPage />}</>
    );
}

export default App;
