function todoReducer(state = { todos: [] }, action) {
  switch (action.type) {
    case "todo/add_todo":
      return { ...state, todos: [...state.todos, action.payload] };
    case "todo/del_todo":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case "todo/update_todo": {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
      return { ...state, todos: newTodos };
    }
    default:
      return state;
  }
}
export default todoReducer;
