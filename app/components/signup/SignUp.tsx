"use client"

import axios from "axios";
import { forwardRef, useRef } from "react";
// interface IuserInfo {
//     name : string;
//     email : string;
//     password : string;
// }
export function Signup() {
    const userName = useRef<HTMLInputElement>(null);
    const userEmail = useRef<HTMLInputElement>(null);
    const userPass = useRef<HTMLInputElement>(null);
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                    <div className="px-10">
                        <div className="text-3xl font-extrabold text-black">
                            Sign Up
                        </div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput ref={userName} label="Name" placeholder="Tony Shark" />
                        <LabelledInput ref={userEmail} label="Email" placeholder="abcd@gmail.com" />
                        <LabelledInput ref={userPass} label="Password" type={"password"} placeholder="123456" />
                        <button type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={ async () => {
                            console.log(userName.current.value);
                            console.log(userEmail.current.value);
                            const res = await axios.post("http://localhost:3000/api/user",{
                               name : userName.current.value,
                               email : userEmail.current.value,
                               password : userPass.current.value
                            })
                            console.log(res)
                        }}>Sign Up</button>
                    </div>
                </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
}

const LabelledInput = forwardRef<HTMLInputElement, LabelledInputType>(
    ({ label, placeholder, type = "text" }, ref) => {
        return (
            <div>
                <label className="block mb-2 text-sm text-black font-semibold pt-4">
                    {label}
                </label>
                <input
                    ref={ref}
                    type={type}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder={placeholder}
                    required
                />
            </div>
        );
    }
);

LabelledInput.displayName = "LabelledInput";