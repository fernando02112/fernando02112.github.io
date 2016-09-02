var figura = new THREE.Shape();

figura.moveTo(10,10);
figura.lineTo(11,12);
figura.lineTo(12,12);
figura.lineTo(14,9);
figura.lineTo(12,8);
figura.lineTo(13,6);
figura.lineTo(11,7);
figura.lineTo(9,6);
figura.lineTo(10,8);
figura.lineTo(8,9);
figura.lineTo(10,10);

var forma = new THREE. ShapeGeometry(figura);
var malla = new THREE.Mesh(forma);  

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
