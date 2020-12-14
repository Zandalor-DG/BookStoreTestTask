import { UserState } from '../models/userState';

export const initialState: UserState = {
    user: {
        id: 0,
        fullName: '',
        email: '',
    },
    isAuthorized: false,
    isOpenModal: false,
};
