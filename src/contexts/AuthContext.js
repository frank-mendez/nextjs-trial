import React, { useEffect, useState, createContext } from 'react'
import cookie from 'js-cookie'
import firebase from '../firebaseConfig'
import { useRouter } from 'next/router'


export const AuthContext = createContext()
const db = firebase.firestore();

const AuthContextProvider = ({ children }) => {
    const router = useRouter()

    const [loginLoading, setLoginLoading] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [registerLoading, setRegisterLoading] = useState(false)
    const [registerErrorMessage, setRegisterErrorMessage] = useState('')
    
    const emailLogin = async (email, password, redirectPath) => {
        setLoginLoading(true)
        await firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
            console.log('User logged in')
            setLoginLoading(false)
            setIsAuth(true)
            router.push('/')
        }).catch((err) => {
            console.log(err)
            setErrorMessage(JSON.stringify(err.message))
            setLoginLoading(false)
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

    const checkUserAuth = () => {
        const user = firebase.auth().currentUser;
        if (!user) {
            console.log('User not authenticated')
            router.push('/welcome')
        }
    }

    
    const registerUser = async (email, password, matchPassword, firstName, lastName) => {
        setRegisterLoading(true)
        if (password === matchPassword) {
            await firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
                console.log('User registered', JSON.stringify(response.user.uid))
                const uid = JSON.stringify(response.user.uid)
                addRegisteredUserToFirestore(uid, firstName, lastName, email)
                setRegisterLoading(false)
                setIsAuth(true)
                router.push('/create')
            }).catch((err) => {
                console.log(err)
                setRegisterErrorMessage(JSON.stringify(err.message))
                 setRegisterLoading(false)
            })
        } else {
            setRegisterErrorMessage('Password did not match')
             setRegisterLoading(false)
        }
    }

    const addRegisteredUserToFirestore = async (uid, firstName, lastName, email) => {
        await db.collection('users').doc(uid).set({
            firstName: firstName,
            familyName: lastName,
            email: email
        });
    }

    return (
        <AuthContext.Provider value={{emailLogin, loginLoading, isAuth, errorMessage, signOut, registerUser, registerErrorMessage, registerLoading, checkUserAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
