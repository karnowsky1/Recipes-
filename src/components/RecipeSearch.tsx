import React, { Component } from 'react'

interface RecipeSearchProps{
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>)=>any;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>)=>any;
}

export default class RecipeSearch extends Component<RecipeSearchProps,{}> {
  render() {
    const{value, handleSubmit, handleChange} = this.props
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="text-slanted text-capitalize">
                {"search for recipe with "}
                <strong className="text-danger">
                  Food2Fork
                </strong>
              </h1>
              <form className="mt-4" onSubmit={handleSubmit}>
                <label htmlFor="search" className="text-capitalize">
                  type recipes separated by commas
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="search"
                    placeholder="chicken,onions,carrots"
                    className="form-control"
                    value={value}
                    onChange={handleChange}

                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="input-group-text bg-primary text-white"
                    >
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
