import React, { PureComponent } from 'react';

import './style.scss';

class Table extends PureComponent {
    render() {
        const { columns, data, rowKey } = this.props;

        return (
            <table className='table'>
                <thead className='table__thead'>
                    <tr className='table__tr'>
                        {columns.map(({ key, title, className }) => (
                            <th key={key} className={`table__th ${className}`}>{title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className='table__tbody'>
                    {data.map(rowData => (
                        <tr className='table__tr' key={rowData[rowKey]}>
                            {columns.map(({ key, className, render }) => {
                                if (render) {
                                    return (
                                        <td key={key} className={`table__td ${className}`}>
                                            {render(rowData[key], rowData)}
                                        </td>
                                    );
                                }

                                return <td key={key} className={`table__td ${className}`}>{rowData[key]}</td>;
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Table;
