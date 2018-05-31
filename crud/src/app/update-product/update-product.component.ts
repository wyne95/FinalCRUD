import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id:number;
  data:object = {};
  products = [];
  exist = false;
  productObj:object = {};
  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private router: Router, private route: ActivatedRoute,private http: Http) { }

  updateProduct(product) {
    this.productObj = {
      "Fname" : product.Fname,
      "Lname" : product.Lname,
      "Nation" : product.Nation,
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
    const url =`${"http://localhost:3000/products"}/${this.id}`;
    this.http.put(url, JSON.stringify(this.productObj), {headers: this.headers})
    .toPromise()
    .then(() => {
      this.router.navigate(['/']);
    })

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get("http://localhost:5555/products").subscribe(
      (res: Response) => {
        this.products = res.json();
        for(var i =0; i <this.products.length ; i++) {
          if(parseInt(this.products[i].id) === this.id) {
            this.exist = true;
            this.data = this.products[i];
            break;
        } else {
          this.exist = false;
        }
      }
    }
    )
  }

}
