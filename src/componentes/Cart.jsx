import {Context}  from './CartContext';
import { useState, useContext, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom' ;
import { Button } from 'react-bootstrap';
import firebase from 'firebase';
import { getFirestore } from '../firebase/firebase';
import { Fade } from "react-awesome-reveal";
import BuyMessage from "./BuyMessage";

const Cart = () => {

    const {carrito, setCarrito,  borrarCarrito, borrarUno, calcularTotal} = useContext (Context) ;

    const [total, setTotal] = useState () ;
    const [ordenRealizada, setOrdenRealizada] = useState () ;

    const mail = useRef() ;
    const nombre = useRef();
    const telefono = useRef() ;

    const capturarDatos = () => {

        const db = getFirestore() ;
        const ordenes = db.collection("ordenes")

        if (nombre.current.value, mail.current.value,telefono.current.value !== "") {
 
        const orden = { 
            datosCliente:{
            nombre: nombre.current.value,
            mail: mail.current.value, 
            telefono: telefono.current.value}, 
            datosProducto: { carrito: carrito },
            total: total,
            fecha: firebase.firestore.Timestamp.fromDate(new Date())
        }

        ordenes.add(orden)
       
        .then (({id}) => {
            setOrdenRealizada (id) ;
            setCarrito ([]) ;
        })
        .catch((err) => {
            console.warn(err);
        })
    } else { alert ("ingrese todos los campos obligatorios")}
}
    
    useEffect(()=> {
        setTotal (calcularTotal())
    },[borrarUno], [])
    
    {   if (ordenRealizada != undefined) {
      
             return (
                <Fade>
                  <BuyMessage ordenRealizada={ordenRealizada} />
                </Fade>
            
    )}  else  if (carrito.length !== 0) {
            return (
            <>
            <div className="p-3 w-50 m-auto text-center h4"> Carrito de Compras </div>
            {carrito.map(items => {
            return ( 
            <>
            <div className="w-50 m-auto text-center">
            <img width="50" heigth="30" src={items.item.url}></img>    
            <b>Producto: </b>{items.item.nombre} - <b>Cantidad: </b>{items.cantidad}
            <b> Precio: $</b>{items.item.precio * items.cantidad}
            <Button className="bg-dark btn-sm" onClick={ () => borrarUno(items.item.id)}>X</Button>
            </div>
            </>)
})}  
        <div className="w-50 m-auto text-center" >
        <b onClick={borrarCarrito}>Vaciar Carrito</b>
        <p></p>
        <b className="h5">Total Productos: $</b>{total}
        <p/>
        <input type="text" name="nombre" ref={nombre}  placeholder="Ingrese su nombre" required/>
        <p/>
        <p/>
        <input type="text" name="mail" ref={mail} placeholder="ingreso su e-mail" />
        <p/>
        <p/>
        <input type="text" name="telefono" ref={telefono} placeholder="ingrese su telefono" />
        <p/>
        <Button  onClick={capturarDatos}>Terminar mi compra</Button>
        </div>
        </>

    ) } else { return <div className="p-2 w-50 m-auto text-center">No hay productos ingresados, puede volver al home haciendo click <Link to="/">Aqui</Link></div> }}
}


export default Cart ;