//To use context import from here and replace the usestate in App.js


import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const UsersContext = createContext();

export const UsersProvider = ({children}) => {

    const [userList,setUserList]= useState([]);

    const getUsers = async () =>{
        const {data} = await axios.get('https://randomuser.me/api/?results=100');
        setUserList(data.results);
      }

      useEffect(() => {
            getUsers();
      }, [userList])
    return (
        <UsersContext.Provider value={[userList, setUserList]}>
            {children}
        </UsersContext.Provider>
    )
}


