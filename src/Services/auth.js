const TOKENKEY = "acompe-token";
const  idkey  =  "acompe-id" ;

export const isAuthenticated = () => {
    return localStorage.getItem(TOKENKEY) !== null;
  };

  export const getToken = () => {
    return localStorage.getItem(TOKENKEY);
  }

  export const login = (token) => {
    localStorage.setItem(TOKENKEY, token);
  };

  export  const  idUser  =  ( id )  =>  {
    localStorage.setItem ( idkey ,  id ) ;
  }
  
  export  const  getId  =  ()  =>  {
    return localStorage.getItem ( idkey ) ;
  }