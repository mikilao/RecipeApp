import React from 'react';
import '../App.css';
import Apricot from '../Pages/Apricot.jpg';

function Home(){
    return(
        //add search tags like chicken / beef/ shrimp to jumbotron
        <div class="container"> 
            <img className='mainPic' src={Apricot}/>
            <h2 class="title">Welcome to the Page</h2>
            <p>Bacon ipsum dolor amet jowl tenderloin rump bacon venison, pork chop burgdoggen pork belly prosciutto ham. Ribeye prosciutto pork belly tongue short ribs. Short loin tenderloin bresaola, ground round short ribs fatback biltong venison ball tip bacon chislic shoulder prosciutto shankle corned beef. Sirloin capicola frankfurter, flank burgdoggen tongue meatball bresaola pork. Pork cupim chicken drumstick, filet mignon ham hock flank chislic spare ribs kielbasa alcatra.</p>
 
            </div>
    )
}

export default Home