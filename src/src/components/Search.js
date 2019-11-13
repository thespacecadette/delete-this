import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    returnOptions(data) {
        if (!data) return (<option>loading...</option>);

        const options = data.map((item) => {
            return (<option value={item.id}>{item.name}</option>)
        });

        return options;
    }

    render() {
        return (<div className="search">
            <label className="sortBy">Sort by
                    <select value={this.state.make}
                    onChange={(event) => {
                        this.sortBy(event);
                    }}
                    name="make">
                    <option value="">---</option>
                    {this.returnOptions(this.props.data)}
                </select>
            </label>
            <label>Search: <input type="text" value={this.state.searchValue} /></label>
        </div>);
    }
}

Search.propTypes = {
    data: PropTypes.array,
    sortBy: PropTypes.func,
}
