class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {counter: 0}
    }
    handleClick(event) {
        this.setState({
            counter: ++this.state.counter
        })
    }
    render() {
        return (
            <div>
                <ClickCounterButton handler={this.handleClick.bind(this)}/>
                <br/>
                <Counter value={this.state.counter}/>
            </div>
        )
    }
}