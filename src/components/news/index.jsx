import React, { Component } from 'react';
import axios from 'axios';

class News extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios.get('https://api.iextrading.com/1.0/stock/market/news/last/50')
            .then(({data}) => {
                this.setState({data});
            })
    }

    render() {
        const { data } = this.state;

        return (
            <ul>
                {data.map(({ headline, image, summary, url }) => (
                    <li key={url}>
                        <div>
                            <h1>{headline}</h1>
                            <img src={image} />
                            <p>{summary}</p>
                            <a href={url} target='_blank'>link</a>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}

export default News;
