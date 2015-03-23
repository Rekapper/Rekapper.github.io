// JavaScript Document
$(document).on("pageinit", function(){
	$.ajax({
		url:"model.xml",
		cache:false,
		dataType:"xml",
		success: function(xml){
			$('#inventoryList').empty();
			$(xml).find('packet').each(function(){
				var info= '<li data-id='+$(this).find("ID").text()
				+'><a href=#page1'
				+'><img src=images/'+$(this).find("pic").text()
				+'><h1>Location: '+$(this).find("Location").text()
				+'</h1><p>Cost: '+$(this).find("cost").text()
				+'</p><p>Notes: '+$(this).find("notes").text()+'</p></a></li>';
				$('#inventoryList').append(info).listview('refresh');});
		}
	});
	$('#inventoryList').on("click","li",function(){
		whichOne=($(this).attr("data-id"));
	$.ajax({
		url:"model.xml",
		cache:false,
		dataType:"xml",
		success: function(xml1){
			$(xml1).find('packet').each(function(){
				currentOne = ($(this).find("ID").text());
				currentLocation = ($(this).find("Location").text());
				currentPrice = ($(this).find("cost").text());
				currentPic = ($(this).find("pic").text());
				a = ($(this).find("link").text());
				e = ($(this).find("x").text());
				f = ($(this).find("y").text());
			
				
				if(currentOne==whichOne){

				window.Locational = currentLocation;
				window.C = currentPrice;
				window.x = e;
				window.y = f;
                window.P = currentPic
				initialize();
					$('#theLocation').text(currentLocation);
					$('#theCost').text(currentPrice);
					$('#thePic').html('<img src=images/'+currentPic+' height="112" width="150" />');
					$('#SC').html('<iframe width="100%" height="166" scrolling="no" frameborder="no" src='+a+'></iframe>');	
					$('#footerText').text(currentLocation);
				}
			})
		}});
	});
});
function add(){
//var	currentLocation = document.getElementById('theLocation').innerHTML
//var	currentPrice = document.getElementById('theCost').innerHTML
    simpleCart.add('name='+Locational+'', 'price='+C+'','size=Default','quantity=1','thumb=images/'+P+'');
    //simpleCart.add({name:Locational,price:C,quantity: 1});
}
function initialize(){
			    var myLatlng = new google.maps.LatLng(x,y);
			    var mapOptions = {zoom: 7, center: myLatlng}
				var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
				var marker = new google.maps.Marker({position: myLatlng, map: map, title: 'Recording Location'});
				google.maps.event.trigger(map, "resize");    			
}
function color(){
var styles = localStorage.getItem("style");
    if(styles == 1){   $('link[href="style.css"]').attr('href','style2.css');
localStorage.setItem("style","2");}
    else {$('link[href="style2.css"]').attr('href','style.css');
          localStorage.setItem("style","1");}
}