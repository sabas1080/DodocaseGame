
    // The object to be spawned
    var SpawnObject : GameObject;

    // in seconds
    var SpawnStartDelay : float = 0;
    var SpawnRate: float = 5.0;

    function Start()
    {
        InvokeRepeating("Spawn", SpawnStartDelay, SpawnRate);
    }

    // Spawn the SpawnObject
    function Spawn()
    {
        Instantiate(SpawnObject, transform.position, transform.rotation);
    }
