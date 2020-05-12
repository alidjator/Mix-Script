$( window ).load(function() {
	
	//var Result_Callback;
	//var Result_Date;
	//var Result_Comment;
		
	
	// $("#vResult").change(function() {
		
	// });
	
	
	$("#saveResult").click(function() {		
	//$(document).on('click', '#saveResult', function (e) {    
		
		//e.preventDefault();
		
		$("#saveResult").prop("disabled", true);
		
		var Parameter = $('#vResult').find("option:selected").val().split(":");
		var Result_Parameter = Parameter[0];
		var Result_Phone = $("#Phone_Result").val();
		
		//if(Parameter[1] == "N" && Parameter[2] == "N"){
			//var hh = callback;
			var Result_Flag = (Parameter[1] == "N" && Parameter[2] == "N") ? Result_Parameter : null;
		//}
		
		//else{
			//var hh = 0;
			//var Result_Flag = null;
		//}
		
		var Result_Callback = $("#Result_Callback").val();
		//var s = $("#lkpNo").val();
		//var o = $("#seqNo").val();
		
		var Result_Date = $("#Result_Date").val();
		//var Result_Paid = $("#Result_Paid").val();
		var Result_Comment = $("#Result_Comment").val();
		
		
		//var c = $("#kodeCabang").val();
		//var Contract_Number = $("#Contract_Number").val();
		
		//var Result_Phone = $("#Phone_Result").val();
		
		/*if(Parameter[1] == "N" && Parameter[2] == "N"){
			//var hh = callback;
			var Result_Flag = Result_Parameter;
		}
		else{
			//var hh = 0;
			var Result_Flag = null;
		}*/
		
		//if(Result_Callback){
			//var hh = callback;
			var Callback_Result = (Result_Callback) ? Result_Callback : null;
		//}
		//else{
			//var hh = 0;
			//var Callback_Result = null;
		//}
		
		//if(Result_Promise){
			//var hh = callback;
			var Date_Result = (Result_Date) ? Result_Date : null;
		//}
		//else{
			//var hh = 0;
			//var Promise_Result = null;
		//}
		
		//if(Result_Comment){
			//var hh = callback;
			var Comment_Result = (Result_Comment) ? Result_Comment : null;
		//}
		//else{
			//var hh = 0;
			//var Comment_Result = null;
		//}
		
		//var Result_Flag = (Result_Promise || Result_Comment) ? null : 1;
		
			var dedicatedOD = $("#dedicatedOverdue").val();

		// IF_RESULT_IS_TRUE
		if(Result_Parameter == 0){
		
			location.reload(true);
		}
		
		// ELSE
		else{

			if((Date_Result && Comment_Result) || Comment_Result || Result_Flag) {
				
				$.ajax({
					
					type: "POST",
					url: base_url + "C_Collection_Result",
					data: {
						
						Result_Parameter : Result_Parameter,
						Result_Date : Date_Result,
						Result_Comment : Comment_Result,
						Result_Phone : Result_Phone,
						Result_Callback : Callback_Result,
						dedicatedOverdue : dedicatedOD,
						
					},
					cache: false,
					beforeSend: function(){
						
						$( '#progress-overlay' ).fadeIn(100, function(){

							$( '#progress' ).css({ 'display': 'block' });
							$( '#progress' ).html("<img src='resources/assets/images/gears.svg?"+ Math.random() + "'/>");	

						})			
					
					},					
					success: function() {
						
						var Mark_Call_Back = $('#Mark_Call_Back').val();
						var Type_Call = $('#Type_Call').val();
						
						if(Mark_Call_Back == 1 || Type_Call == 0){
							
							setTimeout(function(){ 
							
							//alert("Hello");
								location.reload(false);
							
							}, 1500);
							
						}
						else{
							
							setTimeout(function(){ 
							
							//alert("Hello");
								location.reload(false);
							
							}, 1000);
							
						}
						
						//$( '#progress-overlay' ).fadeIn(100, function(){

							//$( '#progress' ).css({ 'display': 'block' });	

						//});
						//setTimeout(function(){ 
						
						//alert("Hello");
							//location.reload(false);
						
						//}, 3000);
						/*var url = window.location.href;
						$(location).attr('href',url);*/													
					}
				
				});
			
			} 
			
			else{
				
				$( '#progress-overlay' ).fadeOut(100, function(){

					$( '#progress' ).css({ 'display': 'none' });	

					$("#container-overlay").fadeIn(100,function(){
						
						$("#column-info").css({ 'z-index':'100', 'width': '320px', 'background': '#fff', 'position': 'fixed', 'left': '0', 'right': '0', 'top': '48px', 'margin': '0 auto', 'padding': '16px', 'box-sizing': 'border-box', 'display': 'block' });
						
						$("#info-text").html("SORRY, ALL FIELD CANNOT BE BLANK, THANK YOU FOR YOUR PATIENCE AND COOPERATION");
						$("#saveResult").prop("disabled", false);
					
					});								
				
				});			
				
				//})
			
			}
	
	
		}
		
		/*var today = Math.round(new Date().getTime()/1000.0);
		
		
		$.ajax({
			
			type: "POST",
			url: base_url + "C_Miscellaneous",
			data: {
				
				type : 1,
				today : today	
				
			},
			cache: false,
			beforeSend: function(){
				
				$( '#progress-overlay' ).fadeIn(100, function(){

					$( '#progress' ).css({ 'display': 'block' });	

				});			
			
			},													
			success: function(e) {
				
				
				if(e == 0){
					
					$("#container-overlay").fadeIn(100,function(){
					
						$("#time-difference").css({ 'z-index': '99', 'width': '320px', 'background': '#FFF', 'position': 'fixed', 'left': '0', 'right': '0', 'top': '48px', 'margin': '0 auto', 'box-sizing': 'border-box', 'padding': '16px', 'display': 'block' });
					
					
					});
				
				
					$("#time-difference-close").click(function() {
					//$(document).on('click', '#time-difference-close', function (e) {	

						//e.preventDefault();
						
						$("#time-difference").fadeOut(100, function() {
							
							location.reload(true);
						
						});


					});							
				
				}
				
				else{
					
					
				}

			}
		
		});*/
	
	});
	
	
	//$(document).ready(function(){
		
	/*$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})*/

	//})	
		

});
