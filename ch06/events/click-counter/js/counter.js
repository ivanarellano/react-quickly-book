// class Counter extends React.Component {
//     render() {
//         return <span>Clicked {this.props.value} times.</span>
//     }
// }

const Counter = props => {
    return React.createElement(
        "span",
        null,
        "Clicked ",
        props.value,
        " times."
    );
};