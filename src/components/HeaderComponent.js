import './components.css'


function Header(){
    return(
        <header>
            <div class='wrap-text'>
                <h1 class='header-writing'>Diplomatic Pulse</h1>
                
                <div class='plus'><svg xmlns="http://www.w3.org/2000/svg" width="33%" height="50" fill="#4dd2ff" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                </svg></div>

                <img class='header-image' src="https://i.pinimg.com/originals/dc/69/2c/dc692c93b9d645568f7b2585b03ec837.jpg"></img>

                <hr class="solid"></hr>
                <h1 class='smaller-header-writing'> ADVANCED READING TOOL</h1>
                <hr class="solid"></hr>  
            </div>     
        </header>
    )
}

export default Header;