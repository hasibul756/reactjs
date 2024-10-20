import { useState, useEffect } from 'react';
import { faqData } from './faqApi';
import Faq from './Faq';

const Accordion = () => {
    const [data, setData] = useState([]);
    const [activeId, setActiveID] = useState(null); // null is more semantically correct than `false` for id

    useEffect(() => {
        setData(faqData);
    }, []);

    const handleButton = (id) => {
        // Toggle the active ID
        setActiveID((prevId) => (prevId === id ? null : id));
    };

    return (
        <>
            <h1>The Accordion</h1>
            <ul className="section-accordion">
                {data.length > 0 ? (
                    data.map((currElem) => (
                        <Faq
                            key={currElem.id}
                            currData={currElem}
                            isActive={activeId === currElem.id}
                            onToggle={() => handleButton(currElem.id)}
                        />
                    ))
                ) : (
                    <p>No Data</p>
                )}
            </ul>
        </>
    );
};

export default Accordion;