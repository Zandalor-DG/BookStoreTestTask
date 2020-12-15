import { UserData } from './User/userData';

export type UserState = {
    user: UserData | null;
    isInitialize: boolean;
    isOpenModal: boolean;
    error?: string;
};
