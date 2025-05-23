import { useState } from "react";

export default function AccordionItem (){
    const [isOpen, setIsOpen] = useState(false);

    const handleItemClick = () =>{
        setIsOpen (!isOpen);
    }
    
    return (
        <>
            <section id="section-main">
                <ul onClick={handleItemClick}    className="bottom-list" >
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">JAVASCRIPT</a></li>
                    <li><a href="#">NODE.JS</a></li>
                    <li><a href="#">EXPRESS</a></li>
                    <li><a href="#">REACTJS</a></li>
                </ul>
            </section>
            <section id={`content-main${isOpen ? "open" :""}`}>
                <div className="container-title">
                    <h1>Titolo</h1>
                </div>
                <div className="container-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fugiat molestiae dolorum iure ex? Tempora veniam at soluta ullam illo adipisci nemo libero officia sunt, laboriosam doloribus optio earum accusantium?</p>
                </div>
            </section>
        </>
    );
}