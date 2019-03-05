
import PropTypes from 'prop-types';
import { requireNativeComponent, View } from 'react-native';

var iface = {
    name: 'JWPlayer',
    PropTypes: {
        src: PropTypes.string || PropTypes.number || PropTypes.object ,
        title: PropTypes.string,
        // description: PropTypes.string,
        play: PropTypes.bool,
        ...View.propTypes // include the default view properties
    }
}

module.exports = requireNativeComponent('JWPlayer', iface ,{
    nativeOnly: {onChange: true}
  });