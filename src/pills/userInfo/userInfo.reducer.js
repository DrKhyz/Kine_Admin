import { USER_EVENTS, USER_NAME } from "./userInfo.action";

const initialState = {
  userEvents: [],
  userName: ""
};

export default function UserEventsReducer(state = initialState, action) {
  switch (action.type) {
    case USER_EVENTS:
      action.userEvents.sort(function(a, b) {
        a = new Date(a.date);
        b = new Date(b.date);
        return a > b ? 1 : a < b ? -1 : 0;
      });
      return { ...state, userEvents: action.userEvents };
    case USER_NAME:
      return { ...state, userName: action.userName };
    default:
      return state;
  }
}
