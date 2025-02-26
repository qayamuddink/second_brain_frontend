import { ReactElement } from "react"

interface Buttonprops{
    variants: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void ;
    fullwidth?: boolean ;
    loading?: boolean
}

const variantClasses = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-200 text-purple-600"
}

const defaultstyles = " pl-4 px-6 py-2 rounded-md font-light flex items-center ";

export const Button = ({variants ,text ,startIcon,onClick , fullwidth }:  Buttonprops) => {

    return <button onClick={onClick} className={variantClasses[variants] +"" + defaultstyles + `${fullwidth ? " w-full flex justify-center items-center" : ""}`} >
        <div className="pr-2">
            {startIcon}
        </div>
       
        {text}
    </button>
}