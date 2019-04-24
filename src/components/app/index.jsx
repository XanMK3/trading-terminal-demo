import React, { Component } from 'react';
import FlexLayout from 'flexlayout-react';
import Explorer from 'components/explorer';
import Quotes from 'components/quotes';
import Chart from 'components/chart';
import News from 'components/news';
import DEFAULT_LAYOUT from 'constants/defaultLayout';
import './style.scss';

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
        const component = node.getComponent();
        if (component === 'news') {
            return (<News />);
        }
        if (component === 'quotes') {
            return (<Quotes />);
        }
        if (component === 'chart') {
            return (<Chart />);
        }
        return null;
    }

    loadLayout = () => {
        const model = FlexLayout.Model.fromJson({...json, ...{ layout: DEFAULT_LAYOUT } });
        this.setState({ model });
    }

    render() {
        const { model, navOpen } = this.state;

        return (
            <div className='app'>
                <Explorer
                    open={navOpen}
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
