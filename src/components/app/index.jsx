import React, { Component } from 'react';
import FlexLayout from 'flexlayout-react';
import Explorer from 'components/explorer';
import Quotes from 'components/quotes';
import Chart from 'components/chart';
import News from 'components/news';

import 'flexlayout-react/style/dark.css';

const layout = {
    "type": "row",
    "id": "1",
    "children": [
        {
            "type": "row",
            "id": "2",
            "weight": 75,
            "children": [
                {
                    "type": "tabset",
                    "id": "3",
                    "weight": 50,
                    "children": [{ "type": "tab", "id": "4", "name": "Quotes", "component": "quotes" }]
                },
                {
                    "type": "tabset",
                    "id": "5",
                    "weight": 50,
                    "children": [{ "type": "tab", "id": "6", "name": "Chart", "component": "chart" }]
                }
            ]
        },
        {
            "type": "tabset",
            "id": "7",
            "weight": 25,
            "children": [
                {
                    "type": "tab",
                    "id": "8",
                    "name": "News",
                    "component": "news",
                }
            ]
        }
    ]
};

const json = {
    global: { tabEnableClose: false },
    layout,
};

const style = {
    display: 'flex',
    alignItems: 'stretch',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    overflow: 'hidden',
};

const style1 = {
    position: 'relative',
    height: '100vh',
    flexGrow: 1,
};

class App extends Component {
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
        if (component === "news") {
            return (<News />);
        }
        if (component === "quotes") {
            return (<Quotes />);
        }
        if (component === "chart") {
            return (<Chart />);
        }
    }

    onModelChange = (model) => { }

    render() {
        const { navOpen } = this.state;

        return (
            <div style={style}>
                <Explorer open={navOpen} toggle={this.toggleNav} />
                <div style={style1}>
                    <FlexLayout.Layout
                        model={this.state.model}
                        onModelChange={this.onModelChange}
                        factory={this.factory} />
                </div>
            </div>
        )
    }
}

export default App;
