import axios from "axios";

export const LoginService = async (email, password) => {
    try {
        const response = await axios.post('/api/auth/login', {
            email, password
        })
        if (response.status === 200 || response.status === 201) {
            return response.data
        }

    } catch (error) {
        console.log('error', error)

    }

}

export const SignUpService = async (name, email, password) => {
    try {
        const response = await axios.post('/api/auth/signup', {
            name, email, password

        })
        if (response.status === 200 || response.status === 201) {
            return response.data.encodedToken
        }
    }
    catch (error) {
        console.log("error", error)
    }

}
