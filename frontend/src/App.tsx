import { useEffect, useState } from 'react';
import { Producto } from './types';
import { obtenerProductos, agregarAlCarrito } from './api';
import { ListaProductos } from './components/ListaProductos';

function App() {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    obtenerProductos().then(setProductos);
  }, []);

  const handleAgregar = async (sku: string, cantidad: number) => {
    try {
      await agregarAlCarrito(sku, cantidad);
      alert('Producto agregado al carrito');
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <div className="app">
      <h1>Tienda</h1>
      <ListaProductos productos={productos} onAgregar={handleAgregar} />
    </div>
  );
}

export default App;