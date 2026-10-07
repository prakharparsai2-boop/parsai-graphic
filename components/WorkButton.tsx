import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./WorkButton.css";

interface WorkButtonProps {
    text?: string;
    to?: string;
}

const WorkButton: React.FC<WorkButtonProps> = ({ text = "My Work", to = "/work" }) => {
    return (
        <Link to={to} style={{ textDecoration: "none" }}>
            <button className="work-btn-custom">
                <span className="work-btn-text">
                    {text}
                    <ArrowRight className="work-btn-icon" size={20} strokeWidth={2.5} />
                </span>
            </button>
        </Link>
    );
};

export default WorkButton;
