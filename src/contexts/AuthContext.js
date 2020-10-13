import React, { useEffect, useState, createContext } from 'react'
import cookie from 'js-cookie'
import firebase from '../firebaseConfig'

export const AuthContext = createContext()

const tokenName = 'firebaseToken';

const AuthContextProvider = ({ children }) => {

    const [loginLoading, setLoginLoading] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    
    const emailLogin = async (email, password, redirectPath) => {
        setLoginLoading(true)
        await firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            console.log('User logged in')
            setLoginLoading(false)
            setIsAuth(true)
        }).catch((err) => {
            console.log(err)
            setErrorMessage(JSON.stringify(err))
            setLoginLoading(false)
        })
    }

    const onAuthStateChange = () => {
        return firebase.auth.onAuthStateChange(async (user) => {
            if (user) {
                const token = await user.getIdToken();
                cookie.set(tokenName, token, {expires: 14})
            } else {
                cookie.remove(tokenName)
            }
        })
    }

    const signOut = () => {
        firebase.auth().signOut().then(function() {
        // Sign-out successful.
            setIsAuth(false)
            console.log('Sign-out successful')
        }).catch(function(error) {
        // An error happened.
            console.log('Sign-out unsuccessful')
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChange
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={{emailLogin, loginLoading, isAuth, errorMessage, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
