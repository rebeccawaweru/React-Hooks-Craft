// import UseEffect from './Hooks/useEffect/useEffect';
import CleanupuseEffect from './Hooks/useEffect/cleanupuseEffect';
import OnceuseEffect from './Hooks/useEffect/onceuseEffect';
function App() {
  return (
  <CleanupuseEffect/>
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

