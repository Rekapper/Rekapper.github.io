// JavaScript Document

$(document).ready(function() {
    
	$.ajax({
		url:"menu.xml",
		cache:false,
		dataType:"xml",
		success: function(xml){
			$('#tab1').empty();
			$('#tab2').empty();
			$('#tab3').empty();
			$('#tab4').empty();
		//find each record - albums here is the name of the table	
			$(xml).find('menu').each(function(){
		//Create the set of data using the fields in the XML		
			var info = '<ul>'+'<li class="head">'+$(this).find("dish").text()+'</li>' + 
					   '<li>'+$(this).find("description").text() +'</li>' +
			           '<li>'+$(this).find("price").text() + '</li>'+'</ul>';
		//Sort the XML data using if statements	for display in the corresponding tab
			if($(this).find("appetizer").text() =='1')
				$('#tab1').append(info);
			if($(this).find("entree").text() =='1')
				$('#tab2').append(info);
			if($(this).find("dessert").text() =='1')
				$('#tab3').append(info);
			if($(this).find("beverage").text() =='1')
				$('#tab4').append(info);	
			}
		);
	}
});
});

				