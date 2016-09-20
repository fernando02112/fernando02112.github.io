var iluminacion = new THREE.PointLight(0xFF00FF);
var iluminacion2 = new THREE.PointLight(0xFFFF00);
var iluminacion3 = new THREE.PointLight(0x00FFFF);
iluminacion.position.y = 20;
iluminacion.position.x = 20;
iluminacion2.position.y = 20;
iluminacion3.position.z = 20;

var forma = new THREE.SphereGeometry(1);
var material = new THREE.MeshLambertMaterial({color: "#00cc00"});
var malla = new THREE.Mesh(forma, material);
malla.position.y =2;

var base = new THREE.Mesh(new THREE.BoxGeometry(5, .1, 5), new THREE.MeshLambertMaterial({color: 0xFFFFFF}));

var escena = new THREE.Scene();
escena.add(malla);
escena.add(base);
escena.add(iluminacion);


var camara = new THREE.PerspectiveCamera();
camara.position.z = 15;
camara.position.y = 5;

var lienzo = document.getElementById("luzConSombras");
var renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});

renderizador.shadowMapEnabled = true;
malla.castShadow = true;
base.receiveShadow = true;
iluminacion.castShadow = true;

renderizador.render(escena, camara);
