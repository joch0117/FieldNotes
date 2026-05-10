const API_URL = import.meta.env.VITE_API_URL

export const registerUser = async (userName, email, password)=>{

    const response = await fetch(`${API_URL}/api/auth/register`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            userName,
            email,
            password
        })
    })

    const data = await response.json()

    if(!response.ok){
        throw new Error(data.message)
    }

    return data
}

