import { loginUser, userAPI } from '../../api/apiUser';
import { InputsLogin } from '../../components/header/account/LoginAccount';
import { UserData } from '../../models/User/userData';
import { AppDispatch } from '../reducers';
import { setLoginUser } from '../userStore/actionCreatedUser';

// const testUser: UserData = {
//     id: 1,
//     fullName: '',
//     email: '',
//     password: '',
//     dob: new Date(),
//     roleId: 1,
// };

export const postLoginUser = ({ email, password }: InputsLogin) => async (dispatch: AppDispatch) => {
    try {
        const user = await loginUser({ email, password });
        dispatch(setLoginUser(user));
    } catch (e) {
        dispatch({ type: 'set_error', error: e.message });
    }
};
