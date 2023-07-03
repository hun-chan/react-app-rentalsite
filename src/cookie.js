import { Cookies } from "react-cookie";
const cookie = new Cookies();

export const loginUser = () =>{
    if(cookie.get('username')){
        return cookie.get('username');
    }
    return 'welcome';
}
export const onLogin = (user)=>{
    cookie.set('username',user,{path:"/"});
}
export const onLogout = () =>{
    console.log('yesyes')
    cookie.remove('username');
}
