// JavaScript Document
$(document).on("pageinit", function(){
	$.ajax({
		url:"apollo.xml",
		cache:false,
		dataType:"xml",
		success: function(xml){
			$('#inventoryList').empty();
			$(xml).find('apollo').each(function(){
				var info= '<li data-id='+$(this).find("ID").text()
				+'><a href='+$(this).find("thelink").text()
				+'><img src='+$(this).find("Patch").text()
				+' style="width = 80px; height= 80px"><h1>Flight: '+$(this).find("Flight").text()
				+'</h1><p>Crew: '+$(this).find("Crew").text()
				+'</p><p>Spacecraft: '+$(this).find("Spacecraft").text()
				+'</p><p>Notes: '+$(this).find("Notes").text()+'</p></a></li>';
				$('#inventoryList').append(info).listview('refresh');});
		}
	});
});