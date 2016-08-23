var forma = new THREE.Geometry();<!--primero se define el objeto-->
forma.vertices.push(  new THREE.Vector3(  1,  0,  1));<!--vertice0-->
forma.vertices.push(  new THREE.Vector3(  1,  0,  -1));
forma.vertices.push(  new THREE.Vector3(  -1, 0,  -1));
forma.vertices.push(  new THREE.Vector3(  -1, 0,  1));
forma.vertices.push(  new THREE.Vector3(  0,  1,  0));<!--vertice4-->

forma.faces.push( new THREE.Face3(3,  2,  1));<!--cara0-->
forma.faces.push( new THREE.Face3(3,  1,  0));
forma.faces.push( new THREE.Face3(3,  0,  4));
forma.faces.push( new THREE.Face3(0,  1,  4));
forma.faces.push( new THREE.Face3(1,  2,  4));
forma.faces.push( new THREE.Face3(2,  3,  4));<!--cara5-->

forma.computeBoundingSphere();<!--esfera de menor tamaño que acota al objeto-->
forma.computeFaceNormals();<!--se computan las normales de las caras por el tipo de material a usar-->

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh(forma, material);
malla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add( malla );
var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara); 

