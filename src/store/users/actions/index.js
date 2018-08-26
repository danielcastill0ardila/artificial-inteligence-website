import { types } from "./types";
import { getUsers } from "../../../api/users";

export const fetchUser =  test => {
    return dispatch =>{
      return getUsers()
        .then(response => response.json())
            .then(data =>{
            dispatch({
                type:types.FETCH,
                payload:{
                    test:data
                }
            })
        })
    }
};

export const fetchUserRequest = () => ({
  type: types.FETCH_REQUEST
});

export const fetchUserSuccess = users => ({
  type: types.FETCH_SUCCESS,
  payload: {
    users
  }
});
