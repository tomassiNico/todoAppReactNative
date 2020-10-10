import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodoList} from '../redux/actions/todos';
import TodoItem from '../components/TodoItem';

const HomeScreen = () => {
  const {todos, loading} = useSelector((state) => ({
    todos: state.todos.todos,
    loading: state.todos.isFetching,
  }));
  const dispatch = useDispatch();

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
    </View>
  );
};

export default HomeScreen;