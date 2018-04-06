class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'h1', 
            this.props, 
            'Hello ' + this.props.frameworkName + ' world!!'
        )
    }
}

function createHelloWorld(data) {
    return React.createElement(
        HelloWorld, 
        createHelloWorldData(data.id, data.frameworkName, data.title)
    )
}

function createHelloWorldData(id, frameworkName, title) {
    return {
        id: id,
        frameworkName: frameworkName,
        title: title
    }
}

var emberData = createHelloWorldData(
    'ember', 
    'Ember.js', 
    'A framework for creating web applications'
)

ReactDOM.render(
    React.createElement(
        'div', 
        null, 
        createHelloWorld(emberData)
    ),
    document.getElementById('content')
)