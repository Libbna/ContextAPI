import React, { createContext, useState } from 'react';

const JetContext = createContext();

const JetProvider = (props) => {

    const [Jets, setJets] = useState([]);

    return (
        <JetContext.Provider value={[Jets, setJets]}>
            {props.children}
        </JetContext.Provider>
    );
}


export { JetContext, JetProvider };