var helloApp = angular.module("helloApp", ['smart-table']);

helloApp.controller('CompanyCtrl', function($scope) {
	  $scope.companies= [ { 'name':'Asit','class': '10th','Roll': 12352107,'number':1,'description':'Good in character'},
                        { 'name':'Abhishek','class': '12th','Roll': 12352109,'number':2,'description':'Good in character'},
                        { 'name':'Renu','class': '6th','Roll': 12352100,'number':5,'description':'Good in character'},
                        { 'name':'Rahul Gupta','class': '9th','Roll': 12352111,'number':8,'description':'Good in character'},];

            
        $scope.Edit= false;
        $scope.sub=true;
       $scope.addRow = function() {
           
            
            $scope.companies.push({'name':$scope.name,'class':$scope.class,'Roll':$scope.Roll,'number':$scope.number,'description':$scope.description});
            $scope.name = '';
            $scope.class = '';
            $scope.Roll = '';
            $scope.number = '';
            $scope.description = '';
            $scope.showForm = false;

       }   




       $scope.removeItem = function removeItem(row) {
        var index = $scope.companies.indexOf(row);
        if (index !== -1) {
            $scope.companies.splice(index, 1);
        }
        
    }    


       $scope.EditItem = function EditItem(row){

        $scope.sub=false;
    	$scope.Edit=true;
    	$scope.showForm = true;
    	$scope.name = row.name;
    	$scope.class = row.class;
        $scope.number = row.number;
        $scope.Roll = row.Roll;
    	$scope.description = row.description;
        $scope.transferclass = row.number;

    	
    	
    			
	    
    	// console.log($scope.companies[i]);
    	
    }

      $scope.submitchange = function submitchange(){
    	//$scope.button.new = true;
        console.log($scope.transferclass);
        for(var i = 0; i < $scope.companies.length; i++){
            
            if($scope.companies[i].number == $scope.transferclass){
                    break;
                }
        }

        console.log(i);
        
            $scope.companies[i].name = $scope.name;
            $scope.companies[i].class = $scope.class;
            $scope.companies[i].number = $scope.number;
            $scope.companies[i].description = $scope.description;
            $scope.companies[i].headoffice = $scope.headoffice;

    	console.log("Asit Gupta");
    }
});