module managers {
    export class Collision {
  
      public static Check(object1: objects.GameObject, object2: objects.GameObject):boolean {
       
        // create two vec2 objects
        let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
        let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);
  
        if(math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight))
        {     
            //Collision Occured 
         
            return true;
            
        }
        
      }
    }
  }
  