import React from 'react';
import { BrowserRouter as Router, Route, Link, IndexRoute } from 'react-router-dom'
import update from 'immutability-helper'; //Manejo de arrays
import * as firebase from 'firebase';
import {IntlProvider, FormattedMessage} from 'react-intl';

import BarraNavegacion from './tienda/BarraNavegacion.jsx';
import Carrito from './tienda/Carrito.jsx';
import Tienda from './tienda/Tienda.jsx';
import Catalogo from './tienda/Catalogo.jsx';
import Producto from './tienda/Producto.jsx';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      catalogo: [],
      productos: [],
      listaCarrito : [],
    }
  }
  //============================================================================
  //                    Component Will Mount
  //----------------------------------------------------------------------------
  componentWillMount(){

  }
  //============================================================================
  //                    Render
  //----------------------------------------------------------------------------
  render(){
    return(
      <div className="tienda row">
        <div className="container">
          <Route exact path='/tienda/catalogo' activeClassName="active"  component={ Tienda }/>
          <Route exact path='/tienda/carrito'  activeClassName="active" component={ Carrito  }/>
          <Route path='/tienda/producto/:idProducto'  activeClassName="active" component={ Producto } />
        </div>
      </div>
    )
  }
    //=============================================================================
    //             Guardar Items en el carrito
    //--------------Actualizar Disponible------------------------------------------
    /*actualizarDisponible(item, cantidad, devolver:booleran = false){
      for (let productoLista of this.state.productos){
        if (productoLista.id == item.id){
          if(devolver == false){
            this.verificarCarrito(item, cantidad)
            productoLista.disponible = (Number(productoLista.disponible) - Number(cantidad))
          }
          else{
            productoLista.disponible = (Number(productoLista.disponible) + Number(cantidad))
          }
          this.setState({productos : this.state.productos})
          this.setState({listaCarrito : this.state.listaCarrito})
          this.contadorCarrito()
        }
      }
    }*/

    //-------------Verificar Carrito------------------------------------------------
    /*verificarCarrito(item, cantidad){
      if(this.guardarCarrito(item, cantidad) == false){                                //Verificar que el item enviado como parámetro no exista previamente en el arreglo de objetos de productos
        this.state.listaCarrito.push(item)                                             //Si no existe agregarlo al arreglo
      }
      sessionStorage.setItem("Carrito", JSON.stringify(this.state.listaCarrito));      //Actualizar la sesion Carrito con los nuevos valores del arreglo en formato string
    }
    //==============================================================================
    //                    Verificar items en carrito
    itemsCarrito(){
      if(sessionStorage.getItem("Carrito")){                                    //Verificar si la sesión del carrito contiene información
        //this.state.listaCarrito = JSON.parse(sessionStorage.getItem("Carrito")); //Actualizar la información del carrito con la sesión actual en formato JSON
        return JSON.parse(sessionStorage.getItem("Carrito"));                    //Devolver los items del carrito en formato JSON
      }
      return [];                                                                  //Devolver arreglo vacío si no existen carritos
    }*/
    //--------------------Contador de items en menu---------------------------------
    /*contadorCarrito(){
      return this.itemsCarrito().length                                         //Contar la cantidad de items en el carrito
    }*/
  }
  export default App;
