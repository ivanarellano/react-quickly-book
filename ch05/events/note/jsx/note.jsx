class Note extends React.Component {
    componentDidMount() {
        console.log('Attaching confirmLeave event listener for beforeunload')
        window.addEventListener('beforeunload', this.confirmLeave)
    }

    componentWillUnmount() {
        console.log('Removing confirmLeave event listener for beforeunload')
        window.removeEventListener('beforeunload', this.confirmLeave)
    }

    render() {
        console.log('Render')
        return <div>Parent will remove in {this.props.secondsLeft} seconds.</div>
    }

    confirmLeave(e) {
        const message = 'Do you really want to close?'
        e.returnValue = message     // Gecko, Trident, Chrome 34+
        return message              // Gecko, WebKit, Chrome < 34
    }
}