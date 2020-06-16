import React, {Component} from 'react';
import slugify from 'slugify';
import './Option.css';

class Option extends Component {
    render () {
        const id = slugify(JSON.stringify(this.props.item));
          return (
            <div className="feature__item">
              <input
                type="radio"
                id={id}
                className="feature__option"
                name={slugify(this.props.feature)}
                checked={this.props.item.name === this.props.selectedOption}
                onChange={() =>
                    this.props.updateFeature(this.props.feature, this.props.item)}
              />
              <label htmlFor={id} className="feature__label">
                {this.props.item.name} ({this.props.USCurrencyFormat.format(this.props.item.cost)})
              </label>
            </div>
          );
    }
}
export default Option;