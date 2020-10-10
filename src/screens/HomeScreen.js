import React, {useEffect} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodoList} from '../redux/actions/todos';
import TodoItem from '../components/TodoItem';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const {todos, loading} = useSelector((state) => ({
    todos: state.todos.todos,
    loading: state.todos.isFetching,
  }));
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchTodoList());
  }, []);

  const renderItem = ({item}) => <TodoItem todoData={item} />;

  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onRefresh={() => dispatch(fetchTodoList())}
        refreshing={loading}
      />
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 70,
          position: 'absolute',
          bottom: 10,
          right: 10,
          height: 70,
          backgroundColor: '#1fa67a',
          borderRadius: 100,
        }}
        onPress={() => navigation.push('Edit')}
        >
        <Icon
          name="plus"
          type="font-awesome"
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
