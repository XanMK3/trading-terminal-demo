import React from 'react';
import { connect } from 'react-redux';
import Panel from 'components/panel';
import News from './item';

const NewsList = ({ data }) => (
    <Panel>
        <ul className='news-list'>
            {data.map(newsData => (
                <li key={newsData.url}>
                    <News {...newsData} />
                </li>
            ))}
        </ul>
    </Panel>
);

const mapState = state => ({
    data: state.news.data,
});

export default connect(mapState)(NewsList);
