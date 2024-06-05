import { Modal, Pressable, StyleSheet, TextInput, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { ActionIconButton } from '@shared/components/Buttons';
import { IconType } from '@shared/components/Icons';
import { sizeConverter } from '@shared/constants/designSystem';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from './SearchInput';

const SearchModal = () => {
  const inputRef = useRef<TextInput>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const insets = useSafeAreaInsets();

  const hideMenu = () => setModalVisible(false);
  const showMenu = () => setModalVisible(true);
  const onShowHandler = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const options = {
    icon: {
      size: sizeConverter(20),
      color: '#1B1A57',
      onPress: showMenu,
    },
  };

  return (
    <View>
      <Modal
        visible={modalVisible}
        onRequestClose={hideMenu}
        transparent
        onShow={onShowHandler}>
        <Pressable
          onPress={hideMenu}
          style={[{ marginTop: insets.top }, styles.modalContainer]}>
          <View style={styles.contentContainer} pointerEvents="box-none">
            <SearchInput ref={inputRef} />
          </View>
        </Pressable>
      </Modal>
      <ActionIconButton type={IconType.Search} {...options.icon} />
    </View>
  );
};

export default SearchModal;

const styles = StyleSheet.create({
  contentContainer: {
    transform: [{ translateY: sizeConverter(60) }],
  },
  modalContainer: {
    flex: 1,
  },
});
