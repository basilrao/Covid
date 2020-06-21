import React from "react";
import axios from "axios";
import Summary from "./Summary.js";



class Details extends React.Component{
    state={
        countries:[],
        global:[],
        currentDate:null,
        
    }
    async componentDidMount(){
     const res= await axios.get("https://api.covid19api.com/summary");
     
     console.log(res);
     this.setState({countries : res.data.Countries[126]});
     this.setState({global: res.data.Global});
     this.setState({currentDate: res.data.Date});
     
     
     

    }

    render(){
        
        return(
            <div>
                <Summary summary={this.state.global} currentDate={this.state.currentDate} country={this.state.countries} />
               
               
                
            </div>
            
        )
    }
}
export default Details;