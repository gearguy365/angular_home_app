angular.module('directoryApp' , [])
.controller('directoryController', function($http){

		var dirList = this;

		dirList.resault = '';
		dirList.searchStat = 'All people';
		dirList.apiresponse = '';
		dirList.sum = 0;

		dirList.list = [
			{name:'Scott', age: 20},
			{name:'Jhon', age: 29},
			{name:'Belgium', age: 40}
		];


		dirList.addPerson = function() {
			dirList.list.push({name:dirList.name, age:dirList.age});
			dirList.name = '';
			dirList.age = 0;
		};

		dirList.onSearch = function() {

			if(dirList.searchKey == '') {
				dirList.searchStat = 'All people';
			}
			else {
				dirList.searchStat = 'Searching...';
			}
		};

		dirList.apiCall = function() {
			$http.get("http://demo5646979.mockable.io/peopledirectory").then(function(response){
  				dirList.apiresponse = response.data;
  			});
		};

		dirList.sumation = function () {
			dirList.sum = dirList.firstnum + dirList.secondnum;
		};
	});
