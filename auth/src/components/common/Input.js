// Import libraries for making a component
import React from 'react';
import { Text, View, TextInput } from 'react-native';

// Make a component
const Input = ({ label }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput style={inputStyle}>
        value={value},
        onChangeText={onChangeText}
      </TextInput>

    </View >
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    width: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

// Make the component available to other parts of the app
export { Input };
