//Base URL for all API calls - change this one line when deploying
const API_URL = "http://localhost:8001"

//Gets the JWT token from browser storage
//localStorage persists even when the page is refreshed
// unlike a variable which would reset to null on every refresh

const getToken = () => localStorage.getItem("token") //Stored here so user stays logged in

//AUTH
//Register a new user account
//Send email, password, confirm_password
export const registerUser = async (email, password, confirmPassword, fullName) => {
    const repsonse = await fetch (`${API_URL}/auth/register`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        //JSON.stringify converts JSON object -> string for FastAPI
        body: JSON.stringify({
            email,
            password,
            confirm_password: confirmPassword,
            full_name: fullName
        })
    })

    //response.ok is true for 2xx status codes, falso for 4xx/5xx
    if (!response.ok){
        const error = await response.json()
        //error.detail is FastAPI's standard error format
        throw new Error (error.detail)
    }
    return response.json() //returns the new user object
}

//Login - returns a JWT token
export const loginUser = async (email, password) => {
    const repsonse = await fetch (`${API_URL}/auth/login`,{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({email, password})
    })

    if (!response.ok){
        const error = await repsonse.json()
        throw new Error(error.detail)
    }

    //Return{access token, token_type}
    return response.json()
}

//Fetch currently logged in user's data
//Requires a valid JWT token in the Authorisation header
export const getCurrentUser = async() => {
    const response = await fetch (`${API_URL}/auth/me`,{
        method: "GET",
        header: {
            "Content_Type" : "application/json",
            //Bearer Token tells FastAPI user detail
            "Authorization": `Bearer ${getToken()}`
        }
    })
    if (!repsonse.ok){
        //Token expired - need to login in again
        throw new Error("Not authenticated")
    }

    //Return{id, full_name, email, is_tutor, created_at}
    return response.json()
}
