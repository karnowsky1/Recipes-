import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails';
import RecipeSearch from './components/RecipeSearch';
import Counter from './components/Counter';
import { string } from 'prop-types';

interface initState {
  // state types for init state for this file
  recipes: RecipeType[];
  url: string;
  base_url: string;
  details_id: string;
  pageIndex: number;
  recipeSelected: boolean;
  value: number;
  search: string;
  query: string;
  error:string;
}

export interface RecipeType {
  recipe_id: string;
  image_url: string;
  title: string;
  publisher: string;
  source_url: string;
}

export interface RecipeDetailType {
  f2f_url: string;
  image_url: string;
  ingredients: string[];
  publisher: string;
  publisher_url: string;
  source_url: string;
  title: string;
  
}

class App extends Component<{}, initState> {
  constructor(props: any) {
    super(props)
    this.state = {
      recipes: recipes,
      url: "https://www.food2fork.com/api/search?key=aeff0991f5157cf1d19990734626042f",
      base_url: "https://www.food2fork.com/api/search?key=aeff0991f5157cf1d19990734626042f",
      // url: "",
      details_id: "3537",
      pageIndex: 0,
      recipeSelected: false,
      value: 0,
      search: "",
      query: '&q=',
      error: ''
    }
  }

  async getRecipes() {
    try {
      const data: any = await fetch(this.state.url)
      const jsonData = await data.json()
      console.log(jsonData)
      
      if(jsonData.recipes.length === 0){
        this.setState({
          error: "sorry, but your search did not return any results"
        })
      }else{
        this.setState(()=>{
          return {recipes: jsonData.recipes}
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount(){
    this.getRecipes()
  }

  // displayPage = (index: number)=>{
  //   switch(index){
  //     default: 
  //     case 0:
  //       return(<RecipeList handleBack={this.handleBack} handleDetails={this.handleDetails} recipes={this.state.recipes}/>)
  //     case 1:
  //       return(
  //         <RecipeDetails 
  //           id={this.state.details_id}
  //         />
  //       )

  //     // How to use SWITCH STATEMENTS 
  //   }
  // }

  handleBack = () => {
    this.setState({ recipeSelected: false })
  }

  handleDetails = (index: number, id: string) => () => {
    this.setState({
      pageIndex: index,
      details_id: id,
      recipeSelected: true
    })
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      search: event.target.value
    },()=>{ //call back function that's available to us 
      console.log(this.state.search)
      
    })
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const {base_url, query, search} = this.state
    this.setState(()=>{
      return {url: `${base_url}${query}${search}`, search:""}
    },()=>{ // another callback function
      this.getRecipes();
    })

  }

  render() {
    console.log(this.state.recipes)
    return (
      <React.Fragment>
        {/* <Counter
          value={this.state.value}
          onDecrement={() => this.setState({ value: this.state.value - 1 })}
          onIncrement={() => this.setState({ value: this.state.value + 1 })}
        /> */}
        
        {/* Going to grab Recipes and send it to list for less clutter */}
        {!this.state.recipeSelected ?
          (<RecipeList
            error={this.state.error}
            handleBack={this.handleBack}
            handleDetails={this.handleDetails}
            recipes={this.state.recipes} 
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />) :
          <RecipeDetails
            id={this.state.details_id}
            handleBack={this.handleBack}
          />
        }
      </React.Fragment>
    );
  }
}

export default App;