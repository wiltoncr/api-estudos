import app from "./app";

const port = 3001;
app.app.listen(port, () => {
  console.log(`Servidor iniciado ${port}`);
});
