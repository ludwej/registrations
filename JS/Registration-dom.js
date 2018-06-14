var input = document.querySelector('.Input')
var AddBTN = document.querySelector('.AddBTN')
var Output = document.querySelector('ul')
var ClearBTN = document.querySelector('.ClearBTN')
var Towns = document.querySelector('.Location')

// var Town = document.querySelector('.Town')

var storing = localStorage.getItem('regNumber') ? JSON.parse(localStorage.getItem('regNumber')) : {};
// var localstoring=storing;
// \ console.log(localStorage.getItem('regNumber'));
// console.log(regNumber);
// var storedLocal = storage ? JSON.parse(storage) : {};


var factoryF = Registration();

function list(regNo) {
  var newList = document.createElement("ul");
  newList.textContent = regNo ;
  Output.appendChild(newList);


}
function dom() {
  var textedEntered = input.value ;
  console.log(textedEntered);
  factoryF.regNum(textedEntered)
  list(textedEntered)

localStorage.setItem('regNumber', JSON.stringify(factoryF.getMap()))
// console.log(factoryF.getMap());
}


function filterTowns(locations) {
    var optionValue =   Towns.value ;
    var getFilter = factoryF.filter(optionValue) ;
    for (var i = 0; i < getFilter.length; i++) {
      getFilter[i]
    }
      return getFilter ;
}

AddBTN.addEventListener('click' ,dom)


//
// function clearBtn() {
//   localStorage.removeItem('stored');
//   Output.innerHTML ='' ;
//   location.reload()
//   localStorage.clear()
// }
//
// ClearBTN.addEventListener('click', clearBtn);
