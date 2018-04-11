const interval_delay = 1000;
const container = document.getElementById('content');
let secondsLeft = 5;

let interval = setInterval(() => {
    if (secondsLeft == 0) {
        ReactDOM.render(React.createElement(
            'div',
            null,
            'Note was removed after ',
            secondsLeft,
            ' seconds.'
        ), container);
        clearInterval(interval);
    } else {
        ReactDOM.render(React.createElement(
            'div',
            null,
            React.createElement(Note, { secondsLeft: secondsLeft })
        ), container);
    }
    secondsLeft--;
}, interval_delay);