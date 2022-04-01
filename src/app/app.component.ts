import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aha-app';
  @Input() api;

  constructor(private readonly router: Router) {
    console.log(this.api);
    
    this.router.navigate(['dashboard',{state:this.api}]);



  }


  submit() {

    if(sessionStorage.getItem("authenticated")==="true"){
      var productKey = document.getElementById("product-key")["value"];
      
              // if (sessionStorage.getItem("buttonClicked") === "clicked") {
                this.api["get"]("/products/" + sessionStorage.getItem("productKey") + "/features", {}, function (response) {
                  // Do something with the features.
                  console.log(response);
                  this.api["put"]("/features/" + response["features"][0]["reference_num"], {
                    "feature": {
                      "name": "New name"
                    }
                  }, function (response) {
                    // Do something with the features.
                    console.log(response);
                    
                    sessionStorage.setItem("buttonClicked", "notclicked");
                  })
                 
                });
              // }
            }

  }
}
