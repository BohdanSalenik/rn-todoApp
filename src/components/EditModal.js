import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Alert,
} from 'react-native';
import { THEME } from '../theme';
import { AppButton } from './ui/AppButton';

export const EditModal = ({ visible, closeModal, value, onSave }) => {
  const [title, setTitle] = useState(value);
  const saveHandler = () => {
    if (title.trim().length < 3) {
      console.log(title);
      Alert.alert(
        'Error',
        `Minimal length length todo 3 char, now ${title.length} chars`
      );
    } else {
      onSave(title);
    }
  };
  return (
    <Modal visible={visible} animationType='slide' transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          maxLength={64}
        />
        <View style={styles.btnGroupe}>
          <View style={styles.button}>
            <AppButton
              onPress={() => closeModal(false)}
              color={THEME.DANGER_COLOR}
            >Cancel</AppButton>
          </View>
          <View style={styles.button}>
            <AppButton onPress={saveHandler} >
              Save
            </AppButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    marginBottom: 20,
    width: '80%',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
  btnGroupe: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  button: {
    width: '30%',
  },
});
