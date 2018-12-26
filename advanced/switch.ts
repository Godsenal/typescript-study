// redux에서 쓴 것처럼 ts는 switch를 통한 타입추론이 가능하다.

interface Action {
  type: string;
}
interface Todo {
  id: number;
  todo: string;
}
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
// class로 해도 되고, interface로 해도 된다.
// 전에 한 것처럼, constructor의 인자만 지정해주고 내용이 없으면, 다이렉트로 프로퍼티가 된다.
class AddTodo implements Action {
  public readonly type = ADD_TODO;
  constructor(public todo: Todo) {}
}
interface DeleteTodo extends Action {
  type: typeof DELETE_TODO;
  id: number;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

function todoReducer(
  action: AddTodo | DeleteTodo,
  state: TodoState,
): TodoState {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    }
    default:
      return state;
  }
}
