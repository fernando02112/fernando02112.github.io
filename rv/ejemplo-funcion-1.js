function init(p){
var malla(new THREE.BoxGeometry(p,p,p), new THREE.MeshNormalMaterial());

escena = new THREE.Scene();
escena.add(malla);

camara = new THREE.PerspectiveCamera();
renderizador = new THREE.WebGLRender();
renderizador.setSize(700, 700);
document.body.appenChild(renderizador.domElement);
}

var main = function(p){ <!--function(p) es una fucnión anónima que se puede asignar a un símbolo-->
renderizador.render(escena, camara);
}
