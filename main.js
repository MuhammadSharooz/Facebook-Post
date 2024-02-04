let btn = document.querySelector('.close')
let display = document.querySelector('.hidden')
let row2 = document.getElementById("row2")
let row3 = document.getElementsByClassName('row3')
let selectFile=document.getElementById("choicefile")
let inputText=document.getElementById("inputText")
let textcolor=document.getElementById("textcolor")
let fontsize = document.getElementsByClassName("fontsize")
let italic = document.getElementsByClassName('italic')
let postBtn =document.getElementsByClassName("post")
let likebtn=document.getElementById("likebtn")
let commentbtn=document.getElementById("commentbtn")
let sharebtn=document.getElementById("sharebtn")



btn.addEventListener("click", () =>{
   row3[0].style.display = "none"
   display.style.display="block";
  row2.style.marginBottom="1.5rem";
  row2.style.height="75px";
});

selectFile.addEventListener("click", () => { 
   // Create a file input element
   let fileInput = document.createElement("input");
   fileInput.type = "file";

   row3[0].appendChild(fileInput);
   // Trigger a click on the file input element
   fileInput.click();
 });
 
function setbackground(){
  inputText.style.backgroundImage='url('+ event.target.src +')'
  inputText.style.backgroundSize= "cover"
 }

 textcolor.addEventListener("change", ()=>{
  inputText.style.color= event.target.value
 })

 fontsize[0].addEventListener("click",()=>{
  inputText.style.fontSize = event.target.value +"px"
 })

function deleteText(){
  inputText.value=""
}

function bold(){
 if(inputText.style.fontWeight==="bold"){
  inputText.style.fontWeight="normal"
 }else{
  inputText.style.fontWeight="bold"
 }
}
italic[0].addEventListener("click",()=>{
  type = italic

  if(inputText.style.fontStyle==="italic"){
    inputText.style.fontStyle="normal"
    type[0].innerHTML='<i class="fa-solid fa-italic"></i>'

   }else{
    inputText.style.fontStyle="italic"
    type[0].innerHTML='<i class="fa-solid fa-i"></i>'
   }
})

function changestyle(){
  if(inputText.style.textDecoration==="underline"){
    inputText.style.textDecoration="none"
   }else{
    inputText.style.textDecoration="underline"
   }
}
function changeBackground(){
  inputText.style.backgroundColor=event.target.value
}

function upload(){
  display.style.display="none"
  row3[0].style.display="block"
  row2.style.marginBottom="1rem";
  row2.style.height="50px";
}

function post(){ 
  let inputText=document.getElementById("inputText")
  let emoji =document.getElementById("hidden")
  let row4=document.getElementsByClassName("row4")
  let footer=document.getElementById("footer")
  display.style.display="none"
  row3[0].style.display="none"
  row2.style.marginBottom="1rem";
  row2.style.height="220px";
  row2.style.width="100%";
  emoji.style.display="none"
  row4[0].style.display="none"
  postBtn[0].style.display="none"
  inputText.setAttribute("readonly", true);
  footer.style.display="block";

  // if (inputText.value==="") {
  //   postBtn[0].style.click="disable";
  // }
  inputText.addEventListener("input", function () {
    if (inputText.value.trim() === "") {
      postBtn[0].setAttribute("disabled", true);
    } else {
      postBtn[0].removeAttribute("disabled");
    }
  });
}

likebtn.addEventListener("click",()=>{
  let likeSpace=document.getElementById("likeSpace")
  likeSpace.innerHTML='<img height="20px" width="20px" src="./images/like.svg" alt=""> 1'
  likebtn.style.color="Blue"
})
commentbtn.addEventListener("click",()=>{
  let shareSpace=document.getElementById("shareSpace")
 shareSpace.innerHTML='1 <i class="fa-solid fa-comment"></i> '
 shareSpace.style.justifyContent="center"
  if(commentbtn.style.color==="white"){
    commentbtn.style.color="Blue"
  }else{
     commentbtn.style.color="Blue"
  }
 
})
sharebtn.addEventListener("click",()=>{
  let shareSpace=document.getElementById("shareSpace")
 shareSpace.innerHTML="1 <i class='bx bxs-share bx-flip-horizontal' ></i> "
 sharebtn.style.color="Blue"
 shareSpace.style.justifyContent="right"
})