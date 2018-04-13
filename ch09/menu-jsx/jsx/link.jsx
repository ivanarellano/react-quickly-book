class Link extends React.Component {
    render() {
        const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-')

        // return React.createElement('div',
        //     null,
        //     React.createElement('a', 
        //         {href: url}, 
        //         this.props.label
        //     ),
        //     React.createElement('br')
        // )

        return (
            <div>
                <a href={url}>{this.props.label}</a>
                <br/>
            </div>
        )
    }
}