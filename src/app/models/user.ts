export class User{
    id: number;
    email:string;
    name:string;
    role:string;
    avatar:string;

    constructor(id: number,email:string,name:string,role:string,avatar:string){
        this.id=id;
        this.email=email;
        this.name=name;
        this.role=role;
        this.avatar=avatar;
    }
}