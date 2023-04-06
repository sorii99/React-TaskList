import React, { useReducer } from 'react';

const FIELD = 'FIELD';
const LOGIN = 'LOGIN';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const LOGOUT = 'LOGOUT';

const initalState = {
    username: '',
    password: '',
    error: '',
    isLoading: '',
    isLogged: ''
}

const loginReducer = (state, action) => {
    switch (action.type) {
        case 'FIELD':
            return {
                ...state,
                [action.fieldName]: action.payload
            }
        case 'LOGIN':
            return {
                ...state,
                error: '',
                isLoading: true
            }
        case 'SUCCESS':
            return {
                ...state,
                error: '',
                isLoading: false,
                isLogged: true
            }
        case 'FAILURE':
            return {
                ...state,
                error: 'Wrong credentials',
                isLoading: false,
                isLogged: false,
                username: '',
                password: ''
            }
        case 'LOGOUT':
            return {
                ...state,
                isLogged: false
            }
        default:
            return state;
    }
}

export const LoginReducer = () => {

    const [state, dispatch] = useReducer(loginReducer, initalState);
    const { username, password, error, isLoading, isLogged } = state;

    const submit = async (e) => {
        e.preventDefault();
        dispatch({ type: LOGIN })

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
            dispatch({ type: SUCCESS })
        } catch (error) {
            dispatch({ type: FAILURE })
        }
    }

    const logout = () => {
        dispatch({ type: LOGOUT })
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
                                    onChange={(e) => dispatch(
                                        {
                                            type: FIELD, fieldName: 'username',
                                            payload: e.currentTarget.value
                                        })}
                                />
                                <input
                                    type="password"
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => dispatch(
                                        {
                                            type: FIELD, fieldName: 'password',
                                            payload: e.currentTarget.value
                                        })}
                                />
                                <button type='submit'>
                                    {isLoading ? 'Logging...' : 'Login'}
                                </button>
                            </form>
                        </div>
                    )
                }
            </div>
        </div >
    )
}
