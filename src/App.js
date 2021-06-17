import logo from './logo.svg';
import './App.css';

import { rawData } from './storeData'

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

function App(){
    
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
            paragraphElements.push(<span className="highlight" style={{backgroundColor:color}}>{current}</span>)
        
            startingPoint = end
        }
        
        stoppingPoint = data.paragraphs[i].paragraph.length
        current = data.paragraphs[i].paragraph.slice(startingPoint, stoppingPoint)
        
        paragraphElements.push(<span>{current}</span>)
        
        HTMLElements.push(paragraphElements)

    }

    
    HTMLElements = HTMLElements.map(word => 
        <div><div className='paragraph'>{word}</div><br></br></div>)


        return (<div>
            <h1 className = "title"> {data.title} </h1>
            {HTMLElements}
        </div>)
}
export default App;
