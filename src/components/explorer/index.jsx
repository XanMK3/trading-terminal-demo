import React, { Component } from 'react';
import { X, Database, Activity, Calendar } from 'react-feather';

import './style.scss';

class Explorer extends Component {
    render() {
        const { open, toggle } = this.props;

        return (
            <div className='explorer'>
                <div className='explorer__tab-header'>
                    <span className='explorer__tab-button' onClick={toggle}>Explorer</span>
                </div>
                <div className='explorer__panel' style={{ display: open ? 'block' : 'none' }}>
                    <div className='explorer__panel-close'><X size={14} onClick={toggle} /></div>
                    <ul className='explorer__list'>
                        <li className='explorer__list-item'><Database size={14} /> Quotes</li>
                        <li className='explorer__list-item'><Activity size={14} /> Chart</li>
                        <li className='explorer__list-item'><Calendar size={14} /> News</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Explorer;
