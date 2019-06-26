import React, { Component } from 'react'
import Recipe from './Recipe';
import { RecipeType, RecipeDetailType } from '../App';
import { recipe } from '../tempDetails';
import { recipes } from '../tempList';

export interface RecipeDetailsProps{
  id: string;
  // handleIndex: ()=>void;
  handleBack: ()=>void;
}

export interface RecipeDetailState{
  recipe: RecipeDetailType;
  // url: string;
}

// first argument is props interface and second argument is state interface 
export default class RecipeDetails extends Component<RecipeDetailsProps, RecipeDetailState> {
  // constructor(props: RecipeDetailsProps){
  //   super(props)
  //   this.state= {
  //     // start with initial values
  //     recipe: recipe,
  //     url: `https://www.food2fork.com/api/get?key=aeff0991f5157cf1d19990734626042f&rId=${this.props.id}`
  //   }
  // }

  // async componentDidMount(){
  //   try{
  //     const data: any = await fetch(this.state.url)
  //     const jsonData = await data.json()
  //     this.setState({recipe: jsonData.recipe})
  //   } catch(error){
  //     console.log(error)
  //   }
  // }

  state={
    recipe:recipe
  };

  async componentDidMount(){
    const id = this.props.id
    const url = `https://www.food2fork.com/api/get?key=aeff0991f5157cf1d19990734626042f&rId=${id}`
    try{
      const data: any = await fetch(url)
      const jsonData = await data.json()
      this.setState({recipe: jsonData.recipe})
    } catch(error){
      console.log(error)
    }
  }

  render() {
    console.log(this.state.recipe)
    const {image_url, publisher, publisher_url, source_url, title, ingredients} = this.state.recipe
    // const {handleIndex} = this.props
    return (
      <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <button 
                  type="button" 
                  className="btn btn-warning mb-5 text-capitalize"
                  onClick={this.props.handleBack}
                >
                  back to recipe list
                </button>
                <img src={image_url} className="d-block w-100" alt="recipe" />
              </div>
              {/* details section */}
              <div className="col-10 mx-auto col-md-6 my-3">
                <h6 className="text-uppercase">{title}</h6>
                <h6 className="text-warning text-capitalize text-slanted">
                  provided by {publisher}
                </h6>
                <a 
                  href={publisher_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-2 text-capitalize"
                >publisher webpage
                </a>
                <a 
                  href={source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success mt-2 mx-3 text-capitalize"
                >recipe url
                </a>
                <ul className="list-group mt-4">
                 <h2 className="mt-3 mb-4">Ingredients</h2> 
                 {
                   ingredients.map((item,index)=>{
                     return (
                      <li key={index} className="list-group-item text-slanted">
                        {item}
                      </li>
                     )
                   })
                 }
                </ul>
              </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}
