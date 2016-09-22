function init(p)
{
malla = new THREE.Mesh(new THREE.BoxGeometry(p,p,p), new THREE.MeshNormalMaterial());

escena = new THREE.Scene();
escena.add(malla);

camara = new THREE.PerspectiveCamera();
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(700, 700);
document.body.appendChild(renderizador.domElement);
camara.position.z = 5*p;
step=0.01;
}

var loop = function() <!--function(p) es una fucnión anónima que se puede asignar a un símbolo-->
{ 
requestAnimationFrame(loop);
renderizador.render(escena, camara);
malla.rotateY(0.01);

if (Math.abs(malla.position.x)>=2)
  step=-step;
  malla.position.x+=step;
}

var escena, camara, renderizador, malla;
init(1);
loop();
