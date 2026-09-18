import { Router, Request, Response } from 'express';
import { tienda } from '../data/tiendaStore';

export const router = Router();

router.get('/productos', (req: Request, res: Response) => {
  res.json(tienda.getProductos().map(p => p.toJSON()));
});

router.get('/usuarios/:id/carrito', (req: Request, res: Response) => {
  try {
    const usuario = tienda.getUsuario(req.params.id);
    res.json({
      items: usuario.carrito.getItems().map(i => i.toJSON()),
      total: usuario.carrito.calcularTotal(),
    });
  } catch (e: any) {
    res.status(404).json({ error: e.message });
  }
});

router.post('/usuarios/:id/carrito/items', (req: Request, res: Response) => {
  const { sku, cantidad } = req.body;
  try {
    const item = tienda.agregarProductoACarrito(req.params.id, sku, Number(cantidad));
    res.status(201).json(item.toJSON());
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

router.delete('/usuarios/:id/carrito/items/:itemId', (req: Request, res: Response) => {
  try {
    tienda.eliminarItemDeCarrito(req.params.id, req.params.itemId);
    res.status(204).send();
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

router.post('/usuarios/:id/compra', (req: Request, res: Response) => {
  try {
    const total = tienda.finalizarCompra(req.params.id);
    res.json({ total, totalVentasTienda: tienda.getTotalVentas() });
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});