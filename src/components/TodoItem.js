import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {Icon} from 'react-native-elements';
import {removeTodo} from '../redux/actions/todos';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    width: '90%',
  },
  item_bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  title: {
    fontSize: 32,
  },
});

const TodoItem = ({todoData}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <Text>{todoData.title}</Text>
      <View style={styles.item_bottom}>
        <View style={styles.container}>
          <Icon
            onPress={() => navigation.push('Edit', { todoId: todoData.id})}
            name="pencil"
            type="font-awesome"
          />
        </View>
        <View style={styles.container}>
          <Icon
            onPress={() => dispatch(removeTodo(todoData.id))}
            name="trash"
            type="font-awesome"
          />
        </View>
      </View>
    </View>
  );
};

export default TodoItem;
