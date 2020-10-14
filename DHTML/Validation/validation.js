function readUserInfo() {
	var userInfo = {};
	userInfo.name = document.querySelector("#uname").value;
	userInfo.gender = document.querySelector('input[name="gender"]:checked').value;
	userInfo.country = document.querySelector("#userCountry").value;
	userInfo.country = document.querySelector("#userState").value;
	userInfo.country = document.querySelector("#userdistrict").value;
	userInfo.country = document.querySelector("#userVillage").value;
	
    userInfo.name = document.querySelector("#uname").value;
	if (!userInfo.name) {
		document.querySelector(".unameError").style.display = 'block';
		return;
	} else {
		document.querySelector(".unameError").style.display = 'none';
	}

	userInfo.actId = document.querySelector("#uacnt").value;

	if (!userInfo.actId) {
		document.querySelector(".actionerror").style.display = 'block';
		return;

	} else {
		document.querySelector(".actionerror").style.display = 'none';
	}

	userInfo.pwd = document.querySelector("#upwd").value;
	var rpwd = document.querySelector("#rpwd").value;
	console.log(userInfo);
}

function countryDetails(event){
	console.log(event);
var countryDetails  = [
	{
		code: "91",
		name: 'India'
	},
	{
		code: "92",
		name: 'Pakistan'
	},
	{
		code: "977",
		name: 'Nepal'
	}
];
}


function stateDetails(event){
var stateDetails = {
	91: [
	   {
			name: 'Delhi',
			id: 's_07'
		}
		{
			name: 'Telangana',
			id:'s_36'
		},
		
		{
			name: 'Uttar pradesh',
			id: 's_09'
		}
	],
	92:[
	   {
			name: 'Delhi',
			id: 's_07'
		}
		{
			name: 'Telangana',
			id:'s_36'
		},
		
		{
			name: 'Uttar pradesh',
			id: 's_09'
		}
	],
}

function districtDetails(event){
var districtDetails = {
	s_07: [	
	{
		name : 'New Delhi',
		id = 'd_01'
	}	
	{
		name : 'North Delhi',
		id = 'd_02'
	}	
	{
		name : 'South Delhi',
		id = 'd_03'
	}	
	],
	s_36:[
	{
		name : 'New Delhi',
		id = 'd_01'
	}	
	{
		name : 'North Delhi',
		id = 'd_02'
	}	
	{
		name : 'South Delhi',
		id = 'd_03'
	}	

	],
	s_09:[
	{
		name : 'New Delhi',
		id = 'd_01'
	}	
	{
		name : 'North Delhi',
		id = 'd_02'
	}	
	{
		name : 'South Delhi',
		id = 'd_03'
	}	

	],
 }
}
function villageDetails(event){
var villageDetails = {
   d_01:[
   {
       name = "Connaught Place",
       id = 'v_01'

   }
    {
       name = "vasant vihar",
       id = 'v_02'

   }
    {
       name = "chanakypuri",
       id = 'v_03'

   }
   ]
}
}
