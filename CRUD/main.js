var Form = `
  
    <input type="text" id="text1"> <br>
    <input type="text" id="text2"> <br>
    <input type="submit" onclick="Submit()">
 
`

document.getElementById("form").innerHTML=Form

function Submit(){
    var text1 = document.getElementById("text1").value
    var text2 = document.getElementById("text2").value

    console.log(text1,text2);
}