import { auth, provider} from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

const navigate = useNavigate();

const signInWithGoogle = async () => {
   const result = await signInWithPopup(auth, provider)
   console.log(result)
    navigate('/')
}

return (
    <div className="login-container">
        <h1>Login Page</h1>
        <p>Sign in with Google To continue</p>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
    )
}