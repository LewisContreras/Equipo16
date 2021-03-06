import React from "react";

class Home extends React.Component{
    render(){
        return (
        <div>
            <h1>
            <title>Grupo 16 Ventas</title>    
    <table>
        <tr>
            <td>
                <form onsubmit="event.preventDefault();onFormSubmit();" autocomplete="off">
                    <div>
                        <label>Identificador de la Venta</label>
						
                     <input type="text" name="idventa" id="idventa"/>
                    
					<label class="validation-error hide" id="fullNameValidationError">ID de la venta es obligatorio.</label>
					</div>
                    <div>
                        <label>Documento del Cliente</label>
                        <input type="text" name="empCode" id="empCode"/>
                    </div>
                    <div>
                        <label>Nombre del Cliente</label>
                        <input type="text" name="Ncliente" id="Ncliente"/>
                    </div>
					
					<label>Nombre del producto</label>    
   
	   
		   <input type="text" list="items" name="Dproducto" id="Dproducto" />

  <datalist id="items">
    <option value="Disco duro SATA">Disco duro SATA</option>
    <option value="Monitor HD">Monitor HD</option>
    <option value="Memoria USB">Memoria USB</option>
  </datalist>
					
                
					
					          <div>
                        <label>Valor unitario </label>
                        <input type="text" name="valorU" id="valorU"/>
                    </div> 
					<div>
                        <label>Cantidad </label>
                        <input type="text" name="cantidad" id="cantidad"/>
                    </div> 
					
										<div>
                        <label>Total producto </label>
                        <input type="text" name="total" id="total"/>
                    </div> 
					
													<div>
                        <label>Vendedor </label>
						
								   <input type="text" list="vend" name="vendedor" id="vendedor" />

  <datalist id="vend">
    <option value="Charles Holgu??n">Charles Holgu??n</option>
    <option value="Daniela Villada">Daniela Villada</option>
    <option value="Andres Rodriguez">Andres Rodriguez</option>
	<option value="Nicolas Romero"> Nicolas Romero</option>
	<option value="Lewis Contreras">Lewis Contreras</option>
  </datalist>
           </div>     
		   
												<div>
                        <label>Estado </label>
						
								   <input type="text" list="est" name="estado" id="estado" />

  <datalist id="est">
    <option value="Pago Pendiente">Pago Pendiente</option>
    <option value="Pago Cancelado">Pago Cancelado</option>


  </datalist>
           </div>     
		








	<div/>
                    <div  class="form-action-buttons">
                        <input type="submit" value="Guardar"/>
                    </div>
					
					
					
                </form>
            </td>
            <td>
                <table class="list" id="employeeList">
                    <thead>
                        <tr>
                            <th>Id de la venta</th>
                            <th>Id del cliente </th>
                            <th>Nombre del cliente</th>
                            <th>Descripci??n</th>
							<th>Valor Unitario</th>
							<th>Cantidad</th>
							<th>Total</th>
							<th>Vendedor</th>
							<th>Estado</th>
							<th>Acciones</th>
							
							
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </td>
        </tr>
    </table>
    <script src="script_ventas.js"></script>

            </h1>
        </div>
        );
    }
}

export default Home;