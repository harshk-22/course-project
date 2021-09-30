import { Component, OnInit } from '@angular/core';
import { Ingiredent } from 'src/app/Shared/Ingiredentmodel';
import { ShopingServiceService } from '../shoping-service.service';

@Component({
  selector: 'app-shoping',
  templateUrl: './shoping.component.html',
  styleUrls: ['./shoping.component.css']
})
export class ShopingComponent implements OnInit {

  ingiredents!:Ingiredent[];
  constructor(private shopingServive:ShopingServiceService) { }

  ngOnInit(): void {
    this.ingiredents=this.shopingServive.getShopingIngiredent();
    this.shopingServive.ingredentChanged.subscribe((eventingiredents:Ingiredent[])=>{this.ingiredents=eventingiredents})
  }
  // onIngiredentAdded(ingiredent:Ingiredent)
  // {
  //     this.ingiredents.push(ingiredent)
  // }
}
