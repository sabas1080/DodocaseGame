
    // The number of times the Player can be damaged before the game restarts
    var Health : int = 10;

    // Minimum number of seconds between the player getting hurt
    var DamageInvulnerabilityDelay : float = 2;

    // Keeps track of the last time the Player was damaged
    private var invulnerabilityStartTime : float;

    function Start () {
        // Set initial value so the Player is temporarily invulnerable at spawn
        invulnerabilityStartTime = Time.time;
    }

    // Attempt to damage the player by the specified number of hit points
    function Hurt(damage : int) {
        // If we have waited at least as long as DamageInvulnerabilityDelay
        if (Time.time - invulnerabilityStartTime >= DamageInvulnerabilityDelay) {
            // Damage the Player
            Health -= damage;
            
            // Reset the invulnerability timer
            invulnerabilityStartTime = Time.time;
        }
        
        // If the Player has no health left
        if (Health <= 0) {
            // Reload the level
            Application.LoadLevel(Application.loadedLevelName);
        }
    }

