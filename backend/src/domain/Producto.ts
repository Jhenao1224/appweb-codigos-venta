export class Producto {
  constructor(
    public readonly sku: string,
    public readonly nombre: string,
    public readonly descripcion: string,
    private unidadesDisponibles: number,
    public readonly precioUnitario: number
  ) {}

  getUnidadesDisponibles(): number {
    return this.unidadesDisponibles;
  }

  tieneUnidades(cantidad: number): boolean {
    return this.unidadesDisponibles >= cantidad;
  }

  descontarUnidades(cantidad: number): void {
    if (!this.tieneUnidades(cantidad)) {
      throw new Error(`No hay unidades suficientes de ${this.nombre}`);
    }
    this.unidadesDisponibles -= cantidad;
  }

  toJSON() {
    return {
      sku: this.sku,
      nombre: this.nombre,
      descripcion: this.descripcion,
      unidadesDisponibles: this.unidadesDisponibles,
      precioUnitario: this.precioUnitario,
    };
  }
}