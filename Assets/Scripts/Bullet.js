// The speed the bullet moves
var Speed : float = .4;

// The number of seconds before the bullet is automatically destroyed
var SecondsUntilDestroy : float = 10;

private var startTime : float;

function Start () {
    startTime = Time.time;
}

function FixedUpdate () {
    // Move forward
    this.gameObject.transform.position += Speed * this.gameObject.transform.forward;
    
    // If the Bullet has existed as long as SecondsUntilDestroy, destroy it
    if (Time.time - startTime >= SecondsUntilDestroy) {
        Destroy(this.gameObject);
    }
}
    
 function OnCollisionEnter(collision : Collision) {
    // Get the Zombie that the Bullet collided with, if any
    var zombie = collision.transform.gameObject.GetComponent(Zombie);
    
    // If it collided with something other than a Zombie zombie will be null
    if (zombie != null) {
        // Subtract one from the Zombie's health
        zombie.Health--;
        
        // If the zombie is out of health remove them from the game
        if (zombie.Health <= 0) {
            Destroy(collision.transform.gameObject);
        }
    }
    
    // Remove the Bullet from the world
    Destroy(this.gameObject);
}