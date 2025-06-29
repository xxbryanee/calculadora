import  MenuItem  from "./componentes/MenuItem";
import OrderContents from "./componentes/OrderContents";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
 
const { order, addItem } = useOrder(); {/*118 (3)*/}
  return (
    <>
      <header className="bg-teal-400 py-5"> 
        <h1 className="text-center text-4xl font-black">Calculadora</h1>
      </header>
      
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">

          <div className="p-6">

              <h2>Menu</h2>

                <div className="mt-10 space-y-3">
                {menuItems.map(item => (
                  <MenuItem
                  key={item.id}
                  item={item}
                  addItem={addItem}
                  />
                ))}
                
                </div>

          </div>

          <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10"> 
              <OrderContents 
              order = {order}

          /> {/*118 (2) */}
          </div> 

        
      </main>

    </>
  )
}

export default App
