 const container2 = document.querySelector(".container2");
 const btnChange = document.querySelector(".btnChange");
 container2.addEventListener("mouseover", () => {
    container2.style.backgroundColor = "Blue";
 });

 container2.addEventListener("mouseout", () => {
    container2.style.backgroundColor= "red";
 });

                                //  btnChange.addEventListener("click", () => {
                                //      alert("Button clicked I can do code yeahhh!");
                                //  });

  const buttonClickCallback = () => {
      alert("Button Clicked!");
  };

  btnChange.addEventListener("click", 
      buttonClickCallback);

     setTimeout(() => {
        btnChange.removeEventListener("click", buttonClickCallback);
   }, 2000);


// const btnChange = document.querySelector(".btnChange");
// const buttonClicked = (event) => {
//     console.log(event);
// };

// btnChange.addEventListener("click", buttonClicked); 


const form = document.getElementById("myform");
form.addEventListener("submit", (event) => {
    event.preventDefault();

const name = form.elements["name"].value; console.log(name); 
const email = form.elements["email"].value; console.log(email); 

});


const list = document.querySelector("#options");
list.addEventListener("click", (event) => {
   event.target.closest("#items").classList.toggle("highlight");
});