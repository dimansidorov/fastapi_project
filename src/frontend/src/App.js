import React from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './components/Index';
import About from './components/About';
import LoginForm from './components/Auth'
import SignUpForm from './components/Registration'

import stack from './components/helpers/stack'
import contacts from './components/helpers/contacts'
import creator from './components/helpers/creator'
import me from './images/me.jpg';



import './styles.css';



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }




    render() {
    return (
        <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<MainPage stack={stack}/>} />
                    <Route path='/about' element={<About contacts={contacts} photo={me} creator={creator}/>} />
                    <Route path='/login' element={<LoginForm getToken={(username, password) => this.getToken(username, password)} />} />
                    <Route path='/register' element={<SignUpForm />} />
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
    }

}

export default App;
