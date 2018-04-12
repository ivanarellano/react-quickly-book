// class ClickCounterButton extends React.Component {
//     render() {
//         return (
//             <button onClick={this.props.handler} className="btn btn-info">
//             Don't click me...!
//             </button>
//         )
//     }
// }

const ClickCounterButton = props => {
    return React.createElement(
        "button",
        {
            onClick: props.handler,
            className: "btn btn-info" },
        "Don't click me...!"
    );
};