(function(window){
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var App=window.App;
  var Truck=App.Truck;
  var DataStore=App.DataStore;
  var FormHandler=App.FormHandler;
  var myTruck=new Truck('ncc-123',new App.DataStore());
  window.myTruck=myTruck;
  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  console.log(formHandler);
})(window);
