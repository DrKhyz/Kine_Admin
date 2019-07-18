import { getTokenSelector } from "../pills/login/login.selector";
import store from "../store";

export function getAPIconfig() {
  return {
    baseURL: "http://localhost:3030/",
    headers: {
      authorization: getTokenSelector(store.getState())
    }
  };
}