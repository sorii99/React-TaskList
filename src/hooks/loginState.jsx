import React, { useState } from 'react';

export const LoginState = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isLogged, setIsLogged] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await function login({ username, password }) {
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (username === 'admin' && password === 'admin') {
                            resolve();
                        } else {
                            reject();
                        }
                    }, 2000);
                })
            }
            setIsLogged(true);
            setLoading(false);
        } catch (error) {
            setError(`ERROR: Check username or password: ${error}`);
            setLoading(false);
            setUsername('');
            setPassword('');
        }
    }

    const logout = () => {
        setIsLogged(false);
        setLoading(false);
    }

    return (
        <div>
            <div>
                {
                    isLogged ? (
                        <div>
                            <h1>Welcome {username} </h1>
                            <button onClick={logout}>Logout</button>
                        </div>

                    ) : (
                        <div>
                            <form onSubmit={submit}>
                                {
                                    error && <p>{error}</p>
                                }
                                <input
                                    type="text"
                                    placeholder='Username'
                                    value={username}
                                    onChange={(e) => setUsername(e.currentTarget.value)}
                                />
                                <input
                                    type="password"
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.currentTarget.value)}
                                />
                                <button type='submit'>
                                    {loading ? 'Logging...' : 'Login'}
                                </button>
                            </form>
                        </div>
                    )
                }
            </div>
        </div >
    )
}
