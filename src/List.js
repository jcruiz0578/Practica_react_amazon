import React from 'react';
import Item from "./Item";

function List(props) {
    return(
       <div className="list">
           {
               //map() regresa un arreglo con lo que le coloquen de la funcion
               props.items.map(item =>
                   <Item
                       key={item.id} // el key hay que colocarlo por concepto de react por iteración para identificar
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       rating={item.rating}

                       onremove ={props.onremove}/>  // Paso el props al componente Item


               )
           }
       </div>
    );
}

export default List;
