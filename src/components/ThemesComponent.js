
import './components.css'
import CheckBox from './checkBox'

function Themes(props){

    function grabData(evt){
        props.callBack(evt);
    }

    return(
        <div class='themes-section'>
            <div class='themes-sense-of-direction'>
                <h1 class='themes-header'> SENSE OF DIRECTION </h1>
                <div class='wrap-text' style={{marginBottom: "10%", marginRight: "30%"}}>
                    
                    <div name="blue"> 
                        <CheckBox id="0" callBack={grabData}/>
                    </div>
                    <div name="red"> 
                        <CheckBox id="1" callBack={grabData}/>
                    </div>
                    <div name="green"> 
                        <CheckBox id="2" callBack={grabData}/>
                    </div>

                </div>
            </div>

            <div class='themes-sense-of-direction'>
                <h1 class='themes-header'> SENSE OF URGENCY </h1>
                <div class='wrap-text' style={{marginBottom: "10%", marginRight: "30%"}}>
                    
                    <div name="blue"> 
                        <CheckBox id="3" callBack={grabData}/>
                    </div>
                    <div name="red"> 
                        <CheckBox id="4" callBack={grabData}/>
                    </div>
                    <div name="green"> 
                        <CheckBox id="5" callBack={grabData}/>
                    </div>

                </div>
            </div>

            <div class='themes-sense-of-direction'>
                <h1 class='themes-header'> GRADE OF ACTION </h1>
                <div class='wrap-text' style={{marginBottom: "10%", marginRight: "30%"}}>
                    
                    <div name="blue"> 
                        <CheckBox id="6" callBack={grabData}/>
                    </div>
                    <div name="red"> 
                        <CheckBox id="7" callBack={grabData}/>
                    </div>
                    <div name="green"> 
                        <CheckBox id="8" callBack={grabData}/>
                    </div>

                </div>
            </div>

        </div>
    )   
}


export default Themes;
