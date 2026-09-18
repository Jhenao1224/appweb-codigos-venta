import { ReglaPrecio } from './reglas/ReglaPrecio';
import { ReglaPrecioNormal } from './reglas/ReglaPrecioNormal';
import { ReglaPrecioPorPeso } from './reglas/ReglaPrecioPeso';
import { ReglaPrecioEspecial } from './reglas/ReglaPrecioEspecial';

export class ManejadorReglas {
  private reglas: ReglaPrecio[];

  constructor(reglas: ReglaPrecio[] = ManejadorReglas.reglasPorDefecto()) {
    this.reglas = reglas;
  }

  private static reglasPorDefecto(): ReglaPrecio[] {
    return [
      new ReglaPrecioNormal(),
      new ReglaPrecioPorPeso(),
      new ReglaPrecioEspecial(),
    ];
  }

  // Agregar una regla nueva NO requiere modificar esta clase ni las existentes:
  // basta con instanciarla y registrarla aquí (Open/Closed Principle).
  registrarRegla(regla: ReglaPrecio): void {
    this.reglas.unshift(regla);
  }

  obtenerRegla(sku: string): ReglaPrecio {
    const regla = this.reglas.find(r => r.esAplicable(sku));
    if (!regla) {
      throw new Error(`No existe una regla de precio aplicable para el SKU: ${sku}`);
    }
    return regla;
  }
}