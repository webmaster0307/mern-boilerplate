// /*
//  * AppReducer
//  *
//  * The reducer takes care of our data. Using actions, we can change our
//  * application state.
//  * To add a new action, add it to the switch statement in the reducer function
//  *
//  * Example:
//  * case YOUR_ACTION_CONSTANT:
//  *   return state.set('yourStateVariable', true);
//  */
//
// import { fromJS } from 'immutable';
// // import { LOGIN_SUCCESS, LOGIN_FAILED } from '../Login/constants';
// import {
//   LOAD_REPOS_SUCCESS,
//   LOAD_REPOS,
//   LOAD_REPOS_ERROR,
// } from './constants';
// // import { RECEIVE_API_DATA } from '../Gucci/actions';
// // The initial state of the App
// const initialState = fromJS({
//   loading: false,
//   error: false,
//   currentUser: false,
//   userData: {
//     repositories: false,
//   },
// });
//
// function appReducer(state = initialState, action) {
//   switch (action.type) {
//     // case LOGIN_SUCCESS:
//     //   return {
//     //     ...state,
//     //     login: action
//     //   };
//     // case LOGIN_FAILED:
//     //   return {
//     //     ...state
//     //   };
//     // case RECEIVE_API_DATA:
//     //   return action.data;
//     case LOAD_REPOS:
//       return state
//         .set('loading', true)
//         .set('error', false)
//         .setIn(['userData', 'repositories'], false);
//     case LOAD_REPOS_SUCCESS:
//       return state
//         .setIn(['userData', 'repositories'], action.repos)
//         .set('loading', false)
//         .set('currentUser', action.username);
//     case LOAD_REPOS_ERROR:
//       return state
//         .set('error', action.error)
//         .set('loading', false);
//     default:
//       return state;
//   }
// }
//
// export default appReducer;
