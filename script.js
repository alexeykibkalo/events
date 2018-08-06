function change (e) {
	e.preventDefault();
	if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){		
		var div = document.getElementsByTagName("div");
		var textarea = document.createElement('textarea');
		document.body.removeChild(div[0]);
		document.body.appendChild(textarea);		
	}
	else if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
		textarea = document.getElementsByTagName("textarea");
		var value = textarea[0].value;
		div = document.createElement("div");		
		document.body.removeChild(textarea[0]);
		document.body.appendChild(div);
		div.innerHTML= '<a>'+value+'</a>';
	}
	else if (e.keyCode == 27) {
		textarea = document.getElementsByTagName("textarea");
		div = document.createElement("div");		
		document.body.removeChild(textarea[0]);
		document.body.appendChild(div);
	}
	else{
		textarea = document.getElementsByTagName("textarea");
		textarea[0].value+=String.fromCharCode(e.keyCode );
	}

}
document.addEventListener('keydown', change);



