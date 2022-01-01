import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


    constructor(){
        super();
        console.log("Hello i am constructor from news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }
    }

    async componentDidMount(){
        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=911212c02dcc48a187faeac1580b8de5&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles})
    }

    handlePrevClick= async ()=>{
        console.log("previous");
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=911212c02dcc48a187faeac1580b8de5&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page:this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextClick= async ()=>{
        console.log("next");

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=911212c02dcc48a187faeac1580b8de5&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }

    render() {
        console.log("render")
        return (
            
            <div className="container my-3">
                <h2>NewMonkey Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                    })}
                    
                                 
                </div>
                <div className="container d-flex justify-content-between ">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick  }> &larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
