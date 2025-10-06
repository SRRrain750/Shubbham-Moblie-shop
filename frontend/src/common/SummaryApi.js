export const baseUrl = "http://localhost:8080"
import React from 'react'
import Register from '../pages/Register'


const SummaryApi = {
  register: {
    url: `${baseUrl}/api/user/register`,
    method: "POST"
  }
};

export default SummaryApi;
