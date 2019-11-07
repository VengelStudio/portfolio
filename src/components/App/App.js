import React from "react";
import "./App.scss";
import ParallaxBg from "../ParallaxBg/ParallaxBg";
import FullHeightWrapper from "../FullHeightWrapper/FullHeightWrapper";
import Header from "../Header/Header";
import VSheader from "../VSheader/VSheader";

const App = () => {
    return (
        <div className="main">
            <ParallaxBg />
            <FullHeightWrapper>
                <VSheader size="h1">Vengel Studio</VSheader>
            </FullHeightWrapper>
            <FullHeightWrapper>
                <Header>test2</Header>
            </FullHeightWrapper>
            <FullHeightWrapper>
                <Header>test3</Header>
            </FullHeightWrapper>
        </div>
    );
};

export default App;
