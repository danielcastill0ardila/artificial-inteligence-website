import { types } from "./types";
import { addImage } from "../../../api/images";

export const PostImage =  file => {
    let data = new FormData();
    data.append('files',file,'daniel.jpg');
    return dispatch =>{
      return addImage(data)
        .then(response => response.json())
            .then(datafile =>{
            dispatch({
                type:types.ADD,
                payload:{
                    imageResult:datafile
                }
            })
        })
    }
};