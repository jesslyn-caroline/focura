import Image from "next/image";
// @ts-ignore
import "./style.css";
import Logo from "../components/others/logo";

function LoginLayout({ children } : { children: React.ReactNode }) {
    return (
    <div className={`w-full h-full flex justify-center`}>
        <div className={`max-w-480 max-h-255 w-screen h-fit grid md:grid-cols-2 gap-x-12 px-8 md:px-12 lg:px-20 py-12 xl:px-28 2xl:px-44`}>
            <div className={`flex flex-col gap-y-8 2xl:gap-y-9`}>
                <Logo />
                <div className={`flex flex-col mt-4`}>
                    <h1 className={`font-bold text-xl xl:text-2xl text-primary`}>Welcome Back</h1>
                    <h2 className={`font-semibold text-lg xl:text-xl text-secondary`}>Ready to focus again?</h2>
                </div>
                { children }
            </div>
            <div className={`hidden md:flex justify-center items-end`}>
                <Image src="/images/login-01.png" alt="building-blocks" width={450} height={450}/>
            </div>
        </div>
    </div>    
)}

export default LoginLayout;