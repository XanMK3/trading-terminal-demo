import React from 'react';

import './style.scss';

const Explorer = ({
    open,
    moduleIds,
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
                {moduleIds.map(id => (
                    <li key={id} className='explorer__list-item'>
                        <div draggable onDragStart={onDragStart.bind(null, id)}>
                            {id}
                        </div>
                    </li>
                ))}
            </ul>
            <button className='explorer__layout-button' type='button' onClick={loadLayout}>Default layout</button>
        </div>
    </div>
);

export default Explorer;
