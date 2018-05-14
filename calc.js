$(document).ready(function() {
	//  function clearDisplay(){
	//   $(function(){
	//     $('#display').val("5");
	//   });
	// }

	$('#clearButton').on('click', function() {
		firstValue.splice(0, firstValue.length);
	});
	// var result = 0;
	// $('button').click(function() {
	//   let val = $(this).val();
	//   result =$('#display').val(val);
	// });
	let firstValue = [];
	$(function() {
		$('button').on('click', function() {
			let val = $(this).val();
			firstValue.push(Number(val));
			console.log(firstValue);
			for (let i = 0; i < firstValue.length; i++) {
				$('#output').val(firstValue[i]);
			}
		});
	});
});
