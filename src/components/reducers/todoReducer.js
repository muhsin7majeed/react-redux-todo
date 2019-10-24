// Setting Initial State
const initialState = {
  todoStatus: {
    status: null,
    message: ""
  },
  todos: [
    {
      id: 1,
      label: "Buy Milk",
      message: "buy milk duh!",
      time: "2-4-2001",
      isComplete: false
    },
    {
      id: 2,
      label: "Buy a Cow",
      message: "just a thought",
      time: "3-4-2001",
      isComplete: false
    },
    {
      id: 3,
      label: "pizzaa!!",
      message: "yummyy",
      time: "5-4-2003",
      isComplete: true
    }
  ]
};

// Setting Reducers => takes in initialState, and actions
const reducerTodo = (state = initialState, actions) => {
  // returns changed state by "switching action.type"
  switch (actions.type) {
    case "ADD_TODO":
      const newTodo = [...state.todos];
      // pushes new entry to array
      newTodo.push(actions.payload);
      return {
        todoStatus: {
          status: true,
          message: "New todo created.."
        },
        todos: newTodo
      };
    case "DELETE_TODO":
      return {
        todoStatus: {
          status: false,
          message: "Todo deleted.."
        },
        // filters array to remove selected ID
        todos: state.todos.filter(todo => todo.id !== actions.id)
      };
    case "COMPLETE_TODO":
      return {
        todoStatus: state.todoStatus,
        // changes isComplete to toggle completed arrays
        todos: state.todos.map(todo =>
          todo.id === actions.id
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        )
      };
    default:
      return state;
  }
};

export default reducerTodo;
