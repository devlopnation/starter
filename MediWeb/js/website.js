var app = angular.module("webs",['ui.bootstrap']);
    
var errors = [
    {
    id:"0",
    name:"Incorrect Medicine Name",
    description:""
    },
    {
    id:"1",
    name:"Medicine Name Empty",
    description:""
    },
    {
    id:"2",
    name:"",
    description:""
}];
var medicines = [
    {
    id: "0",
    name : "dettol",
    company : "ITC",
    dosage: "physically only",
    price: "50"
},{
    id: "1",
    name : "Brufin",
    company : "Abbott",
    dosage: "400mg",
    price: "15"
},{
    id: "2",
    name : "disprin",
    company : "IT",
    dosage: "10mg",
    price: "5"
},{
    id: "3",
    name : "modifinil",
    company : "usp",
    dosage: "250mg",
    price: "110"
},{
    id: "4",
    name : "Seacod",
    company : "sanofi",
    dosage: "300mg",
    price: "200"
}
];

var isSearched = false;
var isError = false;
app.controller('mainCtrl',["$scope","$filter",function($scope,$filter,isSearched,isError){
    this.search = function(product){ 
        $scope.isError = false;
        $scope.isSearched = false;
        if(product!=null && product.length > 0){
            var result = $filter("filter")(medicines, {name:product});
            if(result.length > 0){
                console.log(result[0]);
                this.product = result[0];
                $scope.isSearched = true;
            }else{
                console.log("Nhi ho paya");
                $scope.isSearched = false;
                this.error = errors[0];
                $scope.isError = true;
            }
        }else{
            this.error = errors[1];
            $scope.isError = true;
        }
        
    };
    
    // method to add medicine to medicines array
    this.addMed = function(product){
        console.log("inside add function")
        console.log(product);
    };
    // method to update medicine to medicines array
    this.updMed = function(product){
        
    };
    // method to delete medicine to medicines array
    this.delMed = function(product){
        
    };
    
}]);

app.controller('resultCtrl',["$scope",function($scope){
    this.product = medicines[searchItemId];
}]);