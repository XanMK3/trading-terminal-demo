import React from 'react';
import { connect } from 'react-redux';
import News from './item';

const NewsList = ({ data }) => (
    <ul className='news-list'>
        {data.map(newsData => (
            <li key={newsData.url}>
                <News {...newsData} />
            </li>
        ))}
    </ul>
);

const mapState = state => ({
    data: state.news.data,
});

export default connect(mapState)(NewsList);
