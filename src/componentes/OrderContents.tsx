import type { OrderItem } from "../types";

{/*118 (6)*/}
type OrderContentsProps = {  
    order: OrderItem[]
    // Aquí puedes definir las propiedades que necesites
}

export default function OrderContents({ order }: OrderContentsProps) {
  return (
    <div>
        <h2 className='font-black text-4xl'>Consumo</h2>

        <div className="space-y-3 mt-5">

        {/*118 (8  ) */}
            {order.length === 0 ? 
                <p className="text-center text-2xl">No hay productos en el pedido</p>
                : (
                order.map(item => (
                    <div key={item.id} className="flex justify-between">
                        <p>{item.name}</p>
                        <p className="font-black">{item.quantity} x ${item.price}</p>
                    </div>
                )
               
            }
         {/*     {order.map(item => (
              <div key={item.id} className="flex justify-between">
                    <p>{item.name}</p>
                    <p className="font-black">{item.quantity} x ${item.price}</p>
                </div> */}
          



        </div>
    </div>
  )
}
