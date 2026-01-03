'use client'

import LoginHooks from "./hooks";

function Login() {

    const { handleSubmit } = LoginHooks();

    return (
    <form onSubmit={ handleSubmit } className={`flex flex-col gap-y-3 2xl:gap-y-3.5 lg:max-w-3/4`}>
        <div className={`flex flex-col gap-y-1.5`}>
            <label htmlFor="email" className={`font-medium text-md xl:text-lg`}>Email</label>
            <input id="email" type="text" title="email" className={`outline-none border-b border-secondary text-md xl:text-lg`}/>
        </div>  
        <div className={`flex flex-col gap-y-1.5`}>
            <label htmlFor="password" className={`font-medium text-md xl:text-lg`}>Password</label>
            <input id="password" type="password" title="password" className={`outline-none border-b border-secondary text-md xl:text-lg`}/>
        </div>
        <button className={`mt-8 mb-4 bg-primary hover:bg-secondary transition-colors text-white py-2 xl:py-2 rounded-sm text-sm xl:text-lg`}
            type="submit">
            Login
        </button>
    </form>
)}

export default Login