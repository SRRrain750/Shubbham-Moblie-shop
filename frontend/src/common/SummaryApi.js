export const baseUrl = "http://localhost:8080"
import React from 'react'
import Register from '../pages/Register'

const SummaryApi = () => {
    return {
        register: {
            url: `${baseUrl}/api/users/register`,
            method: "POST"
        }
    };
}

export default SummaryApi

