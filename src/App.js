
import './App.css';
import "./storeFunctions"
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
            help: false
        };

        this.callBackHelp = this.callBackHelp.bind(this);
        this.returnDataToApp = this.returnDataToApp.bind(this);
        this.callBackButton = this.callBackButton.bind(this);
        this.callBackClear = this.callBackClear.bind(this);
    }
    
    callBackClear(evt){
        this.setState({currThemes: evt[0]})
        this.setState({currLocations: evt[1]})
        this.setState({curr: evt[2]})
    }

    callBackButton(evt){
        if(evt[1] == "themes")
            this.setState({currThemes: evt[0]})
        else
            this.setState({currLocations: evt[0]})
    }

    returnDataToApp(evt){
        this.setState({curr: evt});    
        return evt;
    }
    
    callBackHelp(evt){
        this.setState({help: evt});
    }

    render(){
        return(
            
                <div>
                    <Header />
                    <Article 
                        curr={this.state.curr} 
                        currThemes={this.state.currThemes} 
                        currLocations={this.state.currLocations}
                        callBackHelp = {this.callBackHelp}
                    />
                    
                    <Themes 
                        callBack={this.returnDataToApp} 
                        callBackButton={this.callBackButton} 
                        callBackClear = {this.callBackClear}
                        currentThemes={currentThemes} 
                        currentLocations={currentLocations}
                        help={this.state.help}
                    />
                    <Footer/>
                </div>
            )
    }
}


export default App;
