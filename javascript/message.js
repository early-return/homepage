$(document).ready(function(){
	alert("bbb");
	var url = "http://api.duoshuo.com/threads/listPosts.jsonp?short_name=zhiqinglee&thread_key=message&page=1&limit=20";
	$.getJSON(url + "&callbak=?",
		function (data) {
			alert("aaa");
			alert(data.message);
		});
});