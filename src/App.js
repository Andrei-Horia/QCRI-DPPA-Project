import logo from './logo.svg';
import './App.css';


//DATA STRUCTURE
let data = {
        title: 'title',
        paragraphs: [
        {
            paragraph: "Global heating and unsustainable use will create unprecedented competition for water resources, leading to the displacement of millions of people [theme; peace and security]. This will negatively affect health and productivity, and act as a threat multiplier for instability and conflict.  The solution is clear.  We musturgently  [sense of direction; negative] scale up investments in healthy watersheds and water infrastructure, with dramatic improvements in the efficiency of water use.   We must anticipate and respond to climate risks at every level of water management.  We need to urgently [sense of direction; negative] step up efforts to strengthen resilience and adaptation for people affected by climate disruption [theme;  peace and security]. And above all, we must use this year and COP26 [twenty-sixth Conference of Parties to the United Nations Framework Convention on Climate Change] in Glasgow to bend the emissions curve and create a secure foundation for water sustainability.",
            annotations: [
                {
                    start: 0,
                    end: 14, 
                    color: "#FFF15E"
                },
                {
                    start: 15,
                    end: 258,
                    color: "#ED9726"
                },
                {
                    start: 314,
                    end: 457,
                    color: "#FFF15E"
                },
                {
                    start: 500,
                    end: 684,
                    color: "#FFF15E"
                },
                {
                    start: 797,
                    end: 959,
                    color: "#FD6262"
                }]
        },
        {
          paragraph: "The 8 November 2020 general elections provide a strong mandate to the National League for Democracy, reflecting the clear will of the people of Myanmar [theme; country situation] to continue on the hard-won path of democratic reform [theme; electoral development]. The Secretary-General urges [grade ofaction; action advised] the military leadership to respect the will of the people of Myanmar [theme;country situation].   and adhere to  democratic norms  [theme; electoral development], with anydifferences to be resolved through peaceful dialogue.  All leaders must act in the greater interest of Myanmar’s democratic reform, engaging in meaningful dialogue, refraining from violence and fully respecting  human rights and fundamental freedoms [theme; human rights].  The Secretary-General reaffirms [grade of action; action advised] the unwavering support of the United Nations to the people of Myanmar [theme; country situation] in their pursuit of democracy, peace, human rights and the rule of law. [theme; peace and security]",
          annotations: [
              {
                  start: 4,
                  end: 19, 
                  color: "#ED9726"
              },
              {
                  start: 20,
                  end: 65,
                  color: "#4FA1E8"
              },
              {
                  start: 70,
                  end: 85,
                  color: "#ED9726"
              },
              {
                  start: 198,
                  end: 325,
                  color: "#FFF15E"
              },
              {
                  start: 450,
                  end: 627,
                  color: "#4FA1E8"
              },
              {
                  start: 678,
                  end: 769,
                  color: "#FFF15E"
              },
              {
                  start: 852,
                  end: 1005,
                  color: "#FFF15E"
              }]

        }]
      }

function App() {
    let HTMLElements = []
    for(let i=0;i<data.paragraphs.length;i++)
    { 
        let storeCharacter = []
  
        //Create new array with two fields. 
        //One holds the character and the other one the color of the highlighting.
        for(let j=0;j<data.paragraphs[i].paragraph.length;j++)
            storeCharacter.push([data.paragraphs[i].paragraph[j],'white'])
        

        //Fill in with the interval color 
        for(let j=0;j<data.paragraphs[i].annotations.length;j++)
        {
            let START = data.paragraphs[i].annotations[j].start
            let END = data.paragraphs[i].annotations[j].end
            for(let l=START;l<END;l++)
                storeCharacter[l][1] = data.paragraphs[i].annotations[j].color
        }
        
        //Wrap every character in a span / Create an array of JSX Elements 
        let elem = []
        for(let j=0;j<storeCharacter.length;j++){
            let character = storeCharacter[j][0]
            let color = storeCharacter[j][1]
            elem.push(<span style={{backgroundColor:color}}>{character}</span>)
        
        }

        //Push and store this array of JSX elements in as a new html element 
        HTMLElements.push(elem)
    }

    console.log(HTMLElements)

    //Separate each paragraph
    HTMLElements = HTMLElements.map(word => 
          <div><div className='paragraph'>{word}</div><br></br></div>)
    
    //Return everything
    return (<div>
                <h1 className = 'title'> Title: "This is a new title" </h1>
                {HTMLElements}
            </div>)
}
export default App;
