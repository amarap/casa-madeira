import React from 'react'
import { Navbar, NavbarBrand} from 'reactstrap'
import Menu from './Menu'

class App extends React.Component {
  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Casa Madeira</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}



export default App
