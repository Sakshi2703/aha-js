import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
sessionStorage = sessionStorage;
  constructor() { 
  }

  ngOnInit(): void {
   
        }

        submit() {
          document.getElementById("buttonsubmit").onclick = function () {
            if (document.getElementById("product-key")["value"] !== "") {
              sessionStorage.setItem("productKey", document.getElementById("product-key")["value"]);
            }
            sessionStorage.setItem("buttonClicked", "clicked");
          }


          if(sessionStorage.getItem("authenticated")==="true"){
            var productKey = document.getElementById("product-key")["value"];
            
                    // if (sessionStorage.getItem("buttonClicked") === "clicked") {
                      sessionStorage.getItem("api")["get"]("/products/" + sessionStorage.getItem("productKey") + "/features", {}, function (response) {
                        // Do something with the features.
                        console.log(response);
                        sessionStorage.getItem("api")["put"]("/features/" + response["features"][0]["reference_num"], {
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
