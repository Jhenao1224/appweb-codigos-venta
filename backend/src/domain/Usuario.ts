import { Producto } from './Producto';
import { Item } from './Item';
import { Carrito } from './Carrito';

export class Usuario {
  public readonly carrito: Carrito = new Carrito();

  constructor(
    public readonly id: string,
    public readonly nombre: string
  ) {}

  agregarItemACarrito(producto: Producto, cantidad: number): Item {
    return this.carrito.agregarItem(producto, cantidad);
  }

  borrarItemDeCarrito(item: Item): void {
    this.carrito.borrarItem(item);
  }
}