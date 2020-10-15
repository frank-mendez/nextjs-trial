import React, { useContext, useEffect } from 'react'
import { AuthContext, checkUserAuth } from '../src/contexts/AuthContext'
import LayoutComponent from '../src/components/Layout/Layout'

const index = () => {
    const { checkUserAuth, signOut } = useContext(AuthContext)
    useEffect(() => {
        checkUserAuth()
    }, [signOut])

    return (
        <LayoutComponent signOut={signOut} />
    )
}

export default index
