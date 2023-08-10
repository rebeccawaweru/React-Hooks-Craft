// import Fetch from './Hooks/useEffect/fetch';
// import Usecontext from './Hooks/useContext/usecontext';
// import './App.css'
// import Usereducer from './Hooks/useReducer/usereducer';
// import Usereducer2 from './Hooks/useReducer/usereducer2';
// import Usereducer3 from './Hooks/useReducer/usereducer3';
// import Fetchreducer from './Hooks/useReducer/fetchreducer';
// import Usereducercontext from './Hooks/useContext/usereducercontext';
// import Usecallback from './Hooks/useCallback/usecallback';
// import Usememo from './Hooks/useMemo/usememo';
// // import Useref from './Hooks/useRef/useref';
// import ClassTimer from './Hooks/useRef/classtimer';
import Doctitle from './Hooks/customHooks/doctitle';
import UserForm from './Hooks/customHooks/form';
function App() {
  return (
    <div>
    <UserForm/>
    </div>

  );
}

export default App;

//hooks allow us to use react features without having to write a class
//hooks don't work inside classes
//classes don't minify very well and make hot reloading very unreliable
//HOC and render props patterns 
//hooks help reuse stateful logic
//hooks are in react version 16.8 or higher
//hooks help organize the logic inside a component into reusable isolated units
//usedebug, uselayout, use imperative handle - hooks

