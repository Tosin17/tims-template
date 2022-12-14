import axios from 'axios'
const baseApiPath = 'http://localhost:5000'

export async function postData(url = '/add-customer', data = {}) {
    const response = await fetch(`${baseApiPath}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        cache: 'no-cache',
        body: JSON.stringify(data),
    })
    return response.json()
}

export async function getData(url = '') {
    const response = await fetch(`${baseApiPath}${url}`)
    return response.json()
}

export const _axios = axios.create({
    baseURL: baseApiPath,
    timeout: 5000,
    headers: { 'Access-Control-Allow-Origin': '*' },
})
