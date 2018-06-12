describe('Registrations', function(){
  it('It should display a registration number when a registration number is added in the text field ', function(){
    var factoryF = registration();

   assert.equal(factoryF.registrationNo("CA 123456"), true);
   
    });





        });
