// close other audio players
// called by audio player when click on play button 
function ap_stopAll(player_id)
{
	$('.audio_flash').each(function(){
		if($(this).attr('id') != player_id)
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

	$('.audio').each(function() {
		audio_file = $(this).attr('href'); 
		audio_title = $(this).text();
		audio_id = $(this).attr('id');
		
		div = $('<div class="audio_flash" id="' + audio_id + '"></div>');		
		$(this).after(div);
		$(this).after(audio_title);
		$(this).remove();
		div.flash(
			{
				swf: 'flash/audioplayer.swf',
				flashvars:
				{
					soundFile: audio_file,
					playerID: "'" + audio_id + "'",
					quality: 'high',
					lefticon: '0xFFFFFF',
					righticon: '0xFFFFFF',
					leftbg: '0x357CCE',
					rightbg: '0x32BD63',
					rightbghover: '0x2C9D54',
					wmode: 'transparent'
				},
				height: 50
			}
		);
	});

});
