import React from 'react';
import DataStore from '../DataStore.js';

class Damage extends React.Component {

    constructor() {
        super();
        this.dataStore = new DataStore();
    }

    render() {
        return (
            <div>
                <h1 className="page-header">伤害统计</h1>
                <div>Current Log: {this.dataStore.activeLog}</div>
            </div>
        );
    }

}

export default Damage;