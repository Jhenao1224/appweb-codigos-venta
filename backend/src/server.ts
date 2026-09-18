import { crearApp } from './api/app';

const PORT = process.env.PORT || 3001;
const app = crearApp();

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});