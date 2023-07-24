import { useEffect, useState } from "react";

interface ToastProps {
    message: string;
    duration?: number;
}

const Toast = ({ message, duration = 3000 }: ToastProps) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);

        return () => {
            clearTimeout(timer);
        };
    }, [duration, message]);

    const getBackgroundColor = () => {
        return "rgba(0, 0, 0, 0.8)";
    };

    return (
        <div
            style={{
                position: "fixed",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "12px",
                borderRadius: "8px",
                backgroundColor: getBackgroundColor(),
                color: "white",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                zIndex: 9999,
                opacity: visible ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
            }}
        >
            {message}
        </div>
    );
};

export default Toast