class Account{
    constructor(accNum,Name){
        this.accNum=accNum;
        this.Name=Name;
        
    }
    getAccountDetails() {
        return `Account number : ${this.accNum}, Name: ${this.Name}`;
      
    }
}

module.exports={Account};









