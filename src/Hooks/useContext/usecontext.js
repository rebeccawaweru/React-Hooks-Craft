//Context provides a way to pass data through the component tree without having to pass props down manually at entry level
//solves the issue of prop drilling
import React from 'react';
import Component from '../../Components/component';

export const UserContext = React.createContext()
export const ChanelContext = React.createContext()
function Usecontext() {
    return (
        <div>
            <UserContext.Provider value={'Becca'}>
                <ChanelContext.Provider value={'Codevolution'}>
                <Component/>
                </ChanelContext.Provider>
            </UserContext.Provider>
        </div>
    );
}

export default Usecontext;

//use it in my dashboards for checking Auth 
//use it in my sidebars/topbar

