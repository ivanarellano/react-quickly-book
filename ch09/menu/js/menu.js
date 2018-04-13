class Menu extends React.Component {
    render() {
        let menus = ['Home', 'About', 'Services', 'Portfolio', 'Contact us'];

        return React.createElement('div', null, menus.map((value, i) => {
            return React.createElement('div', { key: i }, React.createElement(Link, { label: value }));
        }));

        // return (
        //     <div>
        //         {
        //             menus.map((value, i)=> {
        //                 <div key={i}>
        //                     <Link label={value}/>
        //                 </div>
        //             })
        //         }
        //     </div>
        // )
    }
}