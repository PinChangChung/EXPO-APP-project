import React from 'react';

import LoginScreen from './LoginScreen';
import AccountScreen from './AccountScreen'


import { selectHasLogin } from "../redux/slice";
import { useSelector } from "react-redux";


const Account = () => {
    const hasLogin = useSelector(selectHasLogin);

    return (
        <>
            {
                hasLogin ? <AccountScreen /> :
                    <LoginScreen />
            }
        </>
    )

}

export default Account;