import Express from 'express';

const app = Express();

const PORT = 3000;

app.use(Express.json());

app.get('/', (req, res) => {
  res.json({message: 'deu bom'});
});

app.listen(PORT, () => console.log('rodando....'));

export default app;