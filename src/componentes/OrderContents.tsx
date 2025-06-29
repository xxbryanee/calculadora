import type { OrderItem } from "../types";

{/*118 (6)*/}
type OrderContentsProps = {  
    order: OrderItem[]
    // Aquí puedes definir las propiedades que necesites
}

export default function OrderContents({ order }: OrderContentsProps) {
  return (
    <div>
        <h2 className='font-black text-4xl'>Consumo</h2> {/*118 (8  ) */}

        <div className="space-y-3 mt-5">
            {order.length === 0 ? 
                <p className="text-center">No hay productos en el pedido</p>

         :(

            order.map(item => (
            <div key={item.id} >
                    <p>
                        {item.name} - {item.price} 
                    </p> 
            </div> 
            ))
        )}

        </div>
    </div>
  )
}
