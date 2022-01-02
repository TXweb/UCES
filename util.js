// Nav rollover script

function swapImg(imgName, imgPath, msg) 
{
	if (document.images)
	{
		if ((document.layers) && (!validateArg(document.images[imgName])))
		{
			var obj = parseLayers(document, imgName, 'images');
			obj.src = imgPath;
		} else {

			if (document.images[imgName])
			{
				document.images[imgName].src = imgPath;
			}
		}
		window.status = msg;
	}
}


// Screenshot Window Popup

function openGalleryWindow(url,width,height,scroll)
{
    var iMyWidth;
    var iMyHeight;
    iMyWidth = (window.screen.width/2);
    iMyWidth= iMyWidth - (width/2)
    iMyHeight = (window.screen.height/2) ;
    iMyHeight= iMyHeight - (height/2);
    var popup
    
    var s1 ="<TITLE>UCES Screenshot Gallery</TITLE> <link rel='STYLESHEET' type='text/css' href='styles.css'>" +    
    "<BODY onBlur='self.focus()' BGCOLOR='FFFFFF' marginwidth='0' marginheight='0' leftmargin='0' topmargin='0'><table width='100%' cellspacing='0' cellpadding='0' border='0'><TR>" +        
    "<td align='center' valign='top'>"       
      var s2 = "<br><img src='"+url+"'>"   
    var s3 =       "</TD></TR><TR><td align='center' valign='top'>"+    
    "<br><a href='javascript:window.close()' class='link'>CLOSE THIS WINDOW</a>" +                   
    "</TD></TR><TR><TD align='center' valign='middle' class='text'><br>&copy; 2003 UCES creative members</TD></TR></TABLE></BODY>" 
    
    popup = window.open("","gallery","status=no,height=" + height + ",width=" + width +",resizable=no,left=" + iMyWidth + ",top=" + iMyHeight + ",screenX=" + iMyWidth + ",screenY=" + iMyHeight + ",scrollbars="+scroll);
    popup.focus();
    popup.document.write(s1+s2+s3);  
    popup.document.close()

}



// Screenshot Window Popup with Pictureframe formatting

function openGalleryWindowFrame(url,width,height,scroll)
{
    var iMyWidth;
    var iMyHeight;
    iMyWidth = (window.screen.width/2);
    iMyWidth= iMyWidth - (width/2)
    iMyHeight = (window.screen.height/2) ;
    iMyHeight= iMyHeight - (height/2);
    var popup
    
    var s1 ="<TITLE>UCES Screenshot Gallery</TITLE> <link rel='STYLESHEET' type='text/css' href='styles.css'>" +    
    "<BODY onBlur='self.focus()' BGCOLOR='FFFFFF' marginwidth='0' marginheight='0' leftmargin='0' topmargin='0'><table width='100%' cellspacing='0' cellpadding='0' border='0'><TR>" +        
    "<td align='center' valign='top' class='pictureframe'>"       
      var s2 = "<br><img src='"+url+"'>"   
    var s3 =       "</TD></TR><TR><td align='center' valign='top'>"+    
    "<br><a href='javascript:window.close()' class='link'>CLOSE THIS WINDOW</a>" +                   
    "</TD></TR><TR><TD align='center' valign='middle' class='text'><br>&copy; 2003 UCES creative members</TD></TR></TABLE></BODY>" 
    
    popup = window.open("","gallery","status=no,height=" + height + ",width=" + width +",resizable=no,left=" + iMyWidth + ",top=" + iMyHeight + ",screenX=" + iMyWidth + ",screenY=" + iMyHeight + ",scrollbars="+scroll);
    popup.focus();
    popup.document.write(s1+s2+s3);  
    popup.document.close()

}



// New Window Popup

function openPopupWindow(url,width,height)
{
    var iMyWidth;
    var iMyHeight;
    iMyWidth = (window.screen.width/2);
    iMyWidth= iMyWidth - (width/2)
    iMyHeight = (window.screen.height/2) ;
    iMyHeight= iMyHeight - (height/2);
    var win2

    win2 = window.open(url,"UCES","status=no,height=" + height + ",width=" + width +",resizable=no, scrollbars=no, left=" + iMyWidth + ",top=" + iMyHeight + ",screenX=" + iMyWidth + ",screenY=" + iMyHeight + ",scrollbars=yes");
    win2.focus();
}

// Open A Window Script
var newWin = null;

function openInfoWindow(pageToLoad, winName, width, height, center) {
    xposition = 600; yposition = 300;
    if ((parseInt(navigator.appVersion) >= 4 ) && (center)) {
        xposition = (screen.width - width) - 30;
        yposition = ((screen.height / 2) - height) - 50;
    }
    args = "width=" + width + ","
    + "height=" + height + ","
    + "location=0,"
    + "menubar=0,"
    + "resizable=0,"
    + "scrollbars=1,"
    + "status=0,"
    + "titlebar=0,"
    + "toolbar=0,"
    + "hotkeys=0,"
    + "screenx=" + xposition + ","  //NN Only
    + "screeny=" + yposition + ","  //NN Only
    + "left=" + xposition + ","     //IE Only
    + "top=" + yposition;           //IE Only

	if (newWin != null && !newWin.closed) newWin.close();

    newWin = window.open(pageToLoad, winName, args);
	newWin.focus();
}

// Open A Window Script
var newWin = null;

function openInfoWindowFull(pageToLoad, winName, width, height, center) {
    xposition = 600; yposition = 300;
    if ((parseInt(navigator.appVersion) >= 4 ) && (center)) {
        xposition = (screen.width - width) - 30;
        yposition = ((screen.height / 2) - height) - 50;
    }
    args = "width=" + width + ","
    + "height=" + height + ","
    + "location=0,"
    + "menubar=0,"
    + "resizable=0,"
    + "scrollbars=1,"
    + "status=0,"
    + "titlebar=0,"
    + "toolbar=0,"
    + "hotkeys=0,"
    + "screenx=" + xposition + ","  //NN Only
    + "screeny=" + yposition + ","  //NN Only
    + "left=" + xposition + ","     //IE Only
    + "top=" + yposition;           //IE Only

	if (newWin != null && !newWin.closed) newWin.close();

    newWin = window.open(pageToLoad, winName, args);
	newWin.focus();
}

