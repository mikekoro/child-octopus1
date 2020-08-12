import React, {  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const App = (props) => {
  
  const app = useSelector(
    state => state.app
  );
  const dispatch = useDispatch();

  const toggleRedux = () => {
    dispatch( props.methods.toggleDarkMode() );
  }

  return (
    <div style={{border:'1px solid red'}}>
      <h3>Front end 1</h3>
      <div>Some redux property: {app.dark_mode.toString()}</div>
      <button onClick={toggleRedux}>CHANGE REDUX FROM MICROFRONTEND1</button><br/>
      <Link to={'/createreactapp/subpage'}>Go to another page</Link>
    </div>
  )
}

export default App;
