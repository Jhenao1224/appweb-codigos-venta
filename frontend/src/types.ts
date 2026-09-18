export interface Producto {
  sku: string;
  nombre: string;
  descripcion: string;
  unidadesDisponibles: number;
  precioUnitario: number;
}

export interface Item {
  id: string;
  producto: Producto;
  cantidad: number;
  total: number;
}

export interface CarritoDTO {
  items: Item[];
  total: number;
}