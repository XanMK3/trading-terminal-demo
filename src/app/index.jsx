import React, { Component } from 'react';
import qs from 'query-string';
import FlexLayout from 'flexlayout-react/lib/index';
import DEFAULT_LAYOUT from './layouts/default.json';
import './style.scss';

const layouts = {
    default: DEFAULT_LAYOUT,
};

const GLOBAL_CONFIG = {
    splitterSize: 4,
};

class App extends Component {
    layoutRef = React.createRef()

    constructor(props) {
        super(props);

        const { layout: name } = qs.parse(window.location.search);
        const layout = layouts[name];

        this.state = {
            navOpen: !layout,
            model: FlexLayout.Model.fromJson({
                global: GLOBAL_CONFIG,
                layout: layout || {},
            }),
        };
    }

    toggleNav = () => {
        const { navOpen } = this.state;
        this.setState({ navOpen: !navOpen });
    }

    factory = (node) => {
        const { modules } = this.props;
        const moduleId = node.getComponent();
        const rect = node.getTabRect();

        if (modules[moduleId]) {
            const Module = modules[moduleId];
            return <Module rect={rect} />;
        }

        return null;
    }

    loadLayout = (name) => {
        const layout = layouts[name];
        const model = FlexLayout.Model.fromJson({
            global: GLOBAL_CONFIG,
            layout: layout || {},
        });
        this.setState({ model });
    }

    render() {
        const { modules } = this.props;
        const { model, navOpen } = this.state;

        return (
            <div className='app'>
                <div className='explorer'>
                    <div className='explorer__tab-header'>
                        <span
                            className='explorer__tab-button'
                            role='button'
                            tabIndex={0}
                            onClick={this.toggleNav}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    this.toggleNav();
                                }
                            }}
                        >
                            {'Explorer'}
                        </span>
                    </div>
                    <div className='explorer__panel' style={{ display: navOpen ? 'block' : 'none' }}>
                        <ul className='explorer__list'>
                            {Object.keys(modules).map(id => (
                                <li key={id} className='explorer__list-item'>
                                    <div
                                        draggable
                                        onDragStart={() => {
                                            /* eslint-disable no-underscore-dangle */
                                            const nodeId = Object.values(model._idMap)
                                                .findIndex(node => node._attributes.component === id);
                                            /* eslint-enable no-underscore-dangle */
                                            if (nodeId === -1) {
                                                this.layoutRef.current.addTabWithDragAndDrop(
                                                    id,
                                                    { type: 'tab', component: id, name: id },
                                                );
                                            }
                                        }}
                                    >
                                        {id}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button
                            className='explorer__layout-button'
                            type='button'
                            onClick={() => {
                                this.loadLayout('default');
                            }}
                        >
                            {'Default layout'}
                        </button>
                    </div>
                </div>
                <div className='layout-manager'>
                    <FlexLayout.Layout
                        ref={this.layoutRef}
                        factory={this.factory}
                        model={model}
                    />
                </div>
            </div>
        );
    }
}

export default App;
