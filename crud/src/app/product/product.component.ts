import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { user } from '../user';
import { Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from '../app.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements 
OnInit {
  userList: user[]=[];

  constructor(private router: Router, private http: Http) { }
  confirmationString:string = "New product has been added";
  isAdded: boolean = false;
  productObj:object = {};

  addNewProduct = function(product) {
    this.productObj = {
      "Fname": product.Fname,
      "Lname": product.Lname,
      "Nation": product.Nation,
      "idNo": product.idNo,
      "Bdate": product.Bdate,
      "Cont": product.Cont,
      "Addr": product.Addr,
      "City": product.City,
      "State": product.State,
      "Pcode": product.Pcode,
      "Country": product.Country,
      "Email": product.Email,
      "Bacc": product.Bacc,
      "Ibank": product.Ibank,
      "Att": product.Att
      
    };
    
    this.http.post("http://localhost:3000/products", this.productObj).subscribe((res:Response) => {
      this.isAdded = true;
      this.router.navigate(['/']);
    })
  }

  ngOnInit() {
  }

}
