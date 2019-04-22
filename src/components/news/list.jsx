import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import News from './item';

class NewsList extends Component {
    componentDidMount() {
        const { getNews } = this.props;
        getNews();
    }

    render() {
        const { data } = this.props;

        return (
            <ul className='news-list'>
                {data.map(newsData => (
                    <li key={newsData.url}>
                        <News {...newsData} />
                    </li>
                ))}
            </ul>
        )
    }
};

const mapState = (state) => ({
    data: state.news.data,
});

export default connect(mapState, actions)(NewsList);
