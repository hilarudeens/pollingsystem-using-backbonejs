/**
 * Note: I have written following jQuery code for better understanding. 
 * So I have given name for anonymous function and event callback function where such a name is not mandatory.
 * You can do the same functionality without multi-step code.
 */
$(function onAfterPageLoad(){
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
});