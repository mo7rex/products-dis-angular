export class Prodect{
    id:number;
    title: string;
    price: number;
    description:string;
    category:string;
    image:string;
    rating:number[]=[]

    constructor(id:number, title: string, price: number, description:string, category:string, image:string){
        this .id=id;
        this.title=title;
        this.price=price;
        this.description=description;
        this.category=category;
        this.image=image;
    }

}