import AppSlides from './components/AppSlides';
import { Container, Jumbotron } from 'reactstrap';
import React, { Component } from 'react';
//to make api calls
import axios from 'axios';

class Home extends Component{
    constructor(props){
        super(props);
        //state component is filled with movie items from database
        this.state = {
            isLoaded:false,
            all:[],
            trending:[],
            romance:[],
            scifi:[]
        }
    }
    componentDidMount(){
        //GETS all the movies (mrouter)
        axios.get("http://localhost:5000/api/movies").then((response)=>{
            this.setState({
                isLoaded: true,
                all: response.data
            })
        })
        //GETS the trending movies (mrouter)
        axios.get("http://localhost:5000/api/movies/trending").then((response)=>{
            this.setState({
                isLoaded: true,
                trending: response.data
            })
        })
        //GETS all romantic movies (mrouter)
        axios.get("http://localhost:5000/api/movies/genre/Romance").then((response)=>{
            this.setState({
                isLoaded:true,
                romance: response.data
            })
        })
        //GETS all the Sci-Fi movies (mrouter)
        axios.get("http://localhost:5000/api/movies/genre/Sci-Fi").then((response)=>{
            this.setState({
                isLoaded:true,
                scifi: response.data
            })
        })
    }
    render(){
        // returns 3 "AppSlides" components whose images an array of movie objects from the home's state (this.state.romance, etc)
        return(
            <Jumbotron>
                <Container>
                <h1 className="mt-3 mb-3">Trending <span role="img" aria-label="fire">🔥</span></h1>
                <AppSlides items={this.state.trending}/>
                <h1 className="mt-5 mb-3">Romance ❤️</h1>
                <AppSlides items={this.state.romance} />
                <h1 className="mt-5 mb-3">Sci-Fi 🚀</h1>
                <AppSlides items={this.state.scifi} />
                </Container>
            </Jumbotron>
        );
    }
}

export default Home;