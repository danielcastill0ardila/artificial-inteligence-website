export const CreateObject = (key,action) => {
    const obj = {
        [`${action}`]:`${key}/${action}`,
        [`${action}_REQUEST`]:`${key}/${action}_REQUEST`,
        [`${action}_SUCCESS`]:`${key}/${action}_SUCCESS`,
        [`${action}_FAILURE`]:`${key}/${action}_FAILURE`
    }
    return obj
}