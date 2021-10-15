import React from "react";

class Home extends React.Component{
    render(){
        return (
            <div class="productos">  
<h1>
       
<title>Interfaz productos</title>    
    <table>
        <tr>
            <td>
                <form onsubmit="event.preventDefault();onFormSubmit();" autocomplete="off">
                    <div>
                        <label>ID producto*</label><label class="validation-error hide" id="fullNameValidationError">This field is required.</label>
                        <input type="text" name="fullName" id="fullName"/>
                    </div>
                    <div>
                        <label>Descripcion</label>
                        <input type="text" name="empCode" id="empCode"/>
                    </div>
                    <div>
                        <label for="Rol">Estado</label>
                        <input type="text" name="salary" id="salary"/>
                    </div>
                    <div>
                        <label>Valor </label>
                        <input type="text" name="city" id="city"/>
                    </div> 
                    <div  class="form-action-buttons">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </td>
            <td>
                <table class="list" id="employeeList">
                    <thead>
                        <tr>
                            <th>ID producto</th>
                            <th>Descripcion</th>
                            <th>Estado</th>
                            <th>valor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </td>
        </tr>
    </table>

    </h1>
    </div>
        );
    }
}

export default Home;