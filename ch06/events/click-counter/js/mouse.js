class Mouse extends React.Component {
    handleMouseOver(e) {
        console.log('mouse is over with event');
        console.dir(event);
    }
    render() {
        return React.createElement(
            'div',
            {
                style: { border: '1px solid red' },
                onMouseOver: this.handleMouseOver.bind(this) },
            'Open DevTools and move your mouse cursor over here'
        );
    }
}