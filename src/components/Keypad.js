// Code Keypad Component Here

function Keypad () {
    function handleChange() {
        console.log("Entering password...");
        
    }
   return (
    <input
    type="password"
    onChange={handleChange}
    />
   );
    //     <div></div>
    // )
}

export default Keypad;