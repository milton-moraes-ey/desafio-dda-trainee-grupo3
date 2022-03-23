import { v4 as uuid } from 'uuid'

type  SignInRequestData = {
    email: String;
    password: String;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData) {
    await delay()

    return {
        token: uuid(),
        user: {
            name: 'Gabriel Negreiro',
            email: 'Gabriel.Negreiro',
        }
    }
}