// OnLoad Run
window.addEventListener('load', function() {
    GetUrlParams();

    if (typeof AppMain.url_params.guid !== 'undefined') {
        AppMain.current_page = 'template';
    }
    else {
        AppMain.current_page = 'welcome';
    }
});

function GetUrlParams() {
	var url_params = new URLSearchParams(window.location.search);
	var entries = url_params.entries();
	var entries_dict = {};
	var entries_array = Array.from(entries);
	entries_array.forEach(function(entry) {
		entries_dict[entry[0]] = entry[1];
	});
	AppMain.url_params = entries_dict;
}

// Vue
var AppMain = new Vue({
    el: '#app-main',
    data: {
        current_page: '',
        url_params: {}
    }
})