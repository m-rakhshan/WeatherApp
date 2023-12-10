import {View} from 'react-native';
import React from 'react';

const Divider = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  height,
  width,
  alignSelf,
  dividerColor,
}) => {
  return (
    <View
      style={{
        backgroundColor: dividerColor ? dividerColor : 'grey',
        height: height ? height : 0,
        width: width ? width : 0,
        alignSelf: alignSelf ? alignSelf : 'center',
        marginTop: marginTop ? marginTop : 0,
        marginBottom: marginBottom ? marginBottom : 0,
        marginLeft: marginLeft ? marginLeft : 0,
        marginRight: marginRight ? marginRight : 0,
      }}
    />
  );
};

export default Divider;
