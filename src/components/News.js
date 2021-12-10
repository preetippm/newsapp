import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>NewMonkey Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                    <NewsItem title="newsHeading" description="This is my first news from the API."/>
                    </div>
                    <div className="col-md-4">
                    <NewsItem title="newsHeading" description="This is my first news from the API."/>
                    </div>              
                    <div className="col-md-4">
                    <NewsItem title="newsHeading" description="This is my first news from the API."/>
                    </div>              
                </div>
            </div>
        )
    }
}

export default News
