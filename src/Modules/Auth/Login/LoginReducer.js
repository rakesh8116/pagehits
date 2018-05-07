const defaultState = {
  isLoggedIn: false,
  isLoading : false,
  username: '',
  password: ''
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_LOGIN_USER': 
      console.log('In Login Reducer ', action)
      return Object.assign({}, state, { 
          isLoggedIn: true,
          username: action.username,
          password: action.password
      });
    case 'LOGOUT':
      return Object.assign({}, state, { 
          isLoggedIn: false,
          username: '',
          password: ''
      });
    default:
      return state;
  }
}