// JavaScript Document
//call this once after all the document parts have loaded
$(document).ready(function() {
	//call using jQuery ajax
	$.ajax({
		url:"a.xml",
		cache:false,
		dataType:"xml",
		success: function(xml){
			$('#contents').empty();
			//find each record - apollo here is the name of the table
			$(xml).find('step').each(function() {
            //Create the set of data using the fields in the XML
			var info = 
			'<div class="leftCol"><img src='+
			$(this).find("img").text()+' width="130" height="130">' +
			'</img></div><div class="rightCol"><strong>Step: ' +
			'<a href=' + $(this).find("thelink").text()+'>'+  
			$(this).find("Title").text()+'</a></strong>' +
			'<br>'+'Notes: ' + 
			$(this).find("Notes").text()+
			'</div> <br class="clearIt">' 
			//Add the information in info to the display
			$('#contents').append(info);
            });//close the each.function
		}//close the success function
	});//close the ajax function
    
});