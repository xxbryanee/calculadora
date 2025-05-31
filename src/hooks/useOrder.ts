
import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";



export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]); //118 (4)
  
    const addItem = (item : MenuItem) => { //115 (1) (3)
        const itemExists = order.find(orderItem => orderItem.id === item.id);//117
         // Si el item ya existe, actualizamos la cantidad
            if(itemExists){     //117 (2)
                const updatedOrder = order.map(orderItem => orderItem.id === item.id? //117 
                     {...orderItem, quantity: orderItem.quantity + 1} : orderItem   //117
                )
                setOrder(updatedOrder);
            }else{
                // Si el item no existe, lo agregamos al pedido
                const newItem = {...item, quantity:1}; //116 (1) (2) (3), 117 (2)
                setOrder([...order, newItem])
            }

       
        
    };
    
    return { 
        order, //118 (5)
        addItem
    };
 
}