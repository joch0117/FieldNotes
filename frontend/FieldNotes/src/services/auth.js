const API_URL = import.meta.env.VITE_API_URL

export const registerUser = async (userData) =>{
    const response = await fetch(`${API_URL}/auth/register` , {
        method:`POST`,
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(userData)
    })

    const data = await response.json()

    if (!response.ok){
        throw new Error(data.message)
    }
    return data
}

export const loginUser = async (userData) =>{
    const response = await fetch(`${API_URL}/auth/login`,{
        method: `POST`,
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(userData)
    })
    const data = await response.json()

    if(!response.ok){
        throw new Error(data.message)
    }

    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
    
    return data
}