import React from 'react';
import '../App.css';

import { rawData } from '../storeData'

let colorDict = {
    '#ff471a': 0,
    '#ffff1a': 1,
    '#79ff4d': 2,
    '#cce6ff': 3,
    '#66b3ff': 4,
    '#1a8cff': 5,
    '#f0b3ff': 6,
    '#e066ff': 7,
    '#d11aff': 8
};


let currentThemes = {}
let currentLocations = {}

function convertData(rawData){

    let result = []    

    //Loop through all the paragraphs
    for(let i=0;i<rawData.sentence_propaganda.length;i++)
    {
        let currentParagraph = {}
        let fixedStart = 0
        let start = 0
        let end = 0
        let text = ""
        let first = true


        currentParagraph.annotations = []

        //Loop through all the words
        for(let j=0;j<rawData.sentence_propaganda[i].tokens.length;j++)
        {
            //Store text
            text += rawData.sentence_propaganda[i].tokens[j] + " "   
            end += rawData.sentence_propaganda[i].tokens[j].length
            
            //Remeber starting point (sicne we could have multiple consecutive words with the same color)
            if(rawData.sentence_propaganda[i].tags[j] !== "O")
                if(first)
                {
                    first = false
                    fixedStart = start
                }
            
            //Store 
            if(rawData.sentence_propaganda[i].tags[j] !== "O")    
                if(j === rawData.sentence_propaganda[i].tokens.length || 
                    rawData.sentence_propaganda[i].tags[j] !== rawData.sentence_propaganda[i].tags[j+1])
                {
                    let annotations = {}
                    annotations.start = fixedStart
                    annotations.end = end
                    annotations.color = rawData.sentence_propaganda[i].tags[j]
                    currentParagraph.annotations.push(annotations)
                    first = true
                }
            
        
            if(rawData.sentence_propaganda[i].tags[j].includes('theme'))
                currentThemes[rawData.sentence_propaganda[i].tags[j].slice(7, rawData.sentence_propaganda[i].tags[j].length)] = false;                  
            else
                if(rawData.sentence_propaganda[i].tags[j].includes('location'))
                    currentLocations[rawData.sentence_propaganda[i].tags[j].slice(10, rawData.sentence_propaganda[i].tags[j].length)] = false;        
                 
            start = end + 1
            end++
        }
        
        //Store paragraph and push to result
        currentParagraph.paragraph = text
        result.push(currentParagraph)
    }

    let data = {}
    data.title = rawData.key
    data.paragraphs = result

    return data

}

let data = convertData(rawData)

export {currentThemes};
export {currentLocations};

class Article extends React.Component{
    
    constructor(props){
        super()

        this.state = {
            hideTextState: false
        }

        this.hideText = this.hideText.bind(this);
    }
    
    buildArticle(){
        let HTMLElements = []
        for(let i=0;i<data.paragraphs.length;i++)
        {
            let paragraphElements = []
            let startingPoint = 0
            let stoppingPoint
            let current

            for(let j=0;j<data.paragraphs[i].annotations.length;j++)
            {
                stoppingPoint = data.paragraphs[i].annotations[j].start
                let end = data.paragraphs[i].annotations[j].end
                let color = data.paragraphs[i].annotations[j].color

                current = data.paragraphs[i].paragraph.slice(startingPoint, stoppingPoint)
                paragraphElements.push(<span>{current}</span>)

                current = data.paragraphs[i].paragraph.slice(stoppingPoint, end)
                
                if(color.includes('theme'))
                {
                    if(this.props.currThemes[color.slice(7,color.lenght)])
                        paragraphElements.push(<span className="highlight" style={{backgroundColor:"#ffff80"}}>{current}</span>)
                    else
                        paragraphElements.push(<span>{current}</span>)
                }
                else
                    if(color.includes('location'))
                    {
                        if(this.props.currLocations[color.slice(10,color.lenght)])
                            paragraphElements.push(<span className="highlight" style={{backgroundColor:"#99ffff"}}>{current}</span>)
                        else
                            paragraphElements.push(<span>{current}</span>)
                    }
                    else
                        if(this.props.curr[colorDict[color]] === true)
                            paragraphElements.push(<span className="highlight" style={{backgroundColor:color}}>{current}</span>)
                        else
                            paragraphElements.push(<span>{current}</span>)

                startingPoint = end
            }
            
            stoppingPoint = data.paragraphs[i].paragraph.length
            current = data.paragraphs[i].paragraph.slice(startingPoint, stoppingPoint)
            
            paragraphElements.push(<span>{current}</span>)
            
            HTMLElements.push(paragraphElements)

        }
        
        HTMLElements = HTMLElements.map(word => 
            <div><div className='paragraph'>{word}</div><br></br></div>)

        return HTMLElements;

    }

    hideText(){
        this.setState({hideTextState: !this.state.hideTextState});
    }

    render(){
        
        let HTMLText;
        if(!this.state.hideTextState)
            HTMLText = this.buildArticle();
        else
            HTMLText = (<div>Text Hidden</div>);

        let symbol = "?"
        
        if(this.state.hideTextState)
            symbol = "X"
        
        return (
        <div class="note">
            <div class='article-content'>
                <button class="article-help" onClick={this.hideText}>{symbol}</button>
                {HTMLText}
            </div>

            <div class='article-search'> 
                <h1 class='article-source'> SOURCE </h1>

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                
                <form class="article-search-forms" action="action_page.php">
                    <input class="article-search-bar" type="text" placeholder="Search.." name="search"></input>
                    <button type="submit"><i class="fa fa-search"></i></button>

                </form>    
            </div>
        </div>)
    }
}

export default Article;