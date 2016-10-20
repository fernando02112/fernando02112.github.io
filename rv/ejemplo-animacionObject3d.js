function Pieza ()
{
  THREE.Object3D.call(this);
  this.piernaIzq = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  this.piernaDer = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  var cuerpo = new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
  this.add(this.piernaIzq, this.piernaDer, cuerpo);
  this.piernaIzq.position.z = -2;
  this.piernaIzq.position.y = -2.5;
  this.piernaDer.position.z = 2;
  this.piernaDer.position.y = -2.5;
  cuerpo.position.z = 2.5;
  }
  var pieza;
  Pieza.prototype = new THREE.Object3D
  function setup()
  {
  var pieza = new Pieza();
  
    
    var escena;
    
    pieza.camara = new THREE.PerspectiveCamera();
    pieza.camara.position.z = 20;
    
    var lienzo = document.getElementById("ejemplo-object3D");
      pieza.renderizador = new THREE.WebGLRenderer({canvas:lienzo, antialias:true});
      pieza.renderizador.setSize(600,600);
      
      pieza.escena = new THREE.Scene();
      pieza.escena.add(this.piernaIzq);
      pieza.escena.add(this.piernaDer);
      pieza.escena.add(cuerpo);
  }
  
  function loop(){
  pieza.rotateY(0.1);
 
    requestAnimationFrame(loop);
    rendereizador.render(escena, camara);
  }

setup();
loop();
  
  

  
  
