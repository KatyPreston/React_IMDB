import React from 'react';
import FilmList from '../components/FilmList.js';

class FilmBox extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: [{title: "Jumanji"}, {title: "Philomena"}, {title: "Batman Forever"}]
    }
  }

  render(){
    return(
    <div>
      <h2>Films</h2>
      <FilmList data={this.state.data}/>
    </div>
    );
  }
}

export default FilmBox;
