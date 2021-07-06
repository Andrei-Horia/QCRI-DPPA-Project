
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Article from './components/ArticleComponent'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import Themes from './components/ThemesComponent'

import {currentThemes} from './components/ArticleComponent'
import {currentLocations} from './components/ArticleComponent'

let status = [false,false,false,false,false,false,false,false,false];

class App extends React.Component{
    
    constructor(props) {
        super();
        this.state = {
            curr: status,
            currThemes: currentThemes,
            currLocations: currentLocations,
        };
        this.returnDataToApp = this.returnDataToApp.bind(this);
        this.callBackButton = this.callBackButton.bind(this);
    }
    
    callBackButton(evt){
        if(evt[1] == "themes")
            this.setState({currThemes: evt[0]})
        else
            this.setState({currentLocations: evt[0]})
    }

    returnDataToApp(evt){
        status=evt;
        this.setState({curr: evt});    
        return evt;
    }
    

    render(){    

        return(
            
                <div>
                    <Header />
                    <Article curr={this.state.curr} currThemes={this.state.currThemes} currLocations={this.state.currLocations}/>
                    <Themes callBack={this.returnDataToApp} callBackButton={this.callBackButton} currentThemes={currentThemes} currentLocations={currentLocations}/>
                    <Footer/>
                </div>
            )
    }
}


export default App;
