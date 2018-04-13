const container = document.getElementById('menu')
const menusPath = '/ch09/menu-jsx/menus.json'

ReactDOM.render(
    <Menu data-links={menusPath}/>,
    container
)