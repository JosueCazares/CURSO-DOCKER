import { app } from './serve';
import {env} from './env'
//routes register
import { router as user } from './routes/usuario';
import mongoose from 'mongoose';

app.use('/api/user',user);

mongoose.connect('mongodb://mongodb:password@localhost:27017/miapp?authSource=admin');


app.listen(env.PORT, () => {
    console.log(`Curso-Docker API started on port ${env.PORT}`);
})