// JavaScript Document


$(document).ready(function() {
    
	$.ajax({
		url:"albums.xml",
		cache:false,
		dataType:"xml",
		success: function(xml){
			$('#studio').empty();
			$('#live').empty();
			$('#comp').empty();
			$('#box').empty();
			
			
			$(xml).find('albums').each(function(){
				
			var info = '<li><div class="leftCol"><br><img name="pic" src=../images/'+$(this).find("CoverArt").text()+' ' +'width="150" height="150"></div>'+ '<br>' +
			'<div><span class="head">Album: </span>' +
			'<span class="trivia">' + $(this).find("AlbumTitle").text() + '</span><br>' +
			'<span class="head">Released: </span>' + '<span class="trivia">'+ $(this).find("ReleaseDate").text() + '</span><br>' +
			'<span class="head">Notes: </span>' + '<span class="trivia">' + $(this).find("Notes").text() + '</span><br><br>' +
			'<a href=' + $(this).find("TheLinks").text()+ '>' +
			'<span class="head">More Information</span>' + '</a></div><br>' +
			'</li><br>';
			
			if($(this).find("StudioAlbum").text() =='1')
				$('#studio').append(info);
			if($(this).find("LiveAlbum").text() =='1')
				$('#live').append(info);
			if($(this).find("Compilation").text() =='1')
				$('#comp').append(info);
			if($(this).find("BoxSet").text() =='1')
				$('#box').append(info);	
			}
		);
	}
});
});
				