

export  function  validateImage(imgPath){
	  //return(imgPath.match(/\.(jpeg|jpg|gif|png)$/) != null);
	let format = imgPath.substr(imgPath.length -3)

	if( (format == 'jpg') || (format == 'gif') || (format == 'png') ){
		return imgPath
	}
	else{
		console.error("Not an image");
	}
	  	
}

