var date = Math.round((new Date()).getTime() / 1000);
console.log(date);

var dt = new Date(date);
console.log(dt);

/*----------------SOCKET STUFF------------------*/

/*----------------END SOCKET STUFF------------------*/

$('.landing-create-document').on("click", function() {

	console.log("click");

	var owner = $('#landing-create-email').val();
	var title = $('#landing-create-title').val();
	//Ajax call - create doc
	$.ajax({
		url : "/action/create_document",
		type : "post",
		dataType : "json",
		data : {
			'owner' : owner,
			'title' : title
		},
		success : function(response) {
			if (response.document_id) {
				console.log("end");
				console.log(response.document_id);
				window.location = '/document/' + response.document_id;
			}
		}
	});
});