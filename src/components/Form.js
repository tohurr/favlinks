import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    /*TODO - set initial state for link name and URL */
          this.setState = {linkName: '', url: ''}
          
          this.handleChange = this.handleChange.bind(this);
          this.onFormSubmit = this.onFormSubmit.bind(this);
          
  }

  handleChange = (event) => {
    /*TODO - Logic for changing state based on form changes*/
            this.setState({value: event.target.value});

  }

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /*TODO - Logic for calling props to handle submission and setting state changes*/
            let newFavLink = {linkName: this.state.linkName, url: this.state.url};
            this.setState({ linkName: '', url: ''});
            this.props.addNew(newFavLink);
  }

  render() {
    return (
      <form>
        {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
        
        <label for = "linkName" >Name : </label><br />
        <input type = "text" id="linkName" onChange={(event) =>this.handleChange(event)}/><br />
        
        <label for = "url" >URL : </label><br />
        <input type = "text" id ="url" onChange={(event) =>this.handleChange(event)}/><br />
        
        <button type = "submit" onClick={() => this.onFormSubmit()}> Submit </button>
      
        
      </form>
    )
  }
}

export default Form