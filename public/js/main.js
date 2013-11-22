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
	var document_id = $('#document-id').val();
	var title = $('#document-title').val();
	var body = myEditor.getEditorHTML();
	
	$.ajax({
		url : "/action/create_version",
		type : "post",
		dataType : "json",
		data : {
			'document_id' : document_id,
			'title' : title,
			'body' : body
		},
		success : function(response) {
			if (response.dt) {
				alert('Version successfully created on' + new Date(response.dt));
				console.log(response.dt);
			}
		}
	});
	
});


$('.header-versions').on("click", function(){
	var document_id = $('#document-id').val();
	
	$.ajax({
		url : "/api/read_versions_by_document_id",
		type : "get",
		dataType : "json",
		data : {
			'document_id' : document_id
		},
		success : function(response) {
			if (response.results) {
				console.log(results);
				window.location = '/document/' + document_id + '/versions';
			}
		}
	});
	
});
