import { userRole } from './userRoleEnum';

export interface UserData {
    id: number;
    fullName: string;
    email: string;
    password: string;
    dob: Date;
    roleId: userRole;
}
