import React, { Component } from 'react';
import "../header.css"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

class Recipe extends Component {
    state = {
      datafromparent : this.props.datafromapi.meals,
      dataarray: [],
      datameasure:[]
      }
     
     
    render() {
      for(let a=0;a<20;a++){
         this.state.dataarray.push("strIngredient"+(a+1))
         this.state.datameasure.push("strMeasure"+(a+1))
      }
      
        return ( <div id="recipe">
         
          <div id="recipe-header">
          {<p>{<a style={{color:"black"}}href={this.state.datafromparent[0].strSource}>{this.state.datafromparent[0].strMeal}</a>}</p>}
          <FormControlLabel 
        control={<Checkbox icon={<FavoriteBorderOutlinedIcon fontSize="large" marginleft="30px" />} 
                  checkedIcon={<FavoriteBorder fontSize="large" />}
          name="checkedH" />}
      
      />
          </div>
          <div id="mealsdetails">
          <img id="img" src={this.state.datafromparent[0].strMealThumb} alt="" />
          <div id="division">
          <form >
            <p>{"category of Mela  - "+this.state.datafromparent[0].strCategory}</p>
            <p>{"Area of Meal  - "+this.state.datafromparent[0].strArea}</p>
            <label>Ingrediants</label>
            <div id="ingrediants">
              <div> {this.state.dataarray.map((ele,index)=>{
               return <p key={index}>{this.state.datafromparent[0][ele]+"   ------"}</p>
             })}</div>
             <div>{this.state.datameasure.map((ele,index)=>{
               return <p key={index}>{this.state.datafromparent[0][ele]}</p>
             })}</div>
            </div>
            <p id="rec" >Recpie</p>
            <div id="process"><p>{this.state.datafromparent[0].strInstructions}</p>
            </div>
            
          </form>
          </div>
          
          </div>
          
        </div>);
    }
}
 
export default Recipe;