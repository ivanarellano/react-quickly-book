class Logger extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  /* Mounting Events */
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount(e) {
    console.log('componentDidMount');
    console.log('DOM node: ', ReactDOM.findDOMNode(this));
  }

  /* Updating Events */
  componentWillReceiveProps(newProps) {
    console.log('componentDidMount');
    console.log('new props: ', newProps);
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate');
    console.log('new props: ', newProps);
    console.log('new state: ', newState);
    return true;
  }

  componentWillUpdate(newProps, newState) {
    console.log('componentWillUpdate');
    console.log('new props: ', newProps);
    console.log('new state: ', newState);
  }

  componentDidUpdate(oldProps, oldState) {
    console.log('componentDidUpdate');
    console.log('old props: ', oldProps);
    console.log('old state: ', oldState);
  }

  /* Unmounting Events*/
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return React.createElement(
      'div',
      null,
      this.props.time
    );
  }
}