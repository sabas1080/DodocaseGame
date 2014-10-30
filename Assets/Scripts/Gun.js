// This is the bullet prefab the will be instantiated when the player clicks
// It must be set to an object in the editor
var Bullet : GameObject;

static var initialrv : int = 0; // Raw compass vector to test the magnet against
 static var prevrv : int = 0; // Raw compass vector to verify that initialrv is valid
 static var initialrot : ScreenOrientation;
 
 function Start ()
 {
 initialrot = Screen.orientation;
 Input.compass.enabled = true;
 }
 
 

// Fire a bullet
function Fire () {
    // Create a new bullet pointing in the same direction as the gun
    var newBullet : GameObject = Instantiate(Bullet, transform.position, transform.rotation);
}

function Update () {

// Catch if the initialrv is completely wrong
 // (sometimes the magnitude can jump from
 // 15 to 400, depending on how the player
 // rotates the device).
 //
 if (prevrv > initialrv * 23)
 {
 initialrv = Mathf.RoundToInt(Input.compass.rawVector.magnitude);
 }
 
 
 
 
 // Catch if the user flips the screen to change the orientation
 //
 if (initialrot != Screen.orientation || initialrv == 0)
 {
 initialrot = Screen.orientation;
 initialrv = Mathf.RoundToInt(Input.compass.rawVector.magnitude);
 }
 
 
 
 
 
 // Catch if the magnitude has fallen by a
 // huge amount since the last update
 //
 var vectest = Mathf.RoundToInt(Input.compass.rawVector.magnitude);
 if (initialrv > vectest * 23)
 {
 initialrv = Mathf.RoundToInt(Input.compass.rawVector.magnitude);
 }
 
 
 
 
 
 
 // Refresh prevrv to test against at the start of the next update
 //
 prevrv = Mathf.RoundToInt(Input.compass.rawVector.magnitude);
 
  vectest = Mathf.RoundToInt(Input.compass.rawVector.magnitude);
 if (vectest > initialrv * 2)
 {
  Fire();
 }
 
 
 
    // Fire if the left mouse button is clicked
    if (Input.GetButtonDown("Fire1")) {
        Fire();
    }
}