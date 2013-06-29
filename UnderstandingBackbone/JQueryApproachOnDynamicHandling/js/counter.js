/**
 * Note: I have written following jQuery code for better understanding. 
 * So I have given name for anonymous function and event callback function where such a name is not mandatory.
 * You can do the same functionality without multi-step code.
 */
 
//To allow the user do experiment, jQuery document ready check is commented. 
//$(function onAfterPageLoad(){
    /**
	 * Function to update vote count.
	 */
	function updatePollCount(event){
		var elem = $(this).parent().siblings()[1];		
		var votes = $(elem).text();
		votes++; 
		$(elem).text(votes);
	}
	//Event binding to update vote count.
	$('.pollButton button').click(updatePollCount);
	
	/**
	 * Function to introduce another set of nominees in the Polling System.
	 */
	function newPollSet(nomineesList){			
		 var html = '<div class="pollList">';
			html += 	'<div class="pollName">{NAME}</div>';
			html += 	'<div id="cCount" class="pollCount">0</div>';
			html += 	'<div class="pollButton">';
			html += 		'<button>Vote</button>';
			html +=		'</div>';
			html += '</div>';
		var htmlCollection = [];	
		nomineesList.forEach(function(nominee){			
			htmlCollection.push(html.replace('{NAME}', nominee.name));
		});
		$('.pollBox').append(htmlCollection.join(''));
		$('.pollButton button').click(updatePollCount);
	}
	
//});