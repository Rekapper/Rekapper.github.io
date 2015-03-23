// JavaScript Document
$(document).ready(function() {
	$.ajax({
		url:"apollo.xml",
		cache:false,
		dataType:"xml",
		success: function(xml){
			$('#content').empty();
			
			$(xml).find('apollo').each(function(){
			var info = 
			'<li class = "myList">Flight: '+
			$(this).find("Flight").text() + 			
			'<br><a href='+$(this).find("thelink").text() + 
			'>More information</a><br>'+
			'<img src=' +$(this).find("Patch").text() + ' '+
			'width = "130" height= "128">' +
			'</li>';
			
			$('#content').append(info);
			});
		}
	});
});
			