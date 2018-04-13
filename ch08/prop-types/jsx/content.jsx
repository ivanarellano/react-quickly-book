class PropTypes extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    let number = "1"
    const email_1="my@test.com"
    const email_2="my_2@test.com"

    return (
      <div>
        <Button buttonLabel="Send" email={email_1} handler={this.handleClick}/>
        <Button handler={this.handleClick} email={email_2}/>
        <Button title={number} email={email_1} handler={this.handleClick}/>
        <Button email={email_2} handler={this.handleClick}/>
      </div>
    )
  }
  
  handleClick(event) {
    console.log("Content Callback")
  }
}