const Link = (props) => {
  return <a href={props.href} target="_blank" className="btn btn-primary">{props.text}</a>
}

ReactDOM.render(
  <Clock/>,
  document.getElementById('content')
)