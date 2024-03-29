import { useState } from 'react'
import './authentication.scss'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';


const Authentication = () => {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                setError(true);
            })
    }

    return (

        <div className='login'>
            <form onSubmit={handleLogin}>
                <input type='email' placeholder='email'
                 onChange={e=>setEmail(e.target.value)}
                 key="email-input"
                />
                <input type='password' placeholder='password' 
                onChange={e=>setPassword(e.target.value)}
                key="pw-input"
                />
                <button type='submit'>Login</button>
                {error && <span>Невірний email або пароль!</span>}
            </form>
        </div>

    )
}

export default Authentication