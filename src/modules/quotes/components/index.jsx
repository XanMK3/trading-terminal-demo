import React from 'react';
import { connect } from 'react-redux';
import Table from 'components/table';

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
];

const Quotes = ({ data }) => (
    <div className='quotes'>
        <Table
            columns={COLUMNS}
            data={data}
            rowKey='symbol'
        />
    </div>
);

const mapState = state => ({
    data: state.quotes.data,
});

export default connect(mapState)(Quotes);
