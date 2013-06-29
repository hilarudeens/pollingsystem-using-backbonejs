(function(){
    /**
	 * Function to update vote count.
	 */
	function updatePollCount(name) {
		var cCount = document.getElementById(name);
		var votes = cCount.innerHTML;
		votes++;
		cCount.innerHTML = votes;
	}
})();