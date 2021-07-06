
import './components.css'
import CheckBox from './checkBox'
import Button from './buttonComponent'



function Themes(props){

    function grabData(evt){
        props.callBack(evt);
    }

    function grabButton(evt){
        if(evt[2] === "themes")
            {
                props.currentThemes[evt[0]] = evt[1];
                props.callBackButton([props.currentThemes,"themes"]);
            }
        else
            {
                props.currentLocations[evt[0]] = evt[1];
                props.callBackButton([props.currentLocations,"locations"]);
            }
    }

    function generateThemes(themes){
        let result = []
        for(const [key,value] of Object.entries(themes)){
            result.push(<Button txt={key} color="#ffff80" status={value} callBack={grabButton} name="themes"/>)
        }
    
        result = result.map(element =>
            <span class="themes-button">{element}</span>);
        
        return result;
    }
    
    function generateLocations(locations){
        let result = []
        for(const [key,value] of Object.entries(locations)){
            result.push(<Button txt={key} color="#99ffff" status={value} callBack={grabButton} name="locations"/>)
        }
    
        result = result.map(element =>
            <span class="themes-button">{element}</span>);
        
        return result;
    }

    return(
        <div class='themes-section'>
            <div style={{marginBottom: "7%"}}>
                <h1 class="themes-header" style={{marginLeft: "20%"}}>THEMES</h1>
                <div style={{marginLeft: "-5%"}}>
                    {generateThemes(props.currentThemes)}
                </div>
            </div>


            <div style={{marginBottom: "7%"}}>
                <h1 class="themes-header" style={{marginLeft: "17%"}}>LOCATION</h1>
                <div style={{marginLeft: "-5%"}}>
                     {generateLocations(props.currentLocations)}
                </div>
            </div>

            <div class='themes-sense-of-direction'>
                <h1 class='themes-header'> SENSE OF DIRECTION </h1>
                <div class='wrap-text' style={{marginBottom: "10%", marginRight: "30%"}}>
                    
                    <div name="blue"> 
                        <CheckBox id="0" callBack={grabData} txt='Negative' margin='-45%'/>
                    </div>
                    <div name="red"> 
                        <CheckBox id="1" callBack={grabData} txt='Neutral'  margin='-35%'/>
                    </div>
                    <div name="green"> 
                        <CheckBox id="2" callBack={grabData} txt='Positive'  margin='-35%'/>
                    </div>

                </div>
            </div>

            <div class='themes-sense-of-direction'>
                <h1 class='themes-header'> SENSE OF URGENCY </h1>
                <div class='wrap-text' style={{marginBottom: "10%", marginRight: "30%"}}>
                    
                    <div name="blue"> 
                        <CheckBox id="3" callBack={grabData} txt='Neutral'  margin='-35%'/>
                    </div>
                    <div name="red"> 
                        <CheckBox id="4" callBack={grabData} txt='Medium'  margin='-40%'/>
                    </div>
                    <div name="green"> 
                        <CheckBox id="5" callBack={grabData} txt='Strong'  margin='-30%'/>
                    </div>

                </div>
            </div>

            <div class='themes-sense-of-direction'>
                <h1 class='themes-header'> GRADE OF ACTION </h1>
                <div class='wrap-text' style={{marginBottom: "10%", marginRight: "30%"}}>
                    
                    <div name="blue"> 
                        <CheckBox id="6" callBack={grabData} txt='Other' margin='-25%'/>
                    </div>
                    <div name="red"> 
                        <CheckBox id="7" callBack={grabData} txt='Action Advised'  margin='-90%'/>
                    </div>
                    <div name="green"> 
                        <CheckBox id="8" callBack={grabData} txt='Action Taken'  margin='-80%'/>
                    </div>

                </div>
            </div>

        <button class="themes-clear" >Clear</button>
        </div>
    )   
}


export default Themes;
