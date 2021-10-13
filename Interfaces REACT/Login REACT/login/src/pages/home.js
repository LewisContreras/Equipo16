import React from "react";

class Home extends React.Component {
    render(){ 
        return(
            
            <div class="login">  
            <title>login</title>
            <h2>Grupo 16</h2><br/>    
            <form id="login" method="get" action="login.php"></form>    
                <label><b>User Name     
                </b>    
                </label>    
                <input type="text" name="Uname" id="Uname" placeholder="Usuario"/>    
                <br/><br/>    
                <label><b>Password     
                </b>    
                </label>    
                <input type="Password" name="Pass" id="Pass" placeholder="Password"/>   
                <br/><br/>    
                <input type="button" name="log" id="log" value="Log in"/>       
                <br/><br/> 
                <input type="button" name="logG" id="Correo" value="Continuar con Gmail"/>       
                <br/><br/>   
                <input type="checkbox" id="check"/>    
                <span>Recuerdame</span>    
                <br/><br/>    
                
            <form/>     
        </div>
        )
    }
}

export default Home;