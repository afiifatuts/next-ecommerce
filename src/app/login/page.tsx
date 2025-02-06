'use client';

import { useWixClient } from '@/hooks/useWixClient';
import { LoginState } from '@wix/sdk';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Cookies from 'js-cookie';

enum MODE {
    LOGIN = 'LOGIN',
    REGISTER = 'REGISTER',
    RESET_PASSWORD = 'RESET_PASSWORD',
    EMAIL_VERIFICATION = 'EMAIL_VERIFICATION',
}

const LoginPage = () => {
    const wixClient = useWixClient();
    const router = useRouter();
    const pathName = usePathname();

    const isLoggedIn = wixClient.auth.loggedIn();
    console.log(isLoggedIn);

    if (isLoggedIn) {
        router.push('/');
    }

    const [mode, setMode] = useState(MODE.LOGIN);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailCode, setEmailCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const formTitle =
        mode === MODE.LOGIN
            ? 'Log in'
            : mode === MODE.REGISTER
            ? 'Register'
            : mode === MODE.RESET_PASSWORD
            ? 'Reset Your Password'
            : 'Verify Your Email';

    const buttonTitle =
        mode === MODE.LOGIN
            ? 'Login'
            : mode === MODE.REGISTER
            ? 'Register'
            : mode === MODE.RESET_PASSWORD
            ? 'Reset'
            : 'Verify';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            let response;
            switch (mode) {
                case MODE.LOGIN:
                    response = await wixClient.auth.login({
                        email,
                        password,
                    });
                    console.log(response, 'aaa');

                    break;
                case MODE.REGISTER:
                    response = await wixClient.auth.register({
                        email,
                        password,
                        profile: { nickname: username },
                    });
                    break;
                case MODE.RESET_PASSWORD:
                    response = await wixClient.auth.sendPasswordResetEmail(
                        email,
                        // window.location.href,
                        pathName,
                    );
                    setMessage('Password reset email sent. Please check your e-mail.');
                    break;
                case MODE.EMAIL_VERIFICATION:
                    response = await wixClient.auth.processVerification({
                        verificationCode: emailCode,
                    });
                    break;
                default:
                    break;
            }

            switch (response?.loginState) {
                case LoginState.SUCCESS:
                    console.log(response);
                    setMessage('Successfully! You are being redirected');
                    const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
                        response.data.sessionToken,
                    );

                    Cookies.set('refreshToken', JSON.stringify(tokens.refreshToken), {
                        expires: 2,
                    });
                    wixClient.auth.setTokens(tokens);
                    router.push('/');
                    break; // Tambahkan break untuk mencegah eksekusi lanjut ke case lainnya

                case LoginState.FAILURE:
                    if (
                        response.errorCode === 'invalidEmail' ||
                        response.errorCode === 'invalidPassword'
                    ) {
                        setError('Invalid email or password');
                    } else if (response.errorCode === 'emailAlreadyExists') {
                        setError('Email already exists!');
                    } else if (response.errorCode === 'resetPassword') {
                        setError('You need to reset your password');
                    } else {
                        setError('Something went wrong!');
                    }
                    break; // Tambahkan break

                case LoginState.EMAIL_VERIFICATION_REQUIRED:
                    setMode(MODE.EMAIL_VERIFICATION);
                    break; // Tambahkan break

                case LoginState.OWNER_APPROVAL_REQUIRED:
                    setMessage('Your account is pending approval');
                    break; // Tambahkan break

                default:
                    break;
            }
        } catch (err) {
            console.log(err);
            setError('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <form
                className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 flex flex-col gap-6 relative"
                onSubmit={handleSubmit}
            >
                <h1 className="text-2xl font-semibold text-center">{formTitle}</h1>

                {mode === MODE.REGISTER && (
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="John Doe"
                            className="border border-gray-300 focus:ring-2 focus:ring-lama rounded-md px-4 py-2"
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                )}

                {mode !== MODE.EMAIL_VERIFICATION ? (
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="John@gmail.com"
                            className="border border-gray-300 focus:ring-2 focus:ring-lama rounded-md px-4 py-2"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                ) : (
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">
                            Verification Code
                        </label>
                        <input
                            type="text"
                            name="emailCode"
                            placeholder="Enter code"
                            className="border border-gray-300 focus:ring-2 focus:ring-lama rounded-md px-4 py-2"
                            onChange={e => setEmailCode(e.target.value)}
                        />
                    </div>
                )}

                {(mode === MODE.LOGIN || mode === MODE.REGISTER) && (
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="border border-gray-300 focus:ring-2 focus:ring-lama rounded-md px-4 py-2"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                )}
                {mode === MODE.LOGIN && (
                    <div
                        className=" text-sm underline cursor-pointer"
                        onClick={() => setMode(MODE.RESET_PASSWORD)}
                    >
                        Forgot Password
                    </div>
                )}

                <button
                    className="bg-lama hover:bg-opacity-80 text-white font-medium py-2 rounded-md transition disabled:bg-pink-200 disabled:cursor-not-allowed"
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : buttonTitle}
                </button>

                {error && <div className="text-red-600 text-sm text-center">{error}</div>}

                {mode === MODE.LOGIN && (
                    <div
                        className="text-sm text-center text-gray-700 cursor-pointer underline"
                        onClick={() => setMode(MODE.REGISTER)}
                    >
                        {"Don't"} have an account?
                    </div>
                )}
                {mode === MODE.REGISTER && (
                    <div
                        className="text-sm text-center text-gray-700 cursor-pointer underline"
                        onClick={() => setMode(MODE.LOGIN)}
                    >
                        Have an account?
                    </div>
                )}
                {mode === MODE.RESET_PASSWORD && (
                    <div
                        className="text-sm text-center text-gray-700 cursor-pointer underline"
                        onClick={() => setMode(MODE.LOGIN)}
                    >
                        Go back to login
                    </div>
                )}
                {message && <div className="text-sm text-center text-green-600">{message}</div>}
            </form>
        </div>
    );
};

export default LoginPage;
