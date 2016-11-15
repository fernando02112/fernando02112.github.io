var length = 16, width = 12;

var cuadrado = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( 0, 16 );
shape.lineTo( 16, 12 );
shape.lineTo( 16, 0 );
shape.lineTo( 0, 0 );

var geometry = new THREE.ShapeGeometry( cuadrado );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );

 
