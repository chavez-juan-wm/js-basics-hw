
typeof( 15 );
// It will return "number' because it checks what the type of data you entered is.

typeof( "hello" );
// It will return "string" because the type of hello is a string.

typeof( [ "dog", "cat", "horse" ] );
// It will return object.

typeof( NaN );
//It will return "number".

"hamburger" + "s";
//It will return "hamburgers". You can only add string together.

"hamburgers" - "s";
//It will return "NaN" because you can't used other math operators on strings except addition.

"johnny" + 5;
//It will return "johnny5" because it converts the 5 into a string and adds them together.

99 * "luftbaloons";
//NaN will return because you can't multiply strings and numbers.

var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
//Removes the last of an array, and returns that element.

numbers.push( 10 );
//It will add 10 into the array

numbers.unshift( 3 );
//adds new items to the beginning of an array, and returns the new length.

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
