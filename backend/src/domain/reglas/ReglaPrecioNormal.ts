import { ReglaPrecio } from './ReglaPrecio';

export class ReglaPrecioNormal implements ReglaPrecio {
  esAplicable(sku: string): boolean {
    return sku.toUpperCase().startsWith('EA');
  }

  calcularTotal(cantidad: number, precioUnitario: number): number {
    return cantidad * precioUnitario;
  }
}