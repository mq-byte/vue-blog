import fetch from '../fetch/fetch'

export const getbloglists = async ()=>{
    return await new Promise((r)=>{
        fetch.get('/getbloglists').then((res)=>{r(res)});
    });
}
export const getblogDetail = async (type,MDs)=>{
    console.log(MDs)
    return await new Promise((r)=>{
        fetch.get('/getblog',{
            params:{
                type: type,
                MDs: MDs
            }
        }).then((res)=>{r(res)});
    });
}