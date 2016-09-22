function init(p)
{
var malla = new THREE.Mesh(new THREE.BoxGeometry(p,p,p), new THREE.MeshNormalMaterial());

escena = new THREE.Scene();
escena.add(malla);

camara = new THREE.PerspectiveCamera();
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(700, 700);
document.body.appendChild(renderizador.domElement);
camara.position.z = 5*p;
}

var main = function(p) <!--function(p) es una fucnión anónima que se puede asignar a un símbolo-->
{ 
p(1);
renderizador.render(escena, camara);
}

var escena, camara, renderizador;

main(init);
