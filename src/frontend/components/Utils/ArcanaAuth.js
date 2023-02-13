import { AppMode,AuthProvider, CHAIN } from '@arcana/auth'
import {useState} from 'react';

const appID = `c6B3Ee9EA8c98355619d2B005e74D38aAe9A2ef3`; 
let auth; 

function useArcanaAuth(){
    const [initialized,setIntialized] = useState(false) 
    const initializeAuth = async () => {
      if(!auth){
        auth = new AuthProvider(appID)
        await auth.init()
        setIntialized(true)
      }
    }

    const login = async()=>{
      if(initialized){
        await auth.loginWithSocial(`google`); 
      }
    }

    const isLoggedIn = async() => {
      if(initialized){
        return await auth.isLoggedIn(); 
      }
    }

    const getAccounts = async() =>{
      if(initialized)
        return await auth.provider.request({method:"eth_accounts",params:[]})
    }

    const logout = async() => {
      if(initialized){
        return await auth.logout()
      }
    }

    return {
      initializeAuth,
      login,
      isLoggedIn,
      getAccounts,
      logout,
      initialized
    }
}

export default useArcanaAuth;