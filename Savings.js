const {Account}=require('./Account');
class Saving extends Account{
    constructor(accNum,Name,accBal){
        super(accNum,Name);
        this.accBal=accBal;
    }
    deposit(value){
        if(isNaN(value)==true){
            return "enter valid amount";
        }
        else{

        
       var bal=this.accBal+value;
      return `${this.getAccountDetails()}, Account Balance: ${bal}`;
    }
}
    withdraw(value){
        if(isNaN(value)==true){
            return "enter valid amount";
        }else{

        
        if(this.accBal<value){
            return "Imsufficient balance"
        }
        else 
        {
            var bal=this.accBal-value;
            return `${this.getAccountDetails()}, Account Balance: ${bal}`;
        }
    }
}
    interest(){
        if(this.accBal<1000){
        var interest=1000-(this.accBal*10/100);
        return `${this.getAccountDetails()}, Account Balance: ${this.accBal}, Interest: ${interest}`;
    }
    else{
        return "No interest has to be paid"
    }
}
}
const savingAccount = new Saving(12345, "shubham", 500);
console.log(savingAccount.deposit(1000));
console.log(savingAccount.interest());
console.log(savingAccount.withdraw(2000));
console.log(savingAccount.withdraw(200));