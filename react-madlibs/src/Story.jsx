import React from "react";

const Story = ({
    adj1,
    adj2,
    adj3,
    noun1,
    noun2,
    verb1,
    verb2,
    exclamation}) => {
        return(
            <div className="story">
                <p>Today I saw a {adj1} {noun1}, it was a truly {adj2} sight. Right after I saw that, I thought to myself "{exclamation}, what a {adj3} day to see that. Then, naturally, I started {verb1} until the {noun2} stopped {verb2}.</p>
                <br />
                <h2>THE END</h2>
            </div>
        )
}

export default Story