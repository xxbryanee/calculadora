import type { MenuItem } from '../types';

type MenuItemProps = {
    item: MenuItem;
    addItem?: (item: MenuItem) => void; // 115 (2)
    removeItem?: (id: number) => void;

}

export default function MenuItem({item, addItem} : MenuItemProps){
    return( 

    <button
    className='border-5 border-b-red-800 hover:bg-amber-400 
    w-full p-3 flex justify-between mb-5'
    onClick={() => addItem?.(item)}
    
    >
        <p>{item.name}</p>
        <p className='font-black'>{item.price}</p>

    </button>
    )

}