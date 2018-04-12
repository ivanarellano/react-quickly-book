<button onClick={(e) => { console.log(this, e)}}>Save</button>

class SaveButton extends React.Component {
    handleSave(event) {
        console.log(this, event)
    }
    render() {
        return <button onClick={(e) => {this.handleSave(e)}}>Save</button>
    }
}

class SaveButton_2 extends React.Component {
    constructor(props) {
        super(props)
        this.handleSave = this.handleSave.bind(this)
    }
    handleSave(event) {
        console.log(this, event)
    }
    render() {
        return <button onClick={this.handleSave}>Save</button>
    }
}

const content = document.getElementById('content')
ReactDOM.render(<Content/>, content)