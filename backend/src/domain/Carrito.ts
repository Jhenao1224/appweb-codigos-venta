import { Producto } from './Producto';
import { Item } from './Item';

export class Carrito {
  private items: Item[] = [];

  agregarItem(producto: Producto, cantidad: number): Item {
    if (!producto.tieneUnidades(cantidad)) {
      throw new Error(`No hay unidades disponibles suficientes de ${producto.nombre}`);
    }
    const item = new Item(producto, cantidad);
    this.items.push(item);
    return item;
  }

  borrarItem(item: Item): void {
    this.items = this.items.filter(i => i !== item);
  }

  encontrarItem(itemId: string): Item | undefined {
    return this.items.find(i => i.id === itemId);
  }

  calcularTotal(): number {
    return this.items.reduce((total, item) => total + item.calcularTotal(), 0);
  }

  getItems(): Item[] {
    return [...this.items];
  }

  vaciar(): void {
    this.items = [];
  }
}