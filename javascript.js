var BackgroundColor = ["#FFFFFF","#EFEFEF","#DFDFDF","#CFCFCF","#BFBFBF","#AFAFAF",
"#8F9F9F","#7F8F8F","#6F7F7F","#5F6F6F","#4F5F5F","#2F4F4F"];
var Color = ["#0000FF","#1112FE","#2223FE","#3334FD","#4446FD","#5557FD",
"#6668FC","#878AFC","#879BFC","#87ACFB","#87BDFB","#87CEFA"];
var i=0;
var timer;


function time()
{
	var jour = new Date();
	var heure = jour.getHours();
	if (heure < 8 || heure > 20)
	{
		i = BackgroundColor.length;
		document.getElementById("body").className = "night";
		document.getElementById("swap").innerHTML = "Mode Jour";
	}
	else
	{
		document.getElementById("body").className = "day";
		document.getElementById("swap").innerHTML = "Mode Nuit";
	}
}

function swap()
{
	timer = setInterval(setColor, 100);
}

function SymplifModif(truc)
{
	document.getElementById("body").style.backgroundColor = BackgroundColor[truc];
	document.getElementById("body").style.color = Color[truc];
}

function setColor()
{
	if (document.getElementById("body").className=="day")
	{
		if (i < BackgroundColor.length)
		{
			SymplifModif(i);
			i = i+1;
		}
		else
		{
			SymplifModif(i);
			document.getElementById("body").className = "night";
			document.getElementById("swap").innerHTML = "Mode Jour";
			clearInterval(timer);
		}
	}
	else
	{
		if (i > 0)
		{
			SymplifModif(i);
			i = i-1;
		}
		else
		{
			SymplifModif(i);
			document.getElementById("body").className = "day";
			document.getElementById("swap").innerHTML = "Mode Nuit";
			clearInterval(timer);
		}
	}
}