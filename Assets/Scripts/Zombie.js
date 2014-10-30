var VisionDistance : float = 200;
var MovementSpeed : float = 2;
var Health : int = 2;




 // When the Zombie collides with something
function OnTriggerStay(other : Collider) {
    // Get the Player that the Zombie collided with, if any
    var player = other.gameObject.GetComponent(Player);
    
    // If it collided with something other than a Player player will be null
    if (player != null) {
        // Subtract one from the Player's health
        player.Hurt(1);
    }
}

function FixedUpdate () {
    // Get the Player object
    var player : GameObject = GameObject.Find("Player");
    var characterController : CharacterController = GetComponent(CharacterController);
    
    // Get the position of the Zombie's eyes
    var eyePosition : Vector3 = transform.position;
    eyePosition.y += characterController.height;
    
    // Get the difference between the player and the Zombie positions
    // This creates a direction vector pointing in the direction of the Player.
    var lookDirection = player.transform.position - eyePosition;
    lookDirection = lookDirection.normalized;
    
    // Only look for the player or objects that are part of the scenery (terrain, buildings, etc.)
    var layerMask : int = 1 << LayerMask.NameToLayer("Player") | 1 << LayerMask.NameToLayer("Default");
    
    // The direction the Zombie will move, defaults to standing still
    var movementDirection : Vector3 = Vector3.zero;
    
    // hitInfo will contain information about what the Zombie can see.
    var hitInfo : RaycastHit;
    if (Physics.Raycast(eyePosition, lookDirection, hitInfo, VisionDistance, layerMask)) {
        // If the Zombie can see the Player move toward them.
        if (hitInfo.collider.gameObject == player) {
            movementDirection = lookDirection;
            movementDirection.y = 0;
            movementDirection = movementDirection.normalized;
        }
    }
    
    // Face and move in the chosen direction
    if (movementDirection != Vector3.zero) {
        transform.rotation = Quaternion.LookRotation(movementDirection, Vector3.up);
    }
    characterController.SimpleMove(movementDirection * MovementSpeed);
}