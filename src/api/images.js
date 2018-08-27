export const addImage = data => fetch('https://artificial-inteligence-api.herokuapp.com/api/file',{
    method:'POST',
    body:data
});