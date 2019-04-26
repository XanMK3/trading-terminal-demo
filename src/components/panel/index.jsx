import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const renderThumb = ({ style, ...props }) => (
    <div {...props} style={{ ...style, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
);

const Panel = ({ children }) => (
    <Scrollbars
        style={{ height: '100%' }}
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
    >
        {children}
    </Scrollbars>
);

export default Panel;
