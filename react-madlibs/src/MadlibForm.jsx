import React, {useState} from "react";
import {v4 as uuid} from "uuid"

const MadlibForm = ({createMadlib}) => {
    const INITIAL_STATE = {
        adj1: "",
        adj2: "",
        adj3: "",
        noun1: "",
        noun2: "",
        verb1: "",
        verb2: "",
        exclamation: "",
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const inputData = (e) => {
        e.preventDefault();
        createMadlib({formData, id: uuid()})
        setFormData(INITIAL_STATE);
    }

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]:value
        }));
    }

    return(
        <div className="form">
            <form onSubmit={inputData}>
                <div>
                    <label htmlFor="adj1">Adjective 1</label>
                    <input
                        type="text"
                        name="adj1"
                        value={formData.adj1}
                        id="adj1"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="adj2">Adjective 2</label>
                    <input
                        type="text"
                        name="adj2"
                        value={formData.adj2}
                        id="adj2"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="adj3">Adjective 3</label>
                    <input
                        type="text"
                        name="adj3"
                        value={formData.adj3}
                        id="adj3"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="noun1">Noun 1</label>
                    <input
                        type="text"
                        name="noun1"
                        value={formData.noun1}
                        id="noun1"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="noun2">Noun 2</label>
                    <input
                        type="text"
                        name="noun2"
                        value={formData.noun2}
                        id="noun2"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="verb1">Verb 1 ending in -ing</label>
                    <input
                        type="text"
                        name="verb1"
                        value={formData.verb1}
                        id="verb1"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="verb2">Verb 2 ending in -ing</label>
                    <input
                        type="text"
                        name="verb2"
                        value={formData.verb2}
                        id="verb2"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="exclamation">Exclamation!</label>
                    <input
                        type="text"
                        name="exclamation"
                        value={formData.exclamation}
                        id="exclamation"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Create Story</button>
            </form>
        </div>
    )
}

export default MadlibForm