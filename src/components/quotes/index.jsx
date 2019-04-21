import React, { Component } from 'react';
import axios from 'axios';

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

class Quotes extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios.get(`https://api.iextrading.com/1.0/tops/last?symbols=${symbols.join()}`)
            .then(({data}) => {
                this.setState({data});
            })
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <table>
                    <thead>
                            <tr>
                                <td>Symbol</td>
                                <td>Price</td>
                                <td>Size</td>
                                <td>Time</td>
                            </tr>
                    </thead>
                    <tbody>
                        {data.map(({ symbol, price, size, time }) => (
                            <tr key={symbol}>
                                <td>{symbol}</td>
                                <td>{price}</td>
                                <td>{size}</td>
                                <td>{time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Quotes;
