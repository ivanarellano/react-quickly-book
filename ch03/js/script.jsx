const container = document.getElementById('content');

class HelloWorld extends React.Component {
  render () {
    return (
      <div>
        <h1>1. Hello</h1>
        <h1>2. World!</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <HelloWorld/>,
  container
)