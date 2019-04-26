import React from 'react';
import Loadable from 'react-loadable';

const modulesContext = require.context(
    './',
    true,
    /\.\/[^/]+\/index\.jsx/,
    'lazy',
);

const modules = modulesContext.keys().reduce((map, key) => {
    const moduleId = key.substr(2).split('/').shift();
    map[moduleId] = Loadable({
        loader: () => modulesContext(key),
        loading: () => <div>Loading module...</div>,
    });
    return map;
}, {});

export default modules;
