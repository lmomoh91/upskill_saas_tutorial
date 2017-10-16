/*global $, Stripe */
//Document ready.
$(document).on('turbolinks:load', function(){
  var theform = $('#pro_form')
  var submitBtn = $('#form-submit-btn');
  //Set Stripe Public Key 
  Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
  
  //When Users click form submit btn,
  submitBtn.click(function(event){
    //prevent default submission behavior.
    event.preventDefault();
    
    //collect the CC info fields.
    var ccNum = $('#card_number').val(), 
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
    
    //Send the card info to Stripe.
    Stripe.createToken({
      number: ccNum,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripeResponseHandler);
    
  });
  
  
  
  //Stripe will return card token.
  //Inject Card token as hidden filed in form.
  //Submit for to rails app.
});
