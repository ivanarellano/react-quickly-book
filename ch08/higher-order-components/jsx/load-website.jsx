const LoadWebsite = (Component) => {
    class _LoadWebsite extends React.Component {
        constructor(props) {
            super(props)
            this.state = {label: 'Run'}
            this.state.handleClick = this.handleClick.bind(this)
        }

        componentDidMount() {
            console.log(ReactDOM.findDOMNode(this))
        }

        render() {
            console.log(this.state)
            return <Component {...this.state} {...this.props} />
        }

        getUrl() {
            return 'https://ivanarellano.com'
        }

        handleClick(event) {
            let iframe = document.getElementById('frame').src = this.getUrl()
        }
    }

    _LoadWebsite.displayName = 'EnhancedComponent'
    return _LoadWebsite
}