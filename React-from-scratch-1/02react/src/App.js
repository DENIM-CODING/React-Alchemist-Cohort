import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const App = () =>{
    return React.createElement("div",{class:"test"},
        [
            React.createElement("h1",{},"Chai"),
            React.createElement(Chai, {name:"Green Tea" , cost: "1000"}),
            React.createElement(Chai, {name:"Black Tea" , cost: "600"})
        ]
    )
}
//props : properties
const Chai = (props) => {
    return React.createElement("div",{},[
        React.createElement("h4",{},props.name),
        React.createElement("h4",{},props.cost),

    ])
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App))

