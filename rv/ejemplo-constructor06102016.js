function Torre()
{
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
      this.malla = new THREE.Mesh(torreForma,material);
}

var CONSTRUCTOR = new Object();

CONSTRUCTOR.setup = function()
{
      var torre1= new Torre();
      var torre2= new Torre();
      
      torre1.malla.position.x = -5;
      torre2.malla.position.x =  5;
      
      CONSTRUCTOR.camara = new THREE.PerspectiveCamera();
      CONSTRUCTOR.camara.position.z = 20;
      
      var lienzo = document.getElementById("ejemplo-constructor2");
      CONSTRUCTOR.renderizador = new THREE.WebGLRenderer({canvas:lienzo, antialias:true});
      CONSTRUCTOR.renderizador.setSize(600,600);
      
      CONSTRUCTOR.escena = new THREE.Scene();
      CONSTRUCTOR.escena.add(torre1.malla);
      CONSTRUCTOR.escena.add(torre2.malla);
}

CONSTRUCTOR.loop = function()
{
      requestAnimationFrame( CONSTRUCTOR.loop );
      CONSTRUCTOR.renderizador.render( CONSTRUCTOR.escena, CONSTRUCTOR.camara );
}

CONSTRUCTOR.setup();
CONSTRUCTOR.loop();
