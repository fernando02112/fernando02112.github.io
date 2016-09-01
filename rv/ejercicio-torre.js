var troncoForma = new THREE.CylinderGeometry(.5, .5, 2);
var baseForma = new THREE.CylinderGeometry(.65, .65, .25);
var subaseForma = new THREE.CylinderGeometry(.75, .75, .25);
baseForma.translate(0,.25,0)
troncoForma.translate(0,1,0);

var troncoMalla = new THREE.Mesh(troncoForma);
var baseMalla = new THREE.Mesh(baseForma);
var subaseMalla = new THREE.Mesh(subaseForma);

var torreForma = new THREE.Geometry();

torreForma.merge(troncoMalla.geometry, troncoMalla.matrix);
torreForma.merge(baseMalla.geometry, baseMalla.matrix);
torreForma.merge(subaseMalla.geometry, subaseMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(torreForma, material);

var escena = new THREE.Scene();
escena.add(torreMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
