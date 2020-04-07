import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { THEME } from '../theme';
import { AppCard } from '../components/ui/AppCard';
import { EditModal } from '../components/EditModal';
import { AppTextBold } from '../components/ui/AppTextBold';
import { AppButton } from '../components/ui/AppButton';

export const TodoScreen = ({ goBack, todo, delTodo, onSave }) => {
  const { DANGER_COLOR, GREY_COLOR } = THEME;

  const [modal, setModal] = useState(false);

  const saveHadler = (title) => {
    onSave(todo.id, title);
    setModal(false);
  };
//expo fetch:android:keystore
//expo upload:android
  return (
    <View style={styles.block}>
      <EditModal
        visible={modal}
        closeModal={setModal}
        value={todo.title}
        onSave={saveHadler}
      />
      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <AppButton onPress={() => setModal(true)}>
          <FontAwesome name='edit' size={20} />
        </AppButton>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.buttonsWidth}>
          <AppButton onPress={goBack} color={GREY_COLOR}>
            <AntDesign name='back' size={20} color='#fff' />
          </AppButton>
        </View>
        <View style={styles.buttonsWidth}>
          <AppButton onPress={delTodo} color={DANGER_COLOR}>
            <AntDesign name='delete' size={20} color='#fff' />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
  buttonsWidth: {
    width: Dimensions.get('window').width / 3,
  },
  title: {
    fontSize: 20,
  },
});
