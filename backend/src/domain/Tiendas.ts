import { Producto } from './Producto';
import { Usuario } from './Usuario';

export class Tienda {
  private productos: Map<string, Producto> = new Map();
  private usuarios: Map<string, Usuario> = new Map();
  private totalVentas: number = 0;

  agregarProducto(producto: Producto): void {
    this.productos.set(producto.sku, producto);
  }

  registrarUsuario(usuario: Usuario): void {
    this.usuarios.set(usuario.id, usuario);
  }

  getProductos(): Producto[] {
    return [...this.productos.values()];
  }

  getProducto(sku: string): Producto {
    const producto = this.productos.get(sku);
    if (!producto) throw new Error(`Producto no encontrado: ${sku}`);
    return producto;
  }

  getUsuario(id: string): Usuario {
    const usuario = this.usuarios.get(id);
    if (!usuario) throw new Error(`Usuario no encontrado: ${id}`);
    return usuario;
  }

  agregarProductoACarrito(usuarioId: string, sku: string, cantidad: number) {
    const usuario = this.getUsuario(usuarioId);
    const producto = this.getProducto(sku);
    return usuario.agregarItemACarrito(producto, cantidad);
  }

  eliminarItemDeCarrito(usuarioId: string, itemId: string): void {
    const usuario = this.getUsuario(usuarioId);
    const item = usuario.carrito.encontrarItem(itemId);
    if (!item) throw new Error(`Item no encontrado en el carrito: ${itemId}`);
    usuario.borrarItemDeCarrito(item);
  }

  finalizarCompra(usuarioId: string): number {
    const usuario = this.getUsuario(usuarioId);
    const items = usuario.carrito.getItems();
    const total = usuario.carrito.calcularTotal();

    items.forEach(item => item.producto.descontarUnidades(item.cantidad));
    this.totalVentas += total;
    usuario.carrito.vaciar();

    return total;
  }

  getTotalVentas(): number {
    return this.totalVentas;
  }
}