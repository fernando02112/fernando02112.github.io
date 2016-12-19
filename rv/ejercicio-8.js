//Definición de las fuentes de luz 
var Magenta=new THREE.PointLight(0xFF00FF);
Magenta.position.x=0;
Magenta.position.y=30;
Magenta.position.z=45;

var Cyan= new THREE.PointLight(0x00FFFF);
Cyan.position.x=80;
Cyan.position.y=30;
Cyan.position.z=45;

var Amarillo= new THREE.PointLight(0xFFFF00);
Amarillo.position.x=45;
Amarillo.position.y=30;
Amarillo.position.z=0;


var campoVision=30;// grado
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=1;
var planoLejano=1000;

//Definición del tipo de cámara
var camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
camara.position.z = 200;
camara.position.y = 25;
camara.position.x = 50;

//Construcción del tablero
var tablero = new Array();
var forma = new THREE.BoxGeometry( 10,.1,10);
var material;
var cont=0;
for(var i=1; i<=8; i++)
{
   for(var j=1; j<=8; j++)
   {
	if(j%2 ==0)
	{
		if(i%2 == 0)
		material = new THREE.MeshLambertMaterial( {color: 0xffffff}); 
		else
		material = new THREE.MeshLambertMaterial( {color: 0x727272}); //0xcfcfcf
	}
	else
	{
		if(i%2 == 0)
		material = new THREE.MeshLambertMaterial( {color: 0x727272}); //0xcfcfcf
		else
		material = new THREE.MeshLambertMaterial( {color: 0xffffff}); //0xcfcfcf
	}
	tablero[cont] = new THREE.Mesh(forma, material);
	tablero[cont].position.x=10*i;
	tablero[cont].position.z=10*j;
	cont=cont+1;
   }
}

//Construcción de las torres

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

//Definiendo opacidades del 100, 75, 50 y 25%
var Opacidad100=new THREE.MeshLambertMaterial( {color: 0xffe100} );
var Opacidad75=new THREE.MeshLambertMaterial( {color: 0xffe100,transparent:true,opacity:0.75});
var Opacidad50=new THREE.MeshLambertMaterial( {color: 0x000ef5,transparent:true,opacity:0.50});
var Opacidad25=new THREE.MeshLambertMaterial( {color: 0x000ef5,transparent:true,opacity:0.25});

//Asignando opacidades a cada torre
var torreMalla1= new THREE.Mesh(torreForma,Opacidad100);
torreMalla1.position.x=20;
torreMalla1.position.z=20;
var torreMalla2= new THREE.Mesh(torreForma,Opacidad75);
torreMalla2.position.x=70;
torreMalla2.position.z=20;
var torreMalla3= new THREE.Mesh(torreForma,Opacidad25);
torreMalla3.position.x=20;
torreMalla3.position.z=70;
var torreMalla4= new THREE.Mesh(torreForma,Opacidad50);
torreMalla4.position.x=70;
torreMalla4.position.z=70;
	
var escena=new THREE.Scene();
escena.add(torreMalla1);
escena.add(torreMalla2);
escena.add(torreMalla3);
escena.add(torreMalla4);
escena.add(Magenta);
escena.add(Cyan);
escena.add(Amarillo);
for ( var n=0; n<64; n ++)
escena.add(tablero[n]);
	
renderizador=new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.85,window.innerHeight*.85);		
document.body.appendChild (renderizador.domElement);
	
//Activando las sombras
renderizador.shadowMapEnabled=true;
torreMalla1.castShadow=true;
torreMalla2.castShadow=true;
torreMalla3.castShadow=true;
torreMalla4.castShadow=true;
Magenta.castShadow=true;
Cyan.castShadow=true;
Amarillo.castShadow=true;
for ( var n=0; n<64; n ++)
tablero[n].receiveShadow = true;
	
renderizador.render(escena,camara);
