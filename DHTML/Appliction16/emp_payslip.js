function readData(){
	var eData={};
	eData.name = document.querySelector("#ename").value;
	eData.age = document.querySelector("#eage").value;
	eData.age=parseInt(eData.age);
	eData.sal=document.querySelector("#esal").value;
	eData.sal=parseInt(eData.sal);
	eData.gender=document.querySelector('input[name="gender"]:checked').value;
	eData.dept=document.querySelector("#edept").value;

	eData.getTotalSal=function(){
		var pf,hra,totalsal,tax;
		this.pf=this.sal*0.12;
		this.hra=this.sal*0.25;
		this.totalsal=this.pf+this.hra+this.sal;
	}


	eData. getTotalTax =function(){
				var totalsal;
				if (this.gender == 'male') {
					if (totalsal > 50000) {
						taxpercent = 10;
					} else{
						taxpercent = 5;
					}
				} else {
					if (this.totalsal > 50000) {
						taxpercent = 5;
					} else{
						taxpercent = 0;
					}
				}
				eData.tax = ( this.totalsal * taxpercent ) / 100;
			}
	eData.displayPaySlip = function() {
		this.getTotalSal();
		eData.getTotalTax();
		
		document.querySelector(".paySlipDetailsBlock").style.display ="block";

		var ulTag = document.createElement("ul");

		var li1 = document.createElement("li");
		li1.innerText = "Name : " + this.name;
		ulTag.append(li1);

		var li2 = document.createElement("li");
		li2.innerText = "Age : " + this.age;
		ulTag.append(li2);

		var li3 = document.createElement("li");
		li3.innerText = "Salary : " + this.sal;
		ulTag.append(li3);

		var li4 = document.createElement("li");
		li4.innerText = "gender : " + this.gender;
		ulTag.append(li4);

		var li5 = document.createElement("li");
		li5.innerText = "Pf: " + this.pf;
		ulTag.append(li5);

		var li6 = document.createElement("li");
		li6.innerText = "hra : " + this.hra;
		ulTag.append(li6);

		var li7 = document.createElement("li");
		li7.innerText = "totalsal : " + this.totalsal;
		ulTag.append(li7);

		var li8 = document.createElement("li");
		li8.innerText = "tax : " + this.tax;
		ulTag.append(li8);

		var li9 = document.createElement("li");
		li9.innerText = "edept : " + this.edept;
		ulTag.append(li9);


		
		document.querySelector(".paySlipDetailsBlock").append(ulTag);

	}
	eData.displayPaySlip();
}