// JavaScript Document
//call this once after all the document parts have loaded
$(document).ready(function() {
	//call using jQuery ajax
	$.ajax({
		url:"albums.xml",
		cache:false,
		dataType:"xml",
		success: function(xml){
			$('#contents').empty();
			//find each record - albums here is the name of the table
			$(xml).find('albums').each(function() {
            //Create the set of data using the fields in the XML
			var info = 
			'<div class="leftCol"><img src=../images/'+
			$(this).find("CoverArt").text()+' width="150" height="150">' +
			'</img></div><div class="rightCol"><strong>Album: ' +
			'<a href=' + $(this).find("TheLinks").text()+'>'+  
			$(this).find("AlbumTitle").text()+'</a></strong>' + 
			'<br>Released: '+$(this).find("ReleaseDate").text() +
			'<br>'+'Notes: ' + 
			$(this).find("Notes").text()+
			'</div> <br class="clearIt">' 
			//Add the information in info to the display
			$('#contents').append(info);
            });//close the each.function
		}//close the success function
	});//close the ajax function
    
});