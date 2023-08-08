import React, {useContext} from 'react';
import { UserContext, ChanelContext } from '../Hooks/useContext/usecontext';
function Component2() {
    const user = useContext(UserContext);
    const channel = useContext(ChanelContext)
    return (
    <div>
        {/* useContext from react */}
        {user} {channel}

        {/* normal context */}
        {/* <UserContext.Consumer>
           {
             user => {
                return (
                    <ChanelContext.Consumer>
                        {
                            channel => {
                                return <div>{user} {channel}</div>
                            }
                        }
                    </ChanelContext.Consumer>
                )
             }
           } 
        </UserContext.Consumer>  */}
    </div>
    );
}

export default Component2;

//useContext from react helps consume context values more easily. Simplifies context consumptions