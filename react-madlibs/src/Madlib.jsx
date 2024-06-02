import React, { useState } from "react";
import MadlibForm from "./MadlibForm";
import Story from "./Story";

const Madlib = () => {
    const [displayStory, setDisplayStory] = useState(false);
    const [ansArr, setAnsArr] = useState([]);

    const createMadlib = (newMadlib) => {
        setAnsArr([newMadlib]);
        setDisplayStory(true);
    };

    const toggleDisplay = () => {
        setDisplayStory(!displayStory);
    };

    return (
        <div className="Madlib">
            {displayStory ? (
                ansArr.map((ans) => (
                    <Story
                        key={ans.id}
                        adj1={ans.formData.adj1}
                        adj2={ans.formData.adj2}
                        adj3={ans.formData.adj3}
                        noun1={ans.formData.noun1}
                        noun2={ans.formData.noun2}
                        verb1={ans.formData.verb1}
                        verb2={ans.formData.verb2}
                        exclamation={ans.formData.exclamation}
                    />
                ))
            ) : (
                <MadlibForm createMadlib={createMadlib} />
            )}
            {displayStory && (
                <button onClick={toggleDisplay}>Create Another Story</button>
            )}
        </div>
    );
};

export default Madlib;
