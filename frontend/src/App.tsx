import { useEffect, useState } from 'react';
import { Producto, CarritoDTO } from './types';
import {
  obtenerProductos,
  obtenerCarrito,
  agregarAlCarrito,
  eliminarDelCarrito,
  finalizarCompra,
} from './api';
import { ListaProductos } from './components/ListaProductos';
import { CarritoView } from './components/CarritoView';

function App() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [carrito, setCarrito] = useState<CarritoDTO>({ items: [], total: 0 });

  const cargarDatos = async () => {
    const [prods, cart] = await Promise.all([obtenerProductos(), obtenerCarrito()]);
    setProductos(prods);
    setCarrito(cart);
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const handleAgregar = async (sku: string, cantidad: number) => {
    try {
      await agregarAlCarrito(sku, cantidad);
      await cargarDatos();
    } catch (e: any) {
      alert(e.message);
    }
  };

  const handleEliminar = async (itemId: string) => {
    await eliminarDelCarrito(itemId);
    await cargarDatos();
  };

  const handleFinalizarCompra = async () => {
    try {
      const resultado = await finalizarCompra();
      alert(`Compra realizada por $${resultado.total.toFixed(2)}`);
      await cargarDatos();
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <div className="app">
      <h1>Tienda</h1>
      <div className="app-layout">
        <ListaProductos productos={productos} onAgregar={handleAgregar} />
        <CarritoView
          carrito={carrito}
          onEliminar={handleEliminar}
          onFinalizarCompra={handleFinalizarCompra}
        />
      </div>
    </div>
  );
}

export default App;