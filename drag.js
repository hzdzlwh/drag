function drag(id){
	var oDiv=document.getElementById(id);
	var disX=0;
	var disY=0;
	oDiv.onmousedown=function(ev)

	{
		disX=ev.pageX- oDiv.offsetLeft;
		disY=ev.pageY- oDiv.offsetTop;
	}
}