export class User {
    id: number;
    name: string;
    handle: string;

    constructor(id: number, name: string, handle: string) {
        this.id = id;
        this.name = name;
        this.handle = handle;
    }
}