 import type{
    Tarea,
    Usuario
} from '@prisma/client'; 

export type APIResponse<T> = {
    status: 'success' | 'error',
    data?: T,
    jwt?: string,
    error?: unknown
}

export interface LoginResponseData {
    rol: string;
    id: string;
    username: string;
}

export type{
    Tarea,
    Usuario
}

export interface TareaDelete{
    id: number;
    titulo: string;
    tipo: string;
    status: string;
    usuarioId: number;
}

export enum POSITION {
    TOP_RIGHT = 'top-right',
    TOP_LEFT = 'top-left',
    BOTTOM_RIGHT = 'bottom-right',
    BOTTOM_LEFT = 'bottom-left',
}