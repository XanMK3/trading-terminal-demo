import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import Table from 'components/table';
import SYMBOLS from 'constants/symbols';

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

class Quotes extends Component {
    componentDidMount() {
        const { getQuotes } = this.props;
        getQuotes(SYMBOLS);
    }

    render() {
        const { data } = this.props;

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

const mapState = state => ({
    data: state.quotes.data,
});

export default connect(mapState, actions)(Quotes);
