
import React from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';

import Article from './components/ArticleComponent'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import Themes from './components/ThemesComponent'

let status = [false,false,false,false,false,false,false,false,false];


function App(){
        
    function returnDataToApp(evt){
        status=evt;
        return evt;
    }
    
    return(
        
            <div>
                <Header />
                <Article curr={status}/>
                <Themes callBack={returnDataToApp}/>
                <Footer/>
            </div>
        );
}


export default App;
