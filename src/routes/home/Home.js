/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Select from 'react-select';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import selectCss from '!!isomorphic-style-loader!css-loader?modules=false!react-select/dist/react-select.css';

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
];

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'one',
    };
  }

  logChange = (val) => {
    console.log(`changing value to ${val.value}`);
    this.setState({ value: val.value });
  }

  render() {
    return (
      <div>
        <h1>React.js News</h1>
        <Select
          name="form-field-name"
          value={this.state.value}
          options={options}
          onChange={this.logChange}
        />
      </div>
    );
  }
}

export default withStyles(selectCss)(Home);
