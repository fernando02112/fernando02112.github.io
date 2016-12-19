//Función torre
function Torre(posX,posZ,materialTextura)
{
	var troncoForma = new THREE.CylinderGeometry(3, 3, 8);
var baseForma = new THREE.CylinderGeometry(4, 4, 1);
var subaseForma = new THREE.CylinderGeometry(5, 5, 1);
var superiorForma = new THREE.CylinderGeometry(0, 5, 3.5);
superiorForma.translate(0,10.5,0);
subaseForma.translate(0,0.5,0);
baseForma.translate(0,1.5,0);
troncoForma.translate(0,4.5,0);
var troncoMalla = new THREE.Mesh(troncoForma);
var baseMalla = new THREE.Mesh(baseForma);
var subaseMalla = new THREE.Mesh(subaseForma);
var superiorMalla = new THREE.Mesh(superiorForma);
var torreForma = new THREE.Geometry();
torreForma.merge(troncoMalla.geometry, troncoMalla.matrix);
torreForma.merge(baseMalla.geometry, baseMalla.matrix);
torreForma.merge(subaseMalla.geometry, subaseMalla.matrix);
torreForma.merge(superiorMalla.geometry, superiorMalla.matrix);

//Definiendo el cargador de las texturas
	/*
	var material = new THREE.MeshNormalMaterial();
        this.malla = new THREE.Mesh(torreForma,material);*/
	var cargadorTextura = new THREE.TextureLoader();
	cargadorTextura.load( materialTextura, function(textura)
		{
			var material= new THREE.MeshBasicMaterial( {map:textura} );
			var malla=new THREE.Mesh(torreForma, material);
			malla.position.x=posX;
			malla.position.z=posZ;
			grupo.add(malla);
		}
	);
}

function Cuadro(posX,posZ,materialTextura)
{
	var cargadorTextura = new THREE.TextureLoader();
	cargadorTextura.load( materialTextura,
	        function(textura)
		{
			var forma = new THREE.BoxGeometry( 10,.1,10);
			var material= new THREE.MeshBasicMaterial( {map:textura} );
			var malla=new THREE.Mesh(forma, material);
			malla.position.x=posX;
			malla.position.z=posZ;
			grupo.add(malla);
		});
}
	var grupo= new THREE.Group();

var setup = function()
{
	var torre1= new Torre(10,10,"maderaclara.jpg");
        var torre2= new Torre(80,10,"maderaclara.jpg");
	var torre3= new Torre(10,80,"maderaoscura.jpg");
        var torre4= new Torre(80,80,"maderaoscura.jpg");

	//Construcción del tablero
	for(var i=1; i<=8; i++)
	{
		for(var j=1; j<=8; j++)
		{
			if(j%2 ==0)
			{
				if(i%2 ==0)
				{
					var cuadro = new Cuadro(10*i,10*j,"marmolblanco.jpg");
				}
				else
				{
					var cuadro = new Cuadro(10*i,10*j,"marmolnegro.jpg");
				}
			}
			else
			{
				if(i%2 ==0)
				{
					var cuadro = new Cuadro(10*i,10*j,"marmolnegro.jpg");
				}
				else
				{
					var cuadro = new Cuadro(10*i,10*j,"marmolblanco.jpg");
				}
			}
		}
	}
	

	//Parámetros de la cámara
	var campoVision=30;// grado
	var relacionAspecto=window.innerWidth/window.innerHeight;
	var planoCercano=1;
	var planoLejano=1000;

	camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
	camara.position.z = 200;
	camara.position.y = 25;
	camara.position.x = 50;
      
        escena = new THREE.Scene();
	escena.add(grupo);
	var lienzo = document.getElementById("tablero_texturas");
        renderizador = new THREE.WebGLRenderer({canvas:lienzo, antialias:true});
        renderizador.setSize(window.innerHeight*.85,window.innerHeight*.85);
}

var loop = function()
{
      requestAnimationFrame( loop );
		
			
      renderizador.render( escena, camara );
}
var escena, camara, renderizador;

setup();
loop();
