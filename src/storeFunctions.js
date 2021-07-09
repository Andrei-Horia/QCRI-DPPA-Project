let text = "Secretary-General Welcomes Calls for Ceasefire, End to Hostilities in Libya[theme: country situation]The following statement was issued today by the Spokesman for UN Secretary-General António Guterres:The Secretary-General welcomes[sense of direction: positive] the calls for a ceasefire[theme: peace and security]and an end to hostilities [theme: peace and security, political processes]in Libya[theme: country situation], which were announced in separate statementstoday by Prime Minister Fayez al-Serraj and Speaker of the House of Representatives Aguila Saleh.The Secretary-General hopes[grade of action: other]the calls for a ceasefire[theme: peace and security] will be respected immediately[sense of urgency: strong]by armed forces from both sides and that its implementation will be taken up quickly[sense of urgency: strong]within the United Nations-facilitated 5+5 Joint Military Commission [grade of action: action advised]. He also welcomes[sense of direction: positive]the call foran end to the blockage of oil production  [grande action: action advised].The Secretary-General calls on all parties[grande of action: action advised]to engage constructivelyin an inclusive political process[theme: political development] based on the Berlin Conference outcomes and United Nations Security Council resolution2510(2020)."

function formDataStructure(text)
{
    let s = "";
    let labels = []
    let words = []
    for(let i=0;i<text.length;i++){
        if(text[i] === '['){
            
            words.push(s);
            s = ""

            while(text[i]!=']'){
                i++;
                s += text[i]
            }

            labels.push(s);
            s = "";

        }
        else{
            if(text[i] === " ")
                {
                    labels.append(s);
                    s = "";
                }
            else
                s += text[i];
        }
    }

    console.log(labe)

}

formDataStructure(text);