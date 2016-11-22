var troncoForma = new THREE.CylinderGeometry(.5, .5, 2);
var baseForma = new THREE.CylinderGeometry(.65, .65, .25);
var subaseForma = new THREE.CylinderGeometry(.85, .85, .25);
var superiorForma = new THREE.CylinderGeometry(0, .7, .75);
superiorForma.translate(0,2.35,0);
baseForma.translate(0,.25,0);
troncoForma.translate(0,1,0);
var troncoMalla = new THREE.Mesh(troncoForma);
var baseMalla = new THREE.Mesh(baseForma);
var subaseMalla = new THREE.Mesh(subaseForma);
var superiorMalla = new THREE.Mesh(superiorForma);
var torreForma = new THREE.Geometry();
torreForma.merge(troncoMalla.geometry, troncoMalla.matrix);
torreForma.merge(baseMalla.geometry, baseMalla.matrix);
torreForma.merge(subaseMalla.geometry, subaseMalla.matrix);
torreForma.merge(superiorMalla.geometry, superiorMalla.matrix);
var material = new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(torreForma, material);





//Tablero
var camara = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camara.position.z=50;
camara.position.x=160;
camara.position.y=40;

//camara.lookAt(new THREE.Vector3(40,40,0));
camara.rotateZ(Math.PI/2);


var escena = new THREE.Scene();
var cuadro= new Array();
var a=2;
for(var k=0; i<64; i++){
  for(var i=0; j<8; j++){
    for(var j=0; k<8; k++){
      if(a==2){
        cuadro[i] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 4), new THREE.MeshBasicMaterial({color: 0xffffff}) );
        a=1;
      }else{
        cuadro[i] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 4), new THREE.MeshBasicMaterial({color: 0x999999}) );
        a=2;
      }
     cuadro[i].position.x=k*10;
     cuadro[i].position.y=j*10;
     escena.add(cuadro[i]);
   }
   if(a==2){
        a=1;
      }else{
        a=2;
      }
  }
}

escena.add(torreMalla);

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
