export type UserState = {
    user: {
        fullName: string;
        email: string;
        id?: number;
        password?: string;
        dob?: Date;
        roleId?: number;
    };
    isAuthorized: boolean;
    error?: string;
};
