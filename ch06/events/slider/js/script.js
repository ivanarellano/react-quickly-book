const content = document.getElementById('content');

ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(SliderValue, null),
    React.createElement(SliderButtons, null)
), content);