var escena = new THREE.Scene();

var campoVision=30;
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=1;
var planoLejano=1000;

var camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
camara.position.z = 80;
camara.position.y = 25;
camara.position.x = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.85,
                    	window.innerHeight*.85);
			
document.body.appendChild (renderizador.domElement);

// Construcción del tablero
for(var i=1; i<=8; i++)
{
   for(var j=1; j<=8; j++)
   {
	var forma = new THREE.BoxGeometry( 10,.1,10);
	
	if(j%2 ==0)
	{
		if(i%2 == 0)
		var material = new THREE.MeshBasicMaterial( {color: 0xffffff}); 
		else
		var material = new THREE.MeshBasicMaterial( {color: 0x727272}); 
	}
	else
	{
		if(i%2 == 0)
		var material = new THREE.MeshBasicMaterial( {color: 0x727272}); 
		else
		var material = new THREE.MeshBasicMaterial( {color: 0xffffff}); 
	}
	
	var cubo = new THREE.Mesh(forma, material);
	cubo.position.x=10*i;
	cubo.position.z=10*j;
	escena.add(cubo);
   }
}

// Geometría de la torre
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
var material = new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(torreForma, material);

//Añadiendo los colores 
var material1=new THREE.MeshBasicMaterial( {color: 0xb8b8b8} );
var material2=new THREE.MeshBasicMaterial( {color: 0xffffff});

//Definición de las cuatro torres con su respectivo color
var torreMalla1= new THREE.Mesh(torreForma,material1);
torreMalla1.position.x=10;
torreMalla1.position.z=10;

var torreMalla2= new THREE.Mesh(torreForma,material1);
torreMalla2.position.x=80;
torreMalla2.position.z=10;

var torreMalla3= new THREE.Mesh(torreForma,material2);
torreMalla3.position.x=10;
torreMalla3.position.z=80;

var torreMalla4= new THREE.Mesh(torreForma,material2);
torreMalla4.position.x=80;
torreMalla4.position.z=80;

escena.add(torreMalla1);
escena.add(torreMalla2);
escena.add(torreMalla3);
escena.add(torreMalla4);


renderizador.render(escena,camara);
