const Link = props => {
    return React.createElement(
        "a",
        { onClick: props.handleClick, href: "#" },
        props.label
    );
};

const Logo = props => {
    return React.createElement("img", { onClick: props.handleClick, width: "40", src: "logo.png", href: "#" });
};