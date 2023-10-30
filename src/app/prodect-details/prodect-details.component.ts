import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthServiseService } from '../auth-servise.service';
import { HttpClient } from '@angular/common/http';
import { Prodect } from '../models/prodect';

@Component({
  selector: 'app-prodect-details',
  templateUrl: './prodect-details.component.html',
  styleUrls: ['./prodect-details.component.css']
})
export class ProdectDetailsComponent implements OnInit {
  prodect:any;
  id:any;
  constructor(private route:ActivatedRoute, private auth: AuthServiseService){
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.id=params.get("id")
    })
    this.auth.getOneProdect(this.id).subscribe(
      result=>{
        this.prodect=result
      }
    )
    console.log(this.prodect)

  }

}
