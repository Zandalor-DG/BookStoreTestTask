import { UserState } from '../models/userState';

const getInitialState = (): UserState => {
    const token = localStorage.getItem('token');
    if (!token) {
        return {
            user: null,
            isInitialize: true,
            isOpenModal: false,
        };
    }
    return {
        user: null,
        isInitialize: false,
        isOpenModal: false,
    };
};

export const userInitialState = getInitialState();
