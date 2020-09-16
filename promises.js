//- create two similar functions.
//- Each can return a number or string. 
//-Before the second function, place the async keyword. 
//-Use the console to log the calls to both functions.

/*
function num1() {
    return 1;
}
async function num2() {
    return 2;
}
console.log( 'num1', num1() );
console.log( 'num2', num2() );
*/
//-When you run your program (node promises.js ), you should see something like this:
/*
 *   num1 1
 *   num2 Promise {
 *       2
 *   }
 */
//-Notice that the "plain" function just returns the value 
//-the "async" function returns a promise. 
//#Now add another call to the async function and attach the then function to get its result and log it.
/*
num2().then( result => console.log( result ) );
*/

//!Phase 2: await

//-Declare a constant that awaits the call to your other async function and logs the value. 
//-remember to call your new function so it will run 
//-(since functions are only stored, but not run, when defined).

/*
async function waiting() {
    const value = await num2();
    console.log( 'waiting', value );
}
waiting();
*/

//-Run your program again and now you should see something like this:
//*waiting 2

//-await stops all flow until the promise returns.

//!Phase 3: DIY Promise ( custom Promise so that you can have some delay before the promise is resolved. )
//#If you'd like to use await again, then you will need to wrap your experiment in a function (and call it).
/*
async function waitForMyPromise() {
    const promise = new Promise( ( resolve ) => {
        setTimeout( () => {
            resolve( 'done!!!' );
        }, 1000 )
    } );

    const result = await promise;
    console.log( 'my promise is', result );
}
waitForMyPromise();
*/
//-This time when you run your program, you will need to wait one second (1000 milliseconds) before the final message will appear.
//*my promise is done!!!

//!Phase 4: And then ...
//- you could also use then to wait for a promise; even a custom one. 

//- you can create another new Promise and attach .then() to it.
/*
new Promise( ( resolve ) => {
    setTimeout( () => {
        resolve( 'done!' );
    }, 1500 )
} ).then( r => console.log( 'then my other promise is', r ) );
*/
//-Now, when running your program the output would look something like this.
//*my promise is done!!!
//*then my other promise is done!!!

//!Phase 5: About setTimeout:

//-setTimeout does not follow the Promises pattern.
//-you could create your own wait function to remedy this
//-you already discovered that an async function returns a promise.

/*
function wait( ms ) {
    return new Promise( resolve => setTimeout( resolve, ms ) );
}
*/

//-all waiting can use the same flow in your code regardless of whether it is a file read or write, web calls, or even timeout! 😃

//#Go ahead and try it out. See if you can cause a two-second pause before a message displays.
/*
async function doStuff() {
    await wait( 2000 )
    console.log( 'The waiting is over!' )
}
doStuff();
*/

//!Phase 6: reject ... catch