import { ActionStringPayloadUser, ActionTypeUser } from './actionTypesToDo';

export const registerUser = (payload: string): ActionStringPayloadUser => ({
    type: ActionTypeUser.Register,
    payload,
});
