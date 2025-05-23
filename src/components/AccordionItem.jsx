import { useState } from "react";


export default function AccordionItem ({ title, description}){
    const [isOpen, setIsOpen] = useState(false);
    const handleItemClick = () =>{
        setIsOpen(!isOpen);
    }
    
    return (
        <>
            <section id="section-main">
                <ul onClick={handleItemClick} className="bottom-list" >
                    <li><a href="#">{title}</a></li>
                    <li><a href="#">{title}</a></li>
                    <li><a href="#">{title}</a></li>
                    <li><a href="#">{title}</a></li>
                    <li><a href="#">{title}</a></li>
                    <li><a href="#">{title}</a></li>
                </ul>
            </section>
            <section id={`content-main${isOpen ? "open" :""}`}>
                <div className="container-title">
                    <h1>{title}</h1>
                </div>
                <div className="container-content">
                    <p>{description}</p>
                </div>
            </section>
        </>
    );
}