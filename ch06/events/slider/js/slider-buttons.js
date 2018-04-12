class SliderButtons extends React.Component {
    constructor(props) {
        super(props);
        this.handleSlide = this.handleSlide.bind(this);
        this.state = { sliderValue: 0 };
    }

    componentDidMount() {
        $('#slider').on('slide', this.handleSlide);
    }

    componentWillUnmount() {
        $('#slider').off('slide', this.handleSlide);
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                {
                    disabled: this.state.sliderValue < 1,
                    className: 'btn default-btn',
                    onClick: this.handleChange(-1) },
                '1 Less ',
                this.state.sliderValue - 1
            ),
            React.createElement(
                'button',
                {
                    disabled: this.state.sliderValue > 99,
                    className: 'btn default-btn',
                    onClick: this.handleChange(-1) },
                '1 More ',
                this.state.sliderValue + 1
            )
        );
    }

    handleSlide(event, ui) {
        this.setState({ sliderValue: ui.value });
    }

    handleChange(value) {
        return () => {
            $('#slider').slider('value', this.state.sliderValue + value);
            this.setState({ sliderValue: this.state.sliderValue + value });
        };
    }
}