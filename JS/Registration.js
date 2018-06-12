function registration(reg) {


var regNumber = reg || {} ;
var regNo = '' ;


function regNum(regN) {
// for (var i = 0 ; i < regN.length; i++ )
if (regNum[regNumber]=== undefined &
    regN.startsWith('CA') || regN.startsWith('CL') ||regN.startsWith('CJ') ||
    regN.startsWith('CK') ){
        regNumber[regN] =0;
        return true;
}
    return false;
  }

  function getMap() {
    regNumber
  }


  function storage(){
    return  Object.keys(regNumber);
  }

return{
  regNum,
  getMap,
  storage
}
}
