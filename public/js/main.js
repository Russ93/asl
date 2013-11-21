var date = Math.round((new Date()).getTime() / 1000);
console.log(date);

var dt = new Date(date);
console.log(dt);

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


$('.header-create-version').on("click", function(){
	alert('DICK');
	
	$.ajax({
		url : "/action/create_version",
		type : "post",
		dataType : "json",
		data : {
			'documentId' : document_id,
			'title' : title,
			'body' : body
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
