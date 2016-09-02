var forma = new THREE.Geometry();<!--primero se define el objeto-->
forma.vertices.push(  new THREE.Vector3(  1,  0,  1));<!--vertice0-->
forma.vertices.push(  new THREE.Vector3(  1,  0,  -1));<!--vértice1-->
forma.vertices.push(  new THREE.Vector3(  -1, 0,  -1));<!--vértice2-->
forma.vertices.push(  new THREE.Vector3(  -1, 0,  1));<!--vértice3-->
forma.vertices.push(  new THREE.Vector3(  1,  1,  1));<!--vertice4-->
forma.vertices.push(  new THREE.Vector3(  1,  1,  -1));<!--vértice5-->
forma.vertices.push(  new THREE.Vector3(  -1,  1,  -1));<!--vértice6-->
forma.vertices.push(  new THREE.Vector3(  -1,  1,  1));<!--vértice7-->


forma.faces.push( new THREE.Face3(3,  2,  1));<!--cara0-->
forma.faces.push( new THREE.Face3(3,  1,  0));<!--cara1-->
forma.faces.push( new THREE.Face3(3,  0,  4));<!--cara2-->
forma.faces.push( new THREE.Face3(0,  1,  4));<!--cara3-->
forma.faces.push( new THREE.Face3(1,  4,  5));<!--cara4-->
forma.faces.push( new THREE.Face3(2,  1,  5));<!--cara5-->
forma.faces.push( new THREE.Face3(5,  6,  1));<!--cara6-->
forma.faces.push( new THREE.Face3(6,  2,  1));<!--cara7-->
forma.faces.push( new THREE.Face3(2,  3,  7));<!--cara8-->
forma.faces.push( new THREE.Face3(6,  7,  2));<!--cara9-->
forma.faces.push( new THREE.Face3(7,  4,  3));<!--cara10-->
forma.faces.push( new THREE.Face3(4,  6,  7));<!--cara11-->
forma.faces.push( new THREE.Face3(4,  7,  3));<!--cara12-->
forma.faces.push( new THREE.Face3(4,  5,  6));<!--cara13-->

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
