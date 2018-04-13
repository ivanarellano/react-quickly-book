class Link extends React.Component {
    render() {
        return <a onClick={this.props.handleClick} href="#">{this.props.label}</a>
    }
}

// const Link = (props)=>{
//     return <a onClick={props.handleClick} href="#">{props.label}</a>
// }

const Logo = (props)=>{
    return <img onClick={props.handleClick} width="40" src="logo.png" href="#"/>
}