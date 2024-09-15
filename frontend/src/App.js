import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './components/shared/store/index'; 
import Login from './components/login';
import Home from './components/home';
 

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
