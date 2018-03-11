import React from 'react';
import Navbar from "../shared/header/navbar.component";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
    }
    render(){
        return(
            <div>
                <Navbar/>
                <h1>About Component</h1>
            </div>
        )
    }
}
export default About;