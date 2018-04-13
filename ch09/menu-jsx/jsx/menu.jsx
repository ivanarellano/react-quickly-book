class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {links: []}
    }

    componentDidMount() {
        fetch(this.props['data-links'])
            .then((response) => response.json())
            .then((links) => this.setState({links: links}))
    }

    render() {
        return (
            <div>
                {this.state.links.map((value, i) => {
                    return <div key={i}><Link label={value}/></div>
                })}
            </div>
        )
    }
}