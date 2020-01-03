function checkCashRegister(price, cash, cid) {
    
    let obj = {};
    let change = [];
    let changeNeeded = cash - price;
    changeNeeded = Math.round(changeNeeded * 100) / 100;
    console.log(`changeNeeded ${changeNeeded}`);
    let totalInDrawer = 0;
    let status = "";
    let insuf = "INSUFFICIENT_FUNDS";
    let open = "OPEN";
    let closed = "CLOSED";

    let hundoValue = cid[8][1]; 
    let twentyValue = cid[7][1];
    let tenValue = cid[6][1];
    let fiveValue = cid[5][1];
    let dollarValue = cid[4][1]; 
    let quarterValue = cid[3][1]; 
    let dimeValue = cid[2][1]; 
    let nickelValue = cid[1][1]; 
    let pennyValue = cid[0][1];

    let totalChange = function () {
        let total = 0;
          for(let i=0; i < cid.length; i++) {
              total += cid[i][1];
          }
          totalInDrawer = Math.round(total * 100) / 100
          console.log("total in drawer: " +totalInDrawer);
      }
        
    totalChange();


   
    let cashDrawer = {};
    //turn cid into an object for later functions
    let arrayToObj = function (item) {
        cashDrawer[item[0]] = item[1];
       // console.log("array to object complete");
    };
    //take each item and make it into key value pair in cashDrawer object w/ arrayToObject
    cid.forEach(arrayToObj);
    console.log(cashDrawer);

    if ( changeNeeded === totalInDrawer) {
        console.log("equal change");
        status = closed;
        change = cid;
        obj.status = status;
        obj.change = change;
        console.log(obj);
        return obj; 
        }

    if (changeNeeded > totalInDrawer) {
        console.log(`second if: ${changeNeeded}  >  ${totalInDrawer}`);
        status = insuf;
        change = [];
        obj.status = status;
        obj.change = change;
        console.log(obj);
        return obj;
    } else {

        let changeToBeGiven = changeNeeded;
        let cTHBG = cid; //change that has been given (cTHBG) = cid
        for (let i = 0; i < cTHBG.length; i++) {
            cTHBG[i][1] = 0;
        }
       // console.log(cTHBG);


        while (changeToBeGiven > 0) {
            obj.status = open; 
            switch(true) {
                case (hundoValue > 0 &&(changeToBeGiven / 100) >= 1 ):
                    console.log(`give $100`);
                    hundoValue -= 100;
                    changeToBeGiven -= 100;
                    changeToBeGiven = Math.round(changeToBeGiven * 100) / 100;
                    cTHBG[6][1] += 100;
                    console.log(`Change left ${changeToBeGiven}`);
                    break;
                case (twentyValue > 0 &&(changeToBeGiven / 20) >= 1 ):
                    console.log(`give $20`);
                    twentyValue -= 20;
                    changeToBeGiven -= 20;
                    changeToBeGiven = Math.round(changeToBeGiven * 100) / 100;
                    cTHBG[7][1] += 20;
                    console.log(`Change left ${changeToBeGiven}`);
                    break; 
                case (tenValue > 0 &&(changeToBeGiven / 10) >= 1 ):
                    console.log(`give $10`);
                    tenValue -= 10;
                    changeToBeGiven -= 10;
                    changeToBeGiven = Math.round(changeToBeGiven * 100) / 100;
                    cTHBG[6][1] += 10;
                    console.log(`Change left ${changeToBeGiven}`);
                    break; 
                case (fiveValue > 0 &&(changeToBeGiven / 5) >= 1 ):
                    console.log(`give $5`);
                    fiveValue -= 5;
                    changeToBeGiven -= 5;
                    changeToBeGiven = Math.round(changeToBeGiven * 100) / 100;
                    cTHBG[5][1] += 5;
                    console.log(`Change left ${changeToBeGiven}`);
                    break;  
                case (dollarValue > 0 &&(changeToBeGiven / 1) >= 1 ):
                    console.log(`give $1`);
                    dollarValue -= 1;
                    changeToBeGiven -= 1;
                    changeToBeGiven = Math.round(changeToBeGiven * 100) / 100;
                    cTHBG[4][1] += 1;
                    console.log(`Change left ${changeToBeGiven}`);
                    break; 
                case (quarterValue > 0 &&(changeToBeGiven / .25) >= 1 ):
                    console.log(`give $0.25`);
                    quarterValue -= .25;
                    quarterValue = Math.round(quarterValue * 100) / 100;
                    changeToBeGiven -= .25;
                    changeToBeGiven = Math.round(changeToBeGiven * 100) / 100;
                    cTHBG[3][1] += .25;
                    console.log(cTHBG[3][1] + " given to change");
                    console.log(`Change left ${changeToBeGiven}`);
                    break;
                case (dimeValue > 0 &&(changeToBeGiven / .1) >= 1 ):
                    console.log(`give $0.10`);
                    dimeValue -= .1;
                    dimeValue = Math.round(dimeValue * 100) / 100;
                    changeToBeGiven -= .1;
                    changeToBeGiven = Math.round(changeToBeGiven * 100) / 100;
                    cTHBG[2][1] += .1;
                    console.log(`Change left ${changeToBeGiven}`);
                    break;
                case (nickelValue > 0 &&(changeToBeGiven / .05) >= 1 ):
                    console.log(`give $0.05`);
                    nickelValue -= .05;
                    nickelValue = Math.round(nickelValue * 100) / 100;
                    changeToBeGiven -= .05;
                    changeToBeGiven = Math.round(changeToBeGiven * 100) / 100;
                    cTHBG[1][1] += .05;
                    console.log(`Change left ${changeToBeGiven}`);
                    break;      
                case (pennyValue > 0 &&(changeToBeGiven / .01) >= 1 ):
                    console.log(`give $0.01`);
                    pennyValue -= .01;
                    pennyValue = Math.round(pennyValue * 100) / 100;
                    changeToBeGiven -= .01;
                    changeToBeGiven = Math.round(changeToBeGiven * 100) / 100;
                    cTHBG[0][1] += .01;
                    console.log(`Change left ${changeToBeGiven}`);
                    break;                
                default:
                    status = insuf;
                    obj.status = status;
                    obj.change = [];
                    console.log("default hit");
                    console.log(obj);
                    return obj;  
            }
        }
    
         obj.status = open;
            obj.change = cTHBG.filter((element => element[1] > 0));
            obj.change.forEach(element => element[1] = Math.round(element[1] * 100) / 100);
            obj.change.reverse();
            //console.log(`return obj: ${obj}`);
            console.log(obj);
            return obj;

    }


}