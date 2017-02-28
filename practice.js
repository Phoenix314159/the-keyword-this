//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

     // to reference a property of the object it is in so multiple calls of the same property do not have to be coded

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

       // 1.Explicit - func.call(), func.apply(), func.bin , explicitly defining the context
       // 2.Default  - window object
       // 3.Implicit - whatever'm s left of the dot is what 'this' is bound to
       // 4.New  - constructor functions

  // 3) What is the difference between call and apply?

      // both execute the function right away however apply takes in an array of parameters as an argument

  // 4) What does .bind do?

      //returns a function with 'this' bound to the referenced object
var hotel = {
    roomPrice: 3.5,
    calcPrice: function(nights, totalTip){
        return (this.roomPrice * nights) + totalTip;
    }
}
hotel.calcPrice(3,30)

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
        username: 'James253',
        email: 'dude@surfsupdude.com',
        getUsername: function () {
            return this.username;
        }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
     var x = user.getUsername();
     console.log(x);

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

  //Function Invocations Here
var Car = function (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = 0;
    this.moveCar = function(){
        return this.move + 10;
    }

}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

var getYearPrius = getYear.bind(prius);
var getYearMustang = getYear.bind(mustang);



//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.bind(myUser)();


//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //It will return undefined since there is no getMyUsername method defined on the window object.

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

//the method getMyUsername is defined globally therefore 'this' will refer to the window object


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

