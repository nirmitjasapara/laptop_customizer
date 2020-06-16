import React, {Component} from 'react';
import slugify from 'slugify';
import Option from '../Option/Option';
import './Feature.css';


class Feature extends Component {
    render () {
        const options = this.props.options.map(item => {
        const key = slugify(JSON.stringify(item));
        return <Option 
            item={item}
            feature={this.props.feature}
            selectedOption={this.props.selectedOption}
            updateFeature={this.props.updateFeature}
            USCurrencyFormat={this.props.USCurrencyFormat}
            key={key}
        />});
  
        return (
          <fieldset className="feature">
            <legend className="feature__name">
              <h3>{this.props.feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
    }
}
export default Feature;