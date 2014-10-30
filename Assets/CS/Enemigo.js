var Player : Transform;
var damp = 2;
var velocidadePerseguidor = 4;
var projectile : Rigidbody;
var speed = 20;
 
function Update(){
 
 if(Player!=null){
 
  if(Vector3.Distance(Player.position,transform.position) < 20){
   // aqui podes poner animaciones
   var rotate = Quaternion.LookRotation(Player.position - transform.position);
   transform.rotation = Quaternion.Slerp(transform.rotation, rotate,damp * Time.deltaTime);
   transform.Translate(0,0, velocidadePerseguidor * Time.deltaTime);
     var instantiatedProjectile : Rigidbody = Instantiate(
   projectile, transform.position, transform.rotation );
  instantiatedProjectile.velocity =
   transform.TransformDirection( Vector3( 0, 0, speed ) );
  Physics.IgnoreCollision( instantiatedProjectile. collider,
   transform.root.collider );
  }
  if(Vector3.Distance(Player.position,transform.position) < 2){
   //aqui podes poner animaciones
   //animation.wrapMode =WrapMode.Once;
  }
 }
}
 