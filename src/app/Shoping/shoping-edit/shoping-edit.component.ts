import { Component, ElementRef, OnInit, ViewChild ,EventEmitter, Output} from '@angular/core';
import { Ingiredent } from 'src/app/Shared/Ingiredentmodel';
import { ShopingServiceService } from '../shoping-service.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

   @ViewChild('nameInput') nameInputRef!:ElementRef;
   @ViewChild('amountInput') amountInputRef!:ElementRef;
 // @Output() ingiredentAdded=new EventEmitter<Ingiredent>();
  constructor(private shopService:ShopingServiceService) { }

  ngOnInit(): void {
  }

  OnAddButtonClicked()
  {

    const a=this.nameInputRef.nativeElement.value;
    const b=this.amountInputRef.nativeElement.value;
    const newIngiredent=new Ingiredent(a,b);
  //  this.ingiredentAdded.emit(newIngiredent);
      this.shopService.addIngident(newIngiredent);
  }
}
