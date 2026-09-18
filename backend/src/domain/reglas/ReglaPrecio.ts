export interface ReglaPrecio {
  esAplicable(sku: string): boolean;
  calcularTotal(cantidad: number, precioUnitario: number): number;
}