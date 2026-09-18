import { Item } from '../types';

interface Props {
  item: Item;
  onEliminar: (itemId: string) => void;
}

export function ItemCarrito({ item, onEliminar }: Props) {
  return (
    <div className="item-carrito">
      <span>{item.producto.nombre} x {item.cantidad}</span>
      <span>${item.total.toFixed(2)}</span>
      <button onClick={() => onEliminar(item.id)}>Quitar</button>
    </div>
  );
}