import React from 'react';
import {
    Database,
    Activity,
    Calendar,
} from 'react-feather';

import './style.scss';

const Explorer = ({
    open,
    toggle,
    onDragStart,
    loadLayout,
}) => (
    <div className='explorer'>
        <div className='explorer__tab-header'>
            <span className='explorer__tab-button' role='button' tabIndex={0} onClick={toggle} onKeyDown={toggle}>
                {'Explorer'}
            </span>
        </div>
        <div className='explorer__panel' style={{ display: open ? 'block' : 'none' }}>
            <ul className='explorer__list'>
                <li className='explorer__list-item'>
                    <div draggable onDragStart={onDragStart.bind(null, 'quotes')}>
                        <Database size={14} />
                        {' '}
                        {'Quotes'}
                    </div>
                </li>
                <li className='explorer__list-item'>
                    <div draggable onDragStart={onDragStart.bind(null, 'chart')}>
                        <Activity size={14} />
                        {' '}
                        {'Chart'}
                    </div>
                </li>
                <li className='explorer__list-item'>
                    <div draggable onDragStart={onDragStart.bind(null, 'news')}>
                        <Calendar size={14} />
                        {' '}
                        {'News'}
                    </div>
                </li>
            </ul>
            <button className='explorer__layout-button' type='button' onClick={loadLayout}>Default layout</button>
        </div>
    </div>
);

export default Explorer;
