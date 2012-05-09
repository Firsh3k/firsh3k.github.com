$(document).ready(function() {

	$('.audio').each(function(){

		audio_file = $(this).attr('href'); 

		$(this).flash(
			{
				swf: '_includes/JB/audioplayer/flash/audioplayer.swf',
				flashvars:
				{
					soundFile: audio_file
				}
			}
		);

	});

});          
