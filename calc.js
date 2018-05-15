//   let firstValue = [];
//   let $output = '';
//
// $(document).ready(function() {
//   $('#clearButton').on("click",function(){
//     while(firstValue.length > 0){
//       firstValue.pop();
//     }
//   });
//
//   $('#equalsButton').on("click",function(){
//     alert($output);
//   });
//
//   $('#addButton').on("click",function(){
//     alert($output);
//   });


   //  $('button').on("click", function(){
   //   let value = $(this).val();
   //   firstValue.push(Number(value));
   //   $('#output').html('');
   //   if($(this).attr('value')){
   //     for(let i = 0; i < firstValue.length; i++) {
   //       if(firstValue[0]==0){
   //         firstValue.pop();
   //       } else{
   //        $('#output').append(firstValue[i]);
   //        $output = $('#output').html();
   //       }
   //     }
   //     // console.log($output);
   //   } else{
   //
   //   }
   // });



// });
var operators = [$(addButton),$(subtractButton),$(multiplyButton),$(divideButton)];

$("button").on("click", function(){
  if($(this).attr('data-role')!='operator'){
    $('#output').html($('#output').html()+$(this).val());
  } else{
    if($('#output').val()!=''){
      $('#output').html($('#output').html()+$(this).val());
    }
  }
});

$("#clearButton").on("click",function(){
  $('#output').html('');
});

$("#equalsButton").on("click", function(){
  var expression = $('#output').html();
  $('#output').html(eval(expression));
});

