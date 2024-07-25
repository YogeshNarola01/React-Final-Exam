let initialState = {
  userlist: [],
  err: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RECORD":
      return {
        ...state,
        userlist: [...state.userlist, action.payload],
      };

    case "VIEW_RECORD":
      return {
        ...state,
        userlist: action.payload,
      };

    case "DELETE_RECORD":
      return {
        ...state,
        userlist: state.userlist.filter((user) => user.id !== action.payload),
      };
    case "MULTIPLE_DELETEREC":
      return {
        ...state,
        userlist: action.payload,
      };

    case "CHANGE_STATUS":
        const statuschange = state.userlist.map(val =>
          val.id === action.payload.id ? { ...val, status: action.payload.NewStatus } : val
        );
        return {
          ...state,
          userlist: statuschange,
      }
    default:
      return state;
  }
};

export default userReducer;
