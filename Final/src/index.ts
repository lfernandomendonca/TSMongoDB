import express from 'express';
import { json } from 'body-parser';
import { todoRouter } from './routes/todo';
 

const app = express();
app.use (json())
app.use (todoRouter)

app.listen(3000, () => {
    console.log('Servidor ouvindo porta 3000')
})





