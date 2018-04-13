class Link extends React.Component {
    render() {
        return React.createElement(
            "a",
            { onClick: this.props.handleClick, href: "#" },
            this.props.label
        );
    }
}

// const Link = (props)=>{
//     return <a onClick={props.handleClick} href="#">{props.label}</a>
// }

const Logo = props => {
    return React.createElement("img", { onClick: props.handleClick, width: "40", src: "logo.png", href: "#" });
};