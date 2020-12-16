import { UserState } from '../models/userState';

const getInitialState = (): UserState => {
    const token = localStorage.getItem('token');
    if (!token) {
        return {
            user: null,
            isInitialize: true,
            isOpenModal: false,
            avatar: 'images.jpeg',
        };
    }
    return {
        user: null,
        isInitialize: false,
        isOpenModal: false,
        avatar: 'images.jpeg',
    };
};

export const userInitialState = getInitialState();
