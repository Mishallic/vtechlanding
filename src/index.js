import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';

//with the browser router and routes the project is ready to scale up
const App = () => {
    return(
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

