import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';
import { recipe } from '../tempDetails';
import { RecipeType } from '../App';

interface RecipeListProps {
  recipes: RecipeType[];
  handleBack: any;
  handleDetails: any;
  value: string;
  error: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => any;

}

export default class RecipeList extends Component<RecipeListProps, {}> {
  render() {
    const { recipes, value, handleSubmit, handleChange, error } = this.props
    return (
      <React.Fragment>
        <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
        <div className="container my-5">
          {/* title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">recipe list</h1>

            </div>
          </div>
          {/* End of title */}
          <div className="row">
            {
              error ? (<h1 className="text-danger text-center">{error}</h1>) : 
              (recipes.map((item: RecipeType, index: number) => {
                return (
                  <Recipe
                    handleDetails={this.props.handleDetails(index, item.recipe_id)}
                    // handleIndex={this.props.handleBack(index)}
                    key={index} // index starts from 0 automatically 
                    {...item} // can use the spread operator if the item contains all of the props of the component
                  />
                )
              }))

            }
          </div>
        </div>

      </React.Fragment>
    )
  }
}
