import { Producto } from '../domain/Producto';

export function crearProductosIniciales(): Producto[] {
  return [
    new Producto('EA001', 'Manzana', 'Manzana roja, unidad', 100, 1500),
    new Producto('EA002', 'Pan artesanal', 'Pan de trigo, unidad', 50, 3200),
    new Producto('WE001', 'Café en grano', 'Precio por gramo', 20000, 25),
    new Producto('WE002', 'Queso costeño', 'Precio por gramo', 15000, 18),
    new Producto('SP001', 'Cerveza artesanal', 'Descuento por volumen', 200, 6000),
    new Producto('SP002', 'Chocolatina', 'Descuento por volumen', 300, 2500),
  ];
}