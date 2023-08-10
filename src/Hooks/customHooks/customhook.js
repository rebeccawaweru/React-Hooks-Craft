//A custom Hook basically a javascript function whose name starts with 'use'
//can also call other Hooks if required
//why? share logic,,alternative to HOC or render props
import {useEffect} from 'react';
function useDocumentTitle(count) {
    useEffect(()=>{
        document.title = `Clicked ${count} times`
    },[count])
}

export default useDocumentTitle;