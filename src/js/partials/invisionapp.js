// Checking for filling the form fields
$('.invisionapp-subscription-form button').click(function(e) {

	$('.invisionapp-subscription-form input').each(function() {

		if( $(this).val() == '' ) {
			$(this).css('border', '2px solid red');
			e.preventDefault();
			return;
		}
		if( $(this).val() != '' ) {
			$(this).css('border', 'transparent' );
			e.preventDefault();
		}
	});
});

$('.invisionapp-subscription-form input').focus(function() {
	$(this).css('border', '2px solid #3FB007');
});
$('.invisionapp-subscription-form input').blur(function() {
	$(this).css('border', 'transparent');
});