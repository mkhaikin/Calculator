
$("button").on("click", function(){
    if($(this).attr("value")){
      $('#output').text($('#output').html()+$(this).text());
      $('#display').val($('#display').val()+$(this).text());
      console.log($(this).text());
    } else{
	     if($('#output').text()!=''){
         if(this.id == 'equalsButton'){
           $('#output').html($('#output').html());
           console.log($(this).text());
         } else if(this.id == 'divideButton'){
           $('#display').val('');
           $('#output').html($('#output').html()+ "/")
           }else {
             $('#output').html($('#output').html()+$(this).text());
             $('#display').val('');
             console.log($(this).val());
           }
       }
     }
});

$("#clearButton").on("click",function(){
	$('#output').html('');
	$('#display').val('');
});

$("#equalsButton").on("click", function(){
	var expression = $('#output').text();
	var total = (eval(expression));
	$('#display').val(total);
	console.log(total);
});
