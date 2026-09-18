import { Tienda } from '../domain/Tiendas';
import { Usuario } from '../domain/Usuario';
import { crearProductosIniciales } from './productosSeed';

function crearTienda(): Tienda {
  const tienda = new Tienda();
  crearProductosIniciales().forEach(p => tienda.agregarProducto(p));
  tienda.registrarUsuario(new Usuario('u1', 'Usuario Demo'));
  return tienda;
}

// Instancia única en memoria (suficiente para el alcance de este ejercicio).
export const tienda = crearTienda();