import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor() {
    
    
   }

list:any = [];
expenses:any = [];
dummy:any = [];
// udate:any;
utype:any;
ucate:any;

uamt:any;
incomee:any;
expene:any ;
totalIncome:any;
totalExpense:any;
totalBalance:any;

// l:any;u:any;d:any;
   incomeFunction(){
      this.incomee = true;
      this.expene = false;
   }
   expenseFunction(){
      this.expene=true;
      this.incomee=false;
   }

   add(){
     let f = {
      //  date : this.udate,
       type : this.utype,
       categories : this.ucate,
       amount:this.uamt,
       incomee:false,
       expene:false,
 
     };
     this.dummy.push(f);
    
     let obj = this.dummy.filter((a:any)=>a.type === 'income');
     console.log(obj);
     this.totalIncome = obj.reduce((a:number,b:any)=>{
        return a + parseInt(b.amount);
      },0);
    
     let obj1 = this.dummy.filter((x:any)=>x.type === 'expense');
     this.totalExpense = obj1.reduce((a:number,b:any)=>{
       return a + parseInt(b.amount);
     },0);
    
     this.totalBalance = (parseInt(this.totalIncome )- parseInt(this.totalExpense));
    
   }

   delete(i: any){
     let arrEl = this.dummy[i];
    //  var qua = arrEl.amount;
    //  console.log(qua);
    if(arrEl.type === 'income')
    {
      let qua = arrEl.amount;
      this.totalIncome = this.totalIncome - (parseInt(qua));
       this.totalBalance = (parseInt(this.totalBalance) - parseInt(qua));
     
    }else if(arrEl.type ==='expense')
    {
      let aqua = arrEl.amount;
      this.totalExpense = this.totalExpense - (parseInt(aqua));
      this.totalBalance = (parseInt(this.totalBalance)+parseInt(aqua));
      
    }
    this.dummy.splice(i, 1);
  }
  refresh() {
    setInterval(function () {
      document.location.reload();
    }, 100);
    window.localStorage.removeItem('dummy');
  }

  ngOnInit(): void {
  }

}
