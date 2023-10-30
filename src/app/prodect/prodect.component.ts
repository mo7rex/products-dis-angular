import { Component, OnInit } from '@angular/core';
import { Prodect } from '../models/prodect';
import { AuthServiseService } from '../auth-servise.service';

@Component({
  selector: 'prodect',
  templateUrl: './prodect.component.html',
  styleUrls: ['./prodect.component.css']
})
export class ProdectComponent implements OnInit{
    prodects: Prodect []=[]
    constructor(private auth:AuthServiseService){
      
    }

    ngOnInit(): void{
      this.auth.getProdects().subscribe(
        result=>{
          this.prodects=result
        }
      )
    }
}
