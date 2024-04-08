const  express= require('express');
import todosRoutes from './routes/todos';
import * as bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());

app.use('/todos', todosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;




