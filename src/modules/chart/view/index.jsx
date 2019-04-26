import React from 'react';
import { connect } from 'react-redux';
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

const Chart = ({ data, size }) => (
    <div style={{ overflow: 'hidden', height: '100%' }}>
        <Plot
            data={[
                {
                    type: 'ohlc',
                    ...{
                        x: data.map(({ date }) => date),
                        open: data.map(({ open }) => open),
                        high: data.map(({ high }) => high),
                        low: data.map(({ low }) => low),
                        close: data.map(({ close }) => close),
                    },
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

const ResponsiveChart = withSize({ monitorHeight: true })(Chart);

const mapState = state => ({
    data: state.chart.data,
});

export default connect(mapState)(ResponsiveChart);
