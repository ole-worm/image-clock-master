	function jsonFlickrApi (response) {
	  console.log(
	     "Got response from Flickr-API with the following photos: %o", 
	     response.photos
	     
	  );	
		  	//console.log(response.photos.photo.length);

  	  		for (i = 1; i < 501; ++i) {

		    		console.log(response.photos.photo[i]);

		    		var item = response.photos.photo[i];

			    	//build the url of the photo in order to link to it
				    var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_n.jpg'

	   			    //turn the photo id into a variable
				    var photoID = item.id;
	 			
						//create an imgCont string variable which will hold all the link location, title, author link, and author name into a text string
	                    var imgCont = '<div class="image-bg hiding" id="' + i + '"style="width:320;height:240;background-size:cover;background-repeat:no-repeat;background-position:center;background-image: url(' + photoURL + ');">'+'</div>';
	                    
	                    //append the 'imgCont' variable to the document
		                $(imgCont).appendTo('#image-container');

					console.log(i);

			}

	}


	function makeVisible(){
		var rando = Math.floor((Math.random() * 501) + 1);
		//console.log(rando);
		var element1 = document.getElementById(rando);
		element1.classList.toggle('visible');
		//console.log(element1);
		setTimeout(function(){element1.classList.toggle('visible');},2000);
	}

	 var refresh=6000; // Refresh rate in milli seconds
	 mytime=setInterval('makeVisible()',refresh);