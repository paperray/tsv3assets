// LOGIN FORM VALIDATION SCRIPTS
$('.has-feedback .form-control').blur(function(){
	var parent = $(this).parent('.has-feedback');
	parent.find('.input-group-addon, .input-group-addon i').css("backgroundColor", "#f5f5f5");
	var fieldname = "Field";

	fieldname = $(this).data('value');

	var fieldPlaceholder = $(this).data('value');
	var fieldValue = $(this).val();

	if (fieldValue.length == 0 || fieldValue == fieldPlaceholder) {
		// field empty
		parent.removeClass('has-success').addClass('has-error');
		$("#error-message").html(fieldname + " can't be blank!");
		$(this).val(fieldPlaceholder);

		if($(this).hasClass('login-password')) {
			$(this).attr('type', 'text');
		}

	} else if ($(this).val().length < 6) {
		// field has les than 6 chars
		parent.removeClass('has-success').addClass('has-error');
		$("#error-message").html(fieldname + " must have minimum 6 characters!");
	} else {
		// validation positive
		parent.addClass('has-success').removeClass('has-error');
		$("#error-message").html("");
	}
});

$('.has-feedback .form-control').focus(function(){
	var parent = $(this).parent('.has-feedback');
	parent.removeClass('has-error has-success');
	parent.find('.input-group-addon, .input-group-addon i').css("backgroundColor", "#fff");

	var fieldPlaceholder = $(this).data('value');
	var fieldValue = $(this).val();
	console.log('placeholder: ' + fieldPlaceholder + " & value: " + fieldValue);
	if(fieldValue == fieldPlaceholder) {
		$(this).val("");
	}

	if($(this).hasClass('login-password')) {
		if($(this).attr('type', 'text')) {
			$(this).attr('type', 'password');
		}
	}
});

function shakeForm() {
	var p = [5, 10, 5, 0, -5, -10, -5, 0];
	var x = $('.shake').offset().left;
	var speed = 12;
	for(var i = 0; i < 2; i++) {
		$.each(p, function() {
			$('.shake').animate({'left': this }, speed);
		});
	}
}

$('#login-submit').click(function(e){
	e.preventDefault();
	if($(this).attr('disabled', 'false')) {

		$('#error-message').text('');
		var form = $('#login-form');
		var rememberme;
		($('#myonoffswitch').is(":checked")) ? rememberme = 1 :	rememberme = 0;

		data = {
			username : $("[name='username']", form).val(),
			password : $("[name='password']", form).val(),
			rememberme : rememberme,
		}
		
		$.ajax({
			type: 'POST',
			url: 'http://31.192.124.222/login',
			data: data,
			success: function(data){
				if(data == 1){
					location.reload();						
				}else{
					$('.has-feedback').removeClass('has-success').addClass('has-error');
					$('#error-message').html(data);
					$('#login-submit').removeAttr('disabled');
					shakeForm();
				}
				
			}
		});

		}		
	});