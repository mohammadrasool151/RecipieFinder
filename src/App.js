import logo from './logo.svg';
import React, { Component } from 'react';
import './header.css'
import Recipe from './components/Recipe';

class App extends Component {
  state = {
    value:"",
    info:"",
    detais:"",
    on:false,
 
    handel:()=>{
      console.log("error")
    }
  }
    
   callApi = async(e)=>{
    const valu = document.getElementById("input").value;
    const URL=`https://themealdb.com/api/json/v1/1/search.php?s=${valu}`;
    try{
      let data =  await fetch(URL);
      const apiinfo = await data.json();
      this.setState({info:apiinfo})
      if(this.state.info.meals!==null){
        console.log(this.state.on)
        this.setState({on:!this.state.on})
      }

      else if(this.state.info.meals===null){
        this.setState({on:false,detais:"Data Not Found"})
 
      }
   
    }
    catch {
      this.state.handel()
    };

  }
  render() { 
    return ( 
      <React.Fragment>
 <div className="container">
    <h2 > Recipe Finder</h2>
    <input id="input" type="text"  placeholder="Enter the Name of the dish" />
   <button  onClick={()=>this.callApi()} id="but">
     Get Ingrediants
   </button>
  {this.state.on?<h3>Type a Dish Name to Search For its Ingrediant</h3>:null}
   </div>
   <div id="display">
  {(this.state.on && this.state.info.meals!==null) ?<Recipe  datafromapi={this.state.info}/>:<h4 style={{"textAlign":"center"}}>{this.state.detais}</h4>} 
  
 </div> 
      </React.Fragment>
   );
  }
}
 
export default App;
