import React from 'react';
import { connect } from 'react-redux';
import Panel from 'components/panel';
import Table from 'components/table';

const COLUMNS = [
    { key: 'symbol', title: 'Symbol', className: 'align-left' },
    {
        key: 'timestamp',
        title: 'Time',
        className: 'align-left',
        render: date => new Date(date).toLocaleString(),
    },
    {
        key: 'isOddLot',
        title: 'Odd Lot',
        className: 'align-left',
        render: value => (value ? 'Yes' : 'No'),
    },
    { key: 'price', title: 'Price', className: 'align-right' },
    { key: 'size', title: 'Size', className: 'align-right' },
];

const Trades = ({ data }) => (
    <Panel>
        <div className='trades'>
            <Table
                columns={COLUMNS}
                data={Object.keys(data).reduce((trades, symbol) => {
                    const symbolTrades = data[symbol].map(trade => ({ ...trade, symbol }));
                    return trades.concat(symbolTrades);
                }, [])}
                rowKey='symbol'
            />
        </div>
    </Panel>
);

const mapState = state => ({
    data: state.trades.data,
});

export default connect(mapState)(Trades);
