import React, { memo } from 'react';

const News = memo(({
    url, datetime, headline, summary,
}) => (
    <div className='news'>
        <div className='news__datetime'>{(new Date(datetime)).toLocaleString()}</div>
        <div className='news__title'>
            {headline}
        </div>
        <p className='news__summary'>
            {summary}
            {' '}
            <a className='news__link' href={url} rel='noopener noreferrer' target='_blank'>source</a>
        </p>
    </div>
));

export default News;
