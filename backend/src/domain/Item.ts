import { randomUUID } from 'crypto';
import { Producto } from './Producto';
import { ManejadorReglas } from './ManjeadorReglas';

export class Item {
  public readonly id: string;
  private static manejadorReglas = new ManejadorReglas();

  constructor(
    public readonly producto: Producto,
    public readonly cantidad: number
  ) {
    this.id = randomUUID();
  }

  calcularTotal(): number {
    const regla = Item.manejadorReglas.obtenerRegla(this.producto.sku);
    return regla.calcularTotal(this.cantidad, this.producto.precioUnitario);
  }

  toJSON() {
    return {
      id: this.id,
      producto: this.producto.toJSON(),
      cantidad: this.cantidad,
      total: this.calcularTotal(),
    };
  }
}