// close other audio players
// called by audio player when click on play button 
function ap_stopAll(player_id)
{
	$('.audio').each(function(){
		if($(this).attr('href') != player_id)
		{
			$(this).find('object')[0].SetVariable("closePlayer", 1);
		}
		else 
		{
			$(this).find('object')[0].SetVariable("closePlayer", 0);
		}
	});
}

$(document).ready(function() {

	$('.audio').each(function(){

		audio_file = $(this).attr('href'); 

		$(this).flash(
			{
				swf: 'flash/audioplayer.swf',
				flashvars:
				{
					playerID: "'" + audio_file + "'",
				    soundFile: audio_file
				}
			}
		);
	});
});