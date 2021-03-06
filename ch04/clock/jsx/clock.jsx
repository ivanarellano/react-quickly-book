class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.launchClock()
    this.state = {
      currentTime: new Date().toLocaleString()
    }
  }

  launchClock() {
    const delay_ms = 1000
    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleString()
      })
    }, delay_ms)
  }

  render() {
    const now = this.state.currentTime
    return (
      <div>
        <AnalogDisplay time={now}/>
        <DigitalDisplay time={now}/>
      </div>
    )
  }
}