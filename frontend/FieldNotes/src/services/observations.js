const API_URL = import.meta.env.VITE_API_URL

export const getObservations = async ()=>{
    const token = localStorage.getItem('token')

    const response = await fetch(`${API_URL}/observations/`,{
        method:'GET',
        headers:{
            'Authorization': `Bearer ${token}`
        }
    })

    const data = await response.json()

    if(!response.ok){
        throw new Error(data.message)
    }

    return data.observations
}