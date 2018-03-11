import React from 'react';
import Navbar from "../shared/header/navbar.component";
class Home extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <h1>Home component</h1>
            </div>
        )
    }
}
export default Home;