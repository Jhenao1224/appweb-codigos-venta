import { Producto } from '../types';

interface Props {
  productos: Producto[];
  onAgregar: (sku: string, cantidad: number) => void;
}

export function ListaProductos({ productos, onAgregar }: Props) {
  return (
    <div className="lista-productos">
      <h2>Productos</h2>
      {productos.map(p => (
        <FilaProducto key={p.sku} producto={p} onAgregar={onAgregar} />
      ))}
    </div>
  );
}

function FilaProducto({ producto, onAgregar }: { producto: Producto; onAgregar: Props['onAgregar'] }) {
  // Los productos WE se venden por gramos; los demás, por unidad.
  const cantidadDefecto = producto.sku.startsWith('WE') ? 500 : 1;
  return (
    <div className="fila-producto">
      <div>
        <strong>{producto.nombre}</strong> ({producto.sku})
        <p>{producto.descripcion}</p>
        <span>Disponibles: {producto.unidadesDisponibles}</span>
      </div>
      <button onClick={() => onAgregar(producto.sku, cantidadDefecto)}>
        Agregar
      </button>
    </div>
  );
}