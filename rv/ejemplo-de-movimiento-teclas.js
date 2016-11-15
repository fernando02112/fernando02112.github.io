
var cuadrado = new THREE.Shape();
cuadrado.moveTo( 0,0 );
cuadrado.lineTo( 0, 16 );
cuadrado.lineTo( 16, 12 );
cuadrado.lineTo( 16, 0 );
cuadrado.lineTo( 0, 0 );

var escena = new THREE.Scene();
var geometry = new THREE.ShapeGeometry( cuadrado );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var mesh = new THREE.Mesh( geometry, material ) ;
escena.add( mesh );

 
