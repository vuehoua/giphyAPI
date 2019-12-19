import React, { Component } from 'react';


class Searchbar extends Component {
    constructor(props){
        super(props);
        this.state = {
          searchText: '',
          imgs: []  
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

handleOnChange(event){
    this.setState({
        searchText: event.target.value
    });
} 

handleOnSearch = () => {
this.apiCall(this.state.searchText);
}

apiCall = searchInput => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=WZe6O0x0TNpU41ObXuGZJ54ygUtHVemg&q=${searchInput}&limit=&offset=0&rating=G&lang=en
    `, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
    .then(response => {
        return response.json()
    })
    .then(results => {   
        console.log(results.data);

        this.setState({
            imgs: results.data
        })
    });
};

render(){
    return(

        <div className="container">

           {/* <input className="searchBar" name="text" type="text" placeholder="search" onChange={this.handleOnChange} value={this.state.searchText}/> */}
             {/* <button className="searchBtn" onClick={this.handleOnSearch}> search </button> */}
        <div className="row"> 
            <div className="col inputbutton"> 
                <input type="text" className="form-control mx-auto d-block w-50 " placeholder="search" onChange={this.handleOnChange} value={this.state.searchText}/>
                <button type="button" className="btn btn-sm btn-block mx-auto d-block w-50" onClick={this.handleOnSearch}> SEARCH </button>
            </div>   
                <div className="row">
                     {this.state.imgs.map((item, data) => (
                            <div key={data} className="col-xs-1 mx-auto d-block">
                                <img src ={item.images.fixed_width_downsampled.url} alt="searchImg" />
                            </div>
                        ))}
                </div>
           
        </div>

        </div>

    )
    }

}




export default Searchbar;

