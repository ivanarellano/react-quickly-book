class PropTypes extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let number = "1";
    const email_1 = "my@test.com";
    const email_2 = "my_2@test.com";

    return React.createElement(
      "div",
      null,
      React.createElement(Button, { buttonLabel: "Send", email: email_1, handler: this.handleClick }),
      React.createElement(Button, { handler: this.handleClick, email: email_2 }),
      React.createElement(Button, { title: number, email: email_1, handler: this.handleClick }),
      React.createElement(Button, { email: email_2, handler: this.handleClick })
    );
  }

  handleClick(event) {
    console.log("Content Callback");
  }
}