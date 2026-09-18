import { Producto, CarritoDTO } from './types';

const USUARIO_ID = 'u1';

export async function obtenerProductos(): Promise<Producto[]> {
  const res = await fetch('/api/productos');
  return res.json();
}

export async function obtenerCarrito(): Promise<CarritoDTO> {
  const res = await fetch(`/api/usuarios/${USUARIO_ID}/carrito`);
  return res.json();
}

export async function agregarAlCarrito(sku: string, cantidad: number) {
  const res = await fetch(`/api/usuarios/${USUARIO_ID}/carrito/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sku, cantidad }),
  });
  if (!res.ok) throw new Error((await res.json()).error);
  return res.json();
}

export async function eliminarDelCarrito(itemId: string) {
  const res = await fetch(`/api/usuarios/${USUARIO_ID}/carrito/items/${itemId}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error((await res.json()).error);
}

export async function finalizarCompra() {
  const res = await fetch(`/api/usuarios/${USUARIO_ID}/compra`, { method: 'POST' });
  if (!res.ok) throw new Error((await res.json()).error);
  return res.json();
}