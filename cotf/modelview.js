// JavaScript Document
$(document).on("pageinit", function(){
	$.ajax({
		url:"model.xml",
		cache:false,
		dataType:"xml",
		success: function(xml){
			$('#inventoryList').empty();
			$(xml).find('computer').each(function(){
				var info= '<li data-id='+$(this).find("ID").text()
				+'><a href=#page1'
				+'><img src=images/'+$(this).find("pic").text()
				+'><h1>Model: '+$(this).find("model").text()
				+'</h1><p>Brand: '+$(this).find("brand").text()
				+'</p><p>Cost: '+$(this).find("cost").text()
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
			currentInterest = $(xml1).find('standards').find("interestRate").text();
			currentSalesTax = $(xml1).find('standards').find("salesTax").text();
			$(xml1).find('computer').each(function(){
				currentOne = ($(this).find("ID").text());
				currentBrand = ($(this).find("brand").text());
				currentModel = ($(this).find("model").text());
				currentPrice = ($(this).find("cost").text());
				currentPic = ($(this).find("pic").text());
				currentTerm = ($(this).find("term").text());
				
				
				if(currentOne==whichOne){
					$('#theBrand').text(currentBrand);
					$('#theModel').text(currentModel);
					$('#theCost').text(currentPrice);
					$('#thePic').html('<img src=images/'+currentPic+' height="112" width="150" />');
					$('#P').val(currentPrice);
					$('#T').val(currentSalesTax);
					$('#N').val(currentTerm);
					$('#R').val(currentInterest);
					$('#CompName').text(currentModel);
					calcIt();
					
				}
			})
		}});
	});
	function calcIt(){
		Amount = 0;
		currentModel = ($('#CompName').text());
		TotalPayments = parseFloat($('#N').val());
		Principal = parseFloat($('#P').val());
		TaxRate = parseFloat($('#T').val());
		Principal = parseFloat(Principal)*(1+parseFloat(TaxRate));
		Rate = (($('#R').val())/12)/100;
		Amount = Principal*(Rate*Math.pow(1+Rate,TotalPayments))/(Math.pow(1+Rate,TotalPayments)-1);
		$('#Answer').html('You can take home the '+currentModel + ' today for only $'+Amount.toFixed(2)+' a month for '+TotalPayments+' months.');
	}
	$('#calcButton').click(calcIt);
});