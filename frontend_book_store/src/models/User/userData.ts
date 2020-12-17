import { userRole } from './userRoleEnum';

export interface UserData {
    fullName: string;
    email: string;
    password: string;
    dob: Date;
    roleId: userRole;
    id?: number;
    avatar: string | null;
}
