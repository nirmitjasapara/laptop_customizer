import React, {Component} from 'react';
import './Features.css';
import Feature from '../Feature/Feature';

class Features extends Component {
    render () {
        const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        return <Feature 
            key={featureHash}
            feature={feature}
            options={this.props.features[feature]}
            selectedOption={this.props.selected[feature].name}
            updateFeature={this.props.updateFeature}
            USCurrencyFormat={this.props.USCurrencyFormat}
        />});
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
          );
    }
}
export default Features;