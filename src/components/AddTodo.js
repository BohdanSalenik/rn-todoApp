import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Alert, Keyboard } from 'react-native';
import { THEME } from '../theme';
import { AntDesign } from '@expo/vector-icons';

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handlePress = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
      Keyboard.dismiss()
    } else {
      Alert.alert('You must enter somthing');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder='Enter todo...'
        autoCorrect={false}
        autoCapitalize='words'
        autoFocus={false}
      />
      <AntDesign.Button onPress={handlePress} name='pluscircleo'>
        Add Todo
      </AntDesign.Button>
      {/* <Button title='Add Todo'  /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginBottom: 15,
  },
  input: {
    width: '60%',
    padding: 5,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
});
