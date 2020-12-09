export enum ActionTypeUser {
    Register = 'Register',
    Authorization = 'Authorization',
    UpdateAvatar = 'UpdateAvatar',
}

export type ActionStringPayloadUser = {
    type: ActionTypeUser.Register;
    payload: string;
};

export type ActionUser = ActionStringPayloadUser;
