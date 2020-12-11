export type UserState = {
    user: {
        id: number;
        fullName: string;
        email: string;
        password?: string;
        dob?: Date;
        roleId?: number;
    };
    isAuthorized: boolean;
    error?: string;
};
