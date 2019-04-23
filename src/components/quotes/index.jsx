import React, { Component } from 'react';
import axios from 'axios';
import Table from 'components/table';

const symbols = [
    'aapl',
    'goog',
    'fb',
    'amzn',
    'nflx',
    'tsla',
    'ibm',
    'csco',
    'intc',
    'orcl',
    'hpq',
];

const COLUMNS = [
    { key: 'symbol', title: 'Symbol', className: 'align-left' },
    {
        key: 'time',
        title: 'Time',
        className: 'align-left',
        render: date => new Date(date).toLocaleString(),
    },
    { key: 'price', title: 'Price', className: 'align-right' },
    { key: 'size', title: 'Size', className: 'align-right' },
]

class Quotes extends Component {
    state = {
        data: [],
    }

    componentDidMount() {
        axios.get(`https://api.iextrading.com/1.0/tops/last?symbols=${symbols.join()}`)
            .then(({ data }) => {
                this.setState({ data });
            });
    }

    render() {
        const { data } = this.state;

        return (
            <div className='quotes'>
                <Table
                    columns={COLUMNS}
                    data={data}
                    rowKey='symbol'
                />
            </div>
        );
    }
}

export default Quotes;
