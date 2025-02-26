import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin(){

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    async function signin(){
        const username = usernameRef.current?.value ;
        console.log(usernameRef.current)
        const password = passwordRef.current?.value ;

        const response = await axios.post(BACKEND_URL + "/api/v1/signin" , {
                username ,
                password
            
        })
        const jwt = response.data.token;
        localStorage.setItem("token" ,jwt);
        navigate("/dashboard");
        //redirect the user 

    }
    return( 
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-md border min-w-48 p-8">
                <Input reference={usernameRef} placeholder="Username" />
                <Input reference={passwordRef} placeholder="Password"/>
                <div className="flex justify-center pt-4 pb-4 ">
                    <Button onClick={signin} loading={false} variants="primary"  text="Signin"  fullwidth={true}/>

                </div>

            </div>
        </div>
    )
}