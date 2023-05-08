export type User = {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confrimPasword?: string;
    age?: number;
    phone?: string;
    address?: {
        street?: string;
        city?: string;
        state?: string;
        zip?: number
    }

}