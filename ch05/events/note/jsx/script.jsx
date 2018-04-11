const interval_delay = 1000
const container = document.getElementById('content')
let secondsLeft = 5

let interval = setInterval(() => {
    if (secondsLeft == 0) {
        ReactDOM.render(
            <div>
                Note was removed after {secondsLeft} seconds.
            </div>,
            container
        )
        clearInterval(interval)
    } else {
        ReactDOM.render(
            <div>
                <Note secondsLeft={secondsLeft}/>
            </div>,
            container
        )
    }
    secondsLeft--
}, interval_delay)