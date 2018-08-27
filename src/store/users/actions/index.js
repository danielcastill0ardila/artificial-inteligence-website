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

