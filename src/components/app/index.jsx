import React, { Component } from 'react';
import Loadable from 'react-loadable';
import FlexLayout from 'flexlayout-react';
import Explorer from 'components/explorer';
import DEFAULT_LAYOUT from 'constants/defaultLayout';
import './style.scss';

const modulesContext = require.context(
    'modules',
    true,
    /\.\/[^/]+\/index\.jsx/,
    'lazy',
);

const modules = modulesContext.keys().reduce((modulesMap, key) => {
    const moduleId = key.substr(2).split('/').shift();
    modulesMap[moduleId] = Loadable({
        loader: () => modulesContext(key),
        loading: () => <div>Loading module...</div>,
    });
    return modulesMap;
}, {});

const json = {
    global: {
        splitterSize: 4,
    },
    layout: {},
};

class App extends Component {
    layoutRef = React.createRef()

    state = {
        navOpen: true,
        model: FlexLayout.Model.fromJson(json),
    };

    componentDidMount() {
        setTimeout(this.forceUpdate.bind(this), 0);
    }

    toggleNav = () => {
        const { navOpen } = this.state;
        this.setState({ navOpen: !navOpen });
    }

    factory = (node) => {
        const moduleId = node.getComponent();

        if (modules[moduleId]) {
            const Module = modules[moduleId];
            return <Module />;
        }

        return null;
    }

    loadLayout = () => {
        const model = FlexLayout.Model.fromJson({ ...json, ...{ layout: DEFAULT_LAYOUT } });
        this.setState({ model });
    }

    render() {
        const { model, navOpen } = this.state;

        return (
            <div className='app'>
                <Explorer
                    open={navOpen}
                    moduleIds={Object.keys(modules)}
                    toggle={this.toggleNav}
                    loadLayout={this.loadLayout}
                    onDragStart={
                        (id) => {
                            /* eslint-disable no-underscore-dangle */
                            const nodeId = Object.values(model._idMap)
                                .findIndex(node => node._attributes.component === id);
                            /* eslint-enable no-underscore-dangle */
                            if (nodeId === -1) {
                                this.layoutRef.current.addTabWithDragAndDrop(id, { type: 'tab', component: id, name: id });
                            }
                        }
                    }
                />
                <div className='layout-manager'>
                    <FlexLayout.Layout
                        ref={this.layoutRef}
                        model={model}
                        factory={this.factory}
                    />
                </div>
            </div>
        );
    }
}

export default App;
