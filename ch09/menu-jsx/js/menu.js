class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { links: [] };
    }

    componentDidMount() {
        fetch(this.props['data-links']).then(response => response.json()).then(links => this.setState({ links: links }));
    }

    render() {
        return React.createElement(
            'div',
            null,
            this.state.links.map((value, i) => {
                return React.createElement(
                    'div',
                    { key: i },
                    React.createElement(Link, { label: value })
                );
            })
        );
    }
}