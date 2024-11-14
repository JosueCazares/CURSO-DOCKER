import { Router } from 'express';
import type { Request, Response } from 'express';
import type { APIResponse } from '../lib/types';
import mongoose from 'mongoose';

export const router = Router();

const User = mongoose.model('User',new mongoose.Schema({
    name: String,
    email: String,
}));



router.get('/', async (_:Request, res:Response) => {
    try {

        //constuir usuario con consulta a mongodb
        let user =  await User.find();

        let response:APIResponse<typeof user> = {
            status: "success",
            data: user
        }
        return res.status(200).json(response);
    }catch(e){
        let responseError:APIResponse<null> = {
            status: "error",
            error: e
        }
        return res.status(500).json(responseError);
    }
});
router.post('/', async (_:Request, res:Response) => {
    try {

        //constuir usuario con consulta a mongodb
        let newUser = await User.create({name: "Usuario", email: "usuario@gmail.com"});

        let response:APIResponse<any> = {
            status: "success",
            data: newUser
        }
        return res.status(200).json(response);
    }catch(e){
        let responseError:APIResponse<null> = {
            status: "error",
            error: e
        }
        return res.status(500).json(responseError);
    }
});
