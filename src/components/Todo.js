import React from 'react';
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { THEME } from '../theme';
import { AppTextBold } from './ui/AppTextBold';

export const Todo = ({ todo, delTodo, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onOpen(todo.id)}>
      <View style={styles.todo}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <Button
          title='Del'
          onPress={() => delTodo(todo.id)}
          color={THEME.DANGER_COLOR}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'roboto-bold',
  },
});
