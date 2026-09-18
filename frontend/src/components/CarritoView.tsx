import { CarritoDTO } from '../types';
import { ItemCarrito } from './ItemCarrito';

interface Props {
  carrito: CarritoDTO;
  onEliminar: (itemId: string) => void;
  onFinalizarCompra: () => void;
}

export function CarritoView({ carrito, onEliminar, onFinalizarCompra }: Props) {
  return (
    <div className="carrito">
      <h2>Carrito de compras</h2>
      {carrito.items.length === 0 && <p>El carrito está vacío</p>}
      {carrito.items.map(item => (
        <ItemCarrito key={item.id} item={item} onEliminar={onEliminar} />
      ))}
      <div className="carrito-total">
        <strong>Total: ${carrito.total.toFixed(2)}</strong>
      </div>
      <button disabled={carrito.items.length === 0} onClick={onFinalizarCompra}>
        Finalizar compra
      </button>
    </div>
  );
}