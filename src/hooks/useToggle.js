import { useState } from 'react'

const UseToggle = (initialValue = false) => {
    const [toggle, setToggle] = useState(initialValue)
    const handleToggle = () => {
        setToggle(!toggle)
    }

    return [toggle, handleToggle]
}

export default UseToggle