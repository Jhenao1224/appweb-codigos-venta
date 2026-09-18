import { ReglaPrecio } from './ReglaPrecio';

export class ReglaPrecioEspecial implements ReglaPrecio {
  private static readonly UNIDADES_POR_GRUPO = 3;
  private static readonly DESCUENTO_POR_GRUPO = 0.20;
  private static readonly DESCUENTO_MAXIMO = 0.50;

  esAplicable(sku: string): boolean {
    return sku.toUpperCase().startsWith('SP');
  }

  calcularTotal(cantidad: number, precioUnitario: number): number {
    const grupos = Math.floor(cantidad / ReglaPrecioEspecial.UNIDADES_POR_GRUPO);
    const descuento = Math.min(
      grupos * ReglaPrecioEspecial.DESCUENTO_POR_GRUPO,
      ReglaPrecioEspecial.DESCUENTO_MAXIMO
    );
    const precioBruto = cantidad * precioUnitario;
    return precioBruto * (1 - descuento);
  }
}