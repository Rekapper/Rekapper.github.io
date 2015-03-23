// JavaScript Document

$(document).ready(function() {
    
	$.ajax({
		url:"albums.xml",
		cache:false,
		dataType:"xml",
		success: function(xml){
			$('#tab1').empty();
			$('#tab2').empty();
			$('#tab3').empty();
			$('#tab4').empty();
		//find each record - albums here is the name of the table	
			$(xml).find('albums').each(function(){
		//Create the set of data using the fields in the XML		
			var info = '<li><div class="leftCol"><br><img name="pic" src=../images/'+$(this).find("CoverArt").text()+' ' +'width="150" height="150"></div>'+ '<br>' +
			'<div><span class="head">Album: </span>' +
			'<span class="trivia">' + $(this).find("AlbumTitle").text() + '</span><br>' +
			'<span class="head">Released: </span>' + '<span class="trivia">'+ $(this).find("ReleaseDate").text() + '</span><br>' +
			'<span class="head">Notes: </span>' + '<span class="trivia">' + $(this).find("Notes").text() + '</span><br><br>' +
			'<a href=' + $(this).find("TheLinks").text()+ '>' +
			'<span class="head">More Information</span>' + '</a></div><br>' +
			'</li><br>';
		//Sort the XML data using if statements	for display in the corresponding tab
			if($(this).find("StudioAlbum").text() =='1')
				$('#tab1').append(info);
			if($(this).find("LiveAlbum").text() =='1')
				$('#tab2').append(info);
			if($(this).find("Compilation").text() =='1')
				$('#tab3').append(info);
			if($(this).find("BoxSet").text() =='1')
				$('#tab4').append(info);	
			}
		);
	}
});
});

				