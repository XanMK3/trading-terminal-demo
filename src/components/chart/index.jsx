import React, { Component } from 'react';
import axios from 'axios';
import { withSize } from 'react-sizeme';
import Plotly from 'plotly.js/dist/plotly-finance.min';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);

const layout = {
    margin: {
        l: 48,
        r: 48,
        b: 48,
        t: 48,
        pad: 4,
    },
    paper_bgcolor: '#222',
    plot_bgcolor: '#222',
    modebar: false,
    xaxis: { rangeslider: { visible: false } },
};

const CONFIG = {
    displayModeBar: false,
    displaylogo: false,
};

class Chart extends Component {
    state = {
        data: {
            x: [],
            open: [],
            high: [],
            low: [],
            close: [],
        },
    }

    componentDidMount() {
        axios.get('https://api.iextrading.com/1.0/stock/aapl/time-series')
            .then(({ data }) => {
                const ohlc = ({
                    x: data.map(({ date }) => date),
                    open: data.map(({ open }) => open),
                    high: data.map(({ high }) => high),
                    low: data.map(({ low }) => low),
                    close: data.map(({ close }) => close),
                });
                this.setState({ data: ohlc });
            });
    }

    render() {
        const { data } = this.state;
        const { size } = this.props;

        return (
            <div style={{ overflow: 'hidden', height: '100%' }}>
                <Plot
                    data={[
                        {
                            type: 'ohlc',
                            ...data,
                        },
                    ]}
                    layout={{
                        ...layout,
                        width: size.width,
                        height: size.height,
                        title: 'AAPL',
                    }}
                    config={CONFIG}
                />
            </div>
        );
    }
}

export default withSize({ monitorHeight: true })(Chart);
