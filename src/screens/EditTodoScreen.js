import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Input, Button} from 'react-native-elements';
import {addTodo, editTodo} from '../redux/actions/todos';

const EditTodoScreen = () => {
  const params = useRoute().params;
  const [todoId, setTodoId] = useState('');
  const [description, setDescription] = useState('');
  const todoEditing = useSelector((state) => {
    const todo = state.todos.todos.find((t) => t.id === params?.todoId);
    return todo;
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (todoEditing) {
      setTodoId(todoEditing.id);
      setDescription(todoEditing.title);
    }
  }, [todoEditing]);

  const onPressSave = () => {
    let todo = {...todoEditing, title: description};
    if (todoId) {
      todo = {...todo, id: parseInt(todoId)};
      dispatch(editTodo(todo));
    } else {
      dispatch(addTodo(todo));
    }
    navigation.goBack();
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Input
        value={todoId ? todoId.toString() : ''}
        placeholder="Id del todo"
        disabled
      />
      <Input
        value={description}
        onChange={(value) => setDescription(value.nativeEvent.text)}
        placeholder="Descripción"
        maxLength={100}
        multiline
        numberOfLines={4}
      />
      <Button title="Guardar" type="outline" onPress={onPressSave} />
    </View>
  );
};

export default EditTodoScreen;
