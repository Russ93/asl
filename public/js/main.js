$('.landing-create-document').on("click", function() {

	console.log("click");

	var regex_owner = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

	var owner = $('#landing-create-email').val();
	var title = $('#landing-create-title').val();

	valid = true;

	if (!regex_owner.test(owner)) {
		valid = false;
	}
	
	if (title.length === 0) {
		valid = false;
	}
	
	if (valid == false) {
		var errorHtml = '<span>Please fill out the form completely and correctly. Be sure the check the hints in each field!<span></br>';
		$('#landing-error').html(errorHtml);
		return;
	}
	
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

$('.header-create-version').on("click", function() {
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

$('.header-versions').on("click", function() {
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

$('.header-versions').on("click", function() {
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

$('.header-download-live').on("click", function() {
	alert('Download Feature Coming Soon');

});

$('.header-share').on("click", function() {
	alert('Download Feature Coming Soon');

});

$('.header-toolbar').on("click", function() {
	$('.document-header-toolbar').slideToggle();
});
