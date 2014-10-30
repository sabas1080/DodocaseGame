using UnityEngine;
using System.Collections;

public class enemigo : MonoBehaviour {

	void Update (){
	    transform.Translate(-1.5f*Time.deltaTime,0,0, Space.World);
	}

	void OnCollisionEnter(Collision obj){
		GameObject vida = GameObject.Find("BarraVida");
		if(obj.gameObject.name=="Player"){
			vida.SendMessage("reducirVida");
			Destroy(this.gameObject);
		}
		if(obj.gameObject.name=="Pared"){
			Destroy(this.gameObject);
		}
	}
}