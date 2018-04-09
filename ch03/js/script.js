const container = document.getElementById('content');

class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        '1. Hello'
      ),
      React.createElement(
        'h1',
        null,
        '2. World!'
      )
    );
  }
}

ReactDOM.render(React.createElement(HelloWorld, null), container);
