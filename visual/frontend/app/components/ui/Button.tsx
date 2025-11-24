import React from 'react'
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    label?: string;
    variant?: "primary" | "secondary" | "danger" | "success";
    fullWidth?: boolean;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}


const Button = ({
    label, variant = "primary", fullWidth = false,
    className, onClick, type = "button" }: ButtonProps) => {
        const baseStyles = 
            "px-4 py-2 rounded-lg font-medium transition-all active:scale-95";
        
        const variants: Record<string, string> = {
            primary: "bg-blue-600 hover:bg-blue-700 text-white",
            secondary: "bg-gray-700 hover:bg-gray-800 text-white",
            danger: "bg-red-600 hover:bg-red-700 text-white",
            success: "bg-green-600 hover:bg-green-700 text-white",
        };

        const merged = twMerge(
            baseStyles, variants[variant],
            fullWidth && "w-full", className
        )

        return (
            <button
                type={type}
                onClick={onClick}
                className={merged}
            >
            {label}
            </button>
        )
}

export default Button