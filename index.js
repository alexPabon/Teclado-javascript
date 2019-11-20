//Variables Globales.
var flag = false;	//Se inicia así para no ejecutar siempres la condicion if(flag);
var cont =0;

function cargar()
{
	var letras = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m",",",".","Shift","Space","Enter","Delete"];
	var sty = 0;	
	var marcotex = document.createElement("textarea");
	var u = document.createElement("ul");
	
	//En las siguientes lineas se va a crear los diferentes nodos en le div[0]
	document.getElementsByTagName("div")[0].appendChild(marcotex);
	document.getElementsByTagName("div")[0].appendChild(u);
	document.getElementsByTagName("div")[0].appendChild(u);

	//Solo se permite leer en la textarea, y solo escribir con los botones.
	// con setAttribute() podemos agregar atributos a un elemento.
	document.getElementsByTagName("textarea")[0].setAttribute("readonly","readonly");
	
	//Se obtienen los <li> siguiendo la ruta div[0] ul[0] li
	var lisConten = document.getElementsByTagName("div")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
	
	// se obtiene el div[0]
	var caja = document.getElementsByTagName("div")[0];

	for(var i=0; i<letras.length; i++)
	{		
		if (i==0||i==10||i==20||i==29)
		{
			//Se crea una lista y se añade al ul creado con la variable u.
			var l = document.createElement("li");
			u.appendChild(l);
		}

		if(letras[i]=="Shift") //Esta condicion es para darle un id, que se usara mas adelante.
		{
			lisConten[lisConten.length-1].innerHTML += '<input id="Shift" type="button" value="'+letras[i]+'" onclick="imprimir(this.value)">';
		}
		else 	//Se añade contenido a la ultima lista <li>
		{
			lisConten[lisConten.length-1].innerHTML += '<input type="button" value="'+letras[i]+'" onclick="imprimir(this.value)">';
		}
		
		
	}

	//Despues de haber creado las listas y haber añadido en ellas
	//se añade la <ul> en el div[0] que se ha obtenido con la variable caja.
	caja.appendChild(u);

}	

function imprimir(valor)
{
	// se obtiene los diferentes nodos
	var contex =document.getElementsByTagName("textarea");
	var inputlet =document.getElementsByTagName("input");
	var valtex =contex[0].value;
	
	

	if(valor=="Shift" || valor=="SHIFT")
	{
		// bucle for para cambiar de minuscalas a mayusculas
		for(var i=0; i<inputlet.length-6; i++)
		{
			inputlet[i].value = inputlet[i].value.toUpperCase();
		}

		
					//Cada que se da click a shift irá realizando un cambio.
		switch(cont) // Funciona con variables globales flag y cont.
		{
			case 0:
				document.getElementById('Shift').style.color = "blue";
				document.getElementById('Shift').value= document.getElementById('Shift').value.toUpperCase();
				cont++;
				flag = true;
				break;
			case 1:
				document.getElementById('Shift').style.color = "black";
				document.getElementById('Shift').style.background = "#03ffff";
				document.getElementById('Shift').value= document.getElementById('Shift').value.toUpperCase();
				cont++;
				flag = false;
				break;
			case 2:
				document.getElementById('Shift').style.color = "";
				document.getElementById('Shift').style.background = "";
				document.getElementById('Shift').value ='Shift';
				cont = 0;
				
				for(var i=0; i<inputlet.length-6; i++)
				{
					inputlet[i].value = inputlet[i].value.toLowerCase();
				}
				break;
			default:
				alert("error")	
		}
					
	}
	else if(valor == "Enter")
	{
		contex[0].innerHTML += "\n";			
	}
	else if(valor == "Space")
	{
		contex[0].innerHTML += " ";			
	}
	else if(valor == "Delete")
	{
		
		contex[0].innerHTML = valtex.substr(0,valtex.length-1);
	}
	else
	{
		//Se obtiene el value de los input y se guarda en la variable valor
		//despues se agrega en la textarea.
		contex[0].innerHTML += valor;

		if(flag)	//Condicion para devolver a minuscalas los input.
		{
			for(var i=0; i<inputlet.length-6; i++)
			{
				inputlet[i].value = inputlet[i].value.toLowerCase();
			}

			document.getElementById('Shift').style.color = "black";
			document.getElementById('Shift').value ='Shift';
			cont =0;		// es como hacer un reset a Shift.
			flag = false; 	// así se ejecuta una sola vez.
		}		
	}
}