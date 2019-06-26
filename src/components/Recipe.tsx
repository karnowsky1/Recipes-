import React, { Component } from 'react';
import { RecipeType } from '../App';
import { throws } from 'assert';

// first param is the prop type, second parameter is the state type 
// need to have the prop types defined 

interface RecipeProps extends RecipeType {
  // handleIndex: any; // rename to handlePageChange NAMING  
  handleDetails: any;
}

export default class Recipe extends Component<RecipeProps, {}> {
  render() {
    console.log(this.props.title)


    return (
      <React.Fragment>
        {/* 10 columns wide, place column in the center, 
        medium screen 6 cols, lg screen 4, margin top/bottom of 3 */}
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src={this.props.image_url}
              className="img-card-top"
              style={{ height: "14rem" }}
              alt="recipe"
            />
            <div className="card-body text-capitalize">
              <h6>{this.props.title}</h6>
              <h6 className="text-warning text-slanted">
                provided by {this.props.publisher}
              </h6>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-primary text-capitalize" onClick={this.props.handleDetails}>
                details
              </button>
              <a
                href={this.props.source_url}
                className="btn btn-success mx-2 text-capitalize"
                target="_blank"
                rel="noopener noreferrer" // so that compiler doesn't complain at us
              >
                recipe url
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
