import React, { useEffect } from 'react'
import axios from 'axios'

function LadingPage() {

    useEffect(() => {
        axios.get('/api/hello')
            .then(response => {
                console.log(response.data)
            })
    }, [])

    return (
        <div>
            Landing Page
        </div>
    )
}

export default LadingPage
