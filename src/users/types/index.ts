import { Exclude } from 'class-transformer';

export interface User {
    username: string;
    password: string;
}

export class SerializedUser {
    username: string;

    @Exclude()
    password: string;

    constructor(partail: Partial<SerializedUser>) {
        Object.assign(this, partail);
    }
}
