import React, {Component} from 'react'


//Got data from ajax call not sure how to seta state value to that data
export default class Search extends Component {
  constructor (){
    super ()
    this.state = {
      query: "",
      movies: []
    }
  }

  submitSearch(e){
    e.preventDefault()
    console.log('clicky-doo...good for you')
    let url = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q="+this.state.query
    $.ajax({
      method: 'GET',
      url: url,
      success: onSuccess
    })

    function onSuccess(data){
      console.log(data)
      this.setState({
        movies: data.data
      })
    }
    this.setState({
      query: ""
    })
  }

  changeQuery(e){
    this.setState({
      query: e.target.value
    })
    console.log(e.target.value)
  }

  render (){
    return (
      <div>
        <form
          onSubmit={(event)=>this.submitSearch(event)}>
          <input
            placeholder="Search"
            onChange={(event)=>this.changeQuery(event)}
            value={this.state.query}
            />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
