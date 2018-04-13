const EnhancedButton = LoadWebsite(Button)
const EnhancedLink = LoadWebsite(Link)
const EnhancedLogo = LoadWebsite(Logo)

class HigherOrderComponents extends React.Component {
  render() {
    return (
      <div>
        <EnhancedButton email="my@test.com" handler={(()=> console.log("hi!"))} />
        <br />
        <br />
        <EnhancedLink/>
        <br />
        <br />
        <EnhancedLogo />
        <br />
        <br />
        <iframe id="frame" src="" width="600" height="500"/>
      </div>
    )
  }
}