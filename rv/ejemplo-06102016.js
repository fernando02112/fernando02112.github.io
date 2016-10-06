var PROTOTIPO = new Object();

PROTOTIPO.TorreGeometry = function()
{
      THREE.Geometry.call(this);
      
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
      
      this.merge(troncoMalla.geometry, troncoMalla.matrix);
      this.merge(baseMalla.geometry, baseMalla.matrix);
      this.merge(subaseMalla.geometry, subaseMalla.matrix);
      this.merge(superiorMalla.geometry, superiorMalla.matrix)
      
}

PROTOTIPO.TorreGeometry.prototype = new THREE.Geometry();

PROTOTIPO.setup = function()
{
      var torre1= new THREE.Mesh( new PROTOTIPO.TorreGeometry(),
                             new THREE.MeshNormalMaterial());
      var torre2= new THREE.Mesh( new PROTOTIPO.TorreGeometry(),
                             new THREE.MeshNormalMaterial());
      
      torre1.position.x = -5;
      torre2.position.x =  5;
      
      PROTOTIPO.camara = new THREE.PerspectiveCamera();
      PROTOTIPO.camara.position.z = 20;
      
      var lienzo = document.getElementById("ejemplo-06102016");
      PROTOTIPO.renderizador = new THREE.WebGLRenderer({canvas:lienzo, antialias:true});
      PROTOTIPO.renderizador.setSize(600,600);
      
      PROTOTIPO.escena = new THREE.Scene();
      PROTOTIPO.escena.add(torre1);
      PROTOTIPO.escena.add(torre2);
}

PROTOTIPO.loop = function()
{
      requestAnimationFrame( PROTOTIPO.loop );
      PROTOTIPO.renderizador.render( PROTOTIPO.escena, PROTOTIPO.camara );
}

PROTOTIPO.setup();
PROTOTIPO.loop();
