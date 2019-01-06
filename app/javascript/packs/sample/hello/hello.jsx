import React from 'react';
import Style from './hello.scss';

export class Hello extends React.Component {
    render() {
        const { name, value } = this.props;
        return (
            <div className={Style.container}>
                <div>name: { name }</div>
                <div>value: { value }</div>
            </div>
        );
    }
}