class DateTime extends React.Component {
  render() {
    let now = new Date().toLocaleString()
    return <span>Current date and time is {now}.</span>
  }
}

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>1. Hello</h1>
        <h1>2. World!</h1>
      </div>
    )
  }
}

class HelloFramework extends React.Component {
  render() {
    return <h1 {...this.props}>Hello {this.props.frameworkName}!</h1>
  }
}

class ProfileLink extends React.Component {
  render() {
    return (
      <a href={this.props.url}
         title={this.props.label}
         target="_blank">Profile</a>
    )
  }
}

const ember = <HelloFramework
id='ember'
frameworkName='Ember.js'
title='A framework for creating ambitious web applications.'/>

const backbone = <HelloFramework
id='backbone'
frameworkName='Backbone.js'
title='Backbone.js gives structure to web applications...'/>

const angular = <HelloFramework
id='angular'
frameworkName='Angular.js'
title='Superheroic JavaScript MVW Framework'/>

const container = document.getElementById('content');

// ReactDOM.render(
//   <HelloWorld/>,
//   container
// )

ReactDOM.render(
  <div>
    <a href="http://ivanarellano.com">Visit my website</a><br/>
    <DateTime userName='Ivan'/>
  </div>,
  container
)

// ReactDOM.render(
//   <div>
//     {ember}
//     {backbone}
//     {angular}
//   </div>,
//   container
// )