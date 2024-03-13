"use client"
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCredentialsSubmit = async (e) => {
        e.preventDefault();

        // Call signIn method from NextAuth with email and password
        const result = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });
        console.log(result, "result");
        if (result.error) {
            console.error('Credentials Authentication failed:', result.error);
        } else {
            // Redirect to home page or redirect user to intended page
            router.push('/');
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();

        // Call signIn method from NextAuth with Google provider
        await signIn('google', { callbackUrl: '/home' });
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleCredentialsSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
    );
}
