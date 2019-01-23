import fetch from '../fetch/fetch'

export const getbloglists = async ()=>{
    return await new Promise((r)=>{
        fetch.get('/getbloglists').then((res)=>{r(res)});
    });
}