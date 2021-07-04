import '../App.css';

import { rawData } from '../storeData'

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

let colorDict = {
    'red': 0,
    'blue': 1,
    'green': 2,
    'pink': 3,
    'purple': 4,
    'white': 5,
    'gray': 6,
    'black': 7,
    'darkgreen':8
};


function Article(props){
    
    console.log(props);
    let currentStatus = props.curr;
    

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
                   
            if(currentStatus[colorDict[color]] === true)
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


        return (
        
        <div class="note">
            <div class='article-content'>
                {HTMLElements}
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
export default Article;
