const Link = props => {
  return React.createElement(
    "a",
    { href: props.href, target: "_blank", className: "btn btn-primary" },
    props.text
  );
};

ReactDOM.render(React.createElement(Clock, null), document.getElementById('content'));