import React, { Component } from 'react';



class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            gifs: {},
            isLoading: false,
            error: null
        };
    }

    componentDidMount(){
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=WZe6O0x0TNpU41ObXuGZJ54ygUtHVemg&rating=G
        `, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then(
            results => results.json()
        )
        .then(
            (results) => {
                this.setState({
                    isLoading: true,
                    gifs: results.data
                })
            },
            (error) => {
                this.setState({
                    isLoading: true,
                    error
                })
            }
        )
    }

    
    render(){
       const {error, isLoading, gifs} = this.state;

       if(error) {
        return (<div> Error: {error.message} </div>);
    }else if(!isLoading){
        return (<div>loading</div>)
    } else if(gifs){
        console.log(gifs);
    }
       
        return (
               
               <div className="container">  
                    <div className="trend"> TRENDING </div>
                        <div className="row">              
                            {this.state.gifs.map((items, data) => (
                                <div key={data} className="col-xs-1 mx-auto d-block">
                                    <img src={items.images.fixed_width_downsampled.url} alt="trendingImg"/> 
                                </div>
                                ))}
                        </div>
                </div>
            
        )


        }
    }


export default Home;
