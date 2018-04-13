const tooltip = document.getElementById('tooltip');

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(
        Tooltip,
        { text: "The book you're reading now" },
        "React Quickly"
    ),
    " was published in 2017."
), tooltip);