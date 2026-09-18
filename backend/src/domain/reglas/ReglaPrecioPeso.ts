import { ReglaPrecio } from './ReglaPrecio';

// Para productos WE, precioUnitario viene dado por gramo,
// y "cantidad" se interpreta también en gramos.
export class ReglaPrecioPorPeso implements ReglaPrecio {
  esAplicable(sku: string): boolean {
    return sku.toUpperCase().startsWith('WE');
  }

  calcularTotal(cantidad: number, precioUnitario: number): number {
    return cantidad * precioUnitario;
  }
}