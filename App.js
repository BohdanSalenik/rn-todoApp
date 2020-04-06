import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';
import { THEME } from './src/theme';

  async function loadFonts() {
    await Font.loadAsync({
      'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    });
  }

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([{ id: '1', title: 'learn RN' }]);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const delTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    Alert.alert(
      'Delete Todo',
      `Are you sure delete "${todo.title}"? `,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            setTodoId(null);
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const updateTodo = (id, title) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  let content = (
    <MainScreen
      todos={todos}
      delTodo={delTodo}
      addTodo={addTodo}
      openTodo={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        goBack={() => setTodoId(null)}
        todo={selectedTodo}
        delTodo={() => delTodo(todoId)}
        onSave={updateTodo}
      />
    );
  }

  return (
    <View>
      <Navbar title='Todo App' />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
});
