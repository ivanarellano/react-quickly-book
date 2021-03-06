class SliderValue extends React.Component {
    constructor(props) {
        super(props)
        this.handleSlide = this.handleSlide.bind(this)
        this.state = {sliderValue: 0}
    }

    componentDidMount() {
        window.addEventListener('slide', this.handleSlide)
    }

    componentWillUnmount() {
        window.removeEventListener('slide', this.handleSlide)
    }

    render() {
        return (
            <div className="">
                Value: {this.state.sliderValue}
            </div>
        )
    }

    handleSlide(event) {
        this.setState({sliderValue: event.detail.ui.value})
    }
}