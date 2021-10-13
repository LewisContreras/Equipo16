import React from "react";

class Home extends React.Component{
    render(){
        return (
        <div>
            <h1>
            <title>Grupo 16 Log in page</title>    
    <table>
        <tr>
            <td>
                <form onsubmit="event.preventDefault();onFormSubmit();" autocomplete="off">
                    <div>
                        <label>Nombre Usuario*</label><label class="validation-error hide" id="fullNameValidationError">This field is required.</label>
                        <input type="text" name="fullName" id="fullName"/>
                    </div>
                    <div>
                        <label>ID Usuario</label>
                        <input type="text" name="empCode" id="empCode"/>
                    </div>
                    <div>
                        <label>Rol </label>
						

  <select name="Rol" id="Rol">
    <option value="Administrador">Administrador</option>
    <option value="Vendedor">Vendedor</option>


  </select>
           </div>     
           <div>
            <label>Estado </label>
            


<select name="city" id="city">
<option value="Autorizado">Autorizado</option>
<option value="No Autorizado">No Autorizado</option>
<option value="Pendiente">Pendiente</option>

</select>
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
                            <th>Nombre Usuario</th>
                            <th>ID Usuario</th>
                            <th>Rol</th>
                            <th>Activo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </td>
        </tr>
    </table>
    <script src="script.js"></script>
            </h1>
        </div>
        );
    }
}

export default Home;