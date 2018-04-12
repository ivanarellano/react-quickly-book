var _this = this;

React.createElement(
    'button',
    { onClick: e => {
            console.log(_this, e);
        } },
    'Save'
);

class SaveButton extends React.Component {
    handleSave(event) {
        console.log(this, event);
    }
    render() {
        return React.createElement(
            'button',
            { onClick: e => {
                    this.handleSave(e);
                } },
            'Save'
        );
    }
}

class SaveButton_2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
    }
    handleSave(event) {
        console.log(this, event);
    }
    render() {
        return React.createElement(
            'button',
            { onClick: this.handleSave },
            'Save'
        );
    }
}

const content = document.getElementById('content');
ReactDOM.render(React.createElement(Content, null), content);