let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let c_puter = document.getElementById("c");
let c_score = document.getElementById("comp");
let u_user = document.getElementById("user");
let u_sr = document.getElementById("u");
let main = document.getElementById("main");
let statusx = document.getElementById("status");
let choices:string[] = ["rock","paper","scissors"]
let n_choices:number = Math.floor(Math.random() * 2)
let c_res = choices[n_choices];
let u_c:string
let vs = (element:any)=>{
      if(element){
            
                  return element.URL
            
      }
}
let log = (msg:string)=>{
      if(statusx){
            statusx.textContent = `${msg}`

      }
      

}
let imgs = {
      rock:"https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/270a.png",
      paper:"img/Microsoft-Fluentui-Emoji-Flat-Raised-Back-Of-Hand-Flat-Default.1024.png",
      scissors:"img/Daco_5026563.png"

      }

rock?.addEventListener("click",()=>{
      
      u_c = "rock"
      if(u_c === c_res){
            u_sr?.setAttribute("src",imgs.rock)
            c_puter?.setAttribute("src",imgs.rock)
            vs(main)
            log("its a tie");

      }
      if(c_res === "scissors"){
            u_sr?.setAttribute("src",imgs.rock)
            c_puter?.setAttribute("src",imgs.scissors)
            vs(main)
            log("I win");
           if(c_score){
           
            
           }
      }
      if(c_res === "paper"){
            u_sr?.setAttribute("src",imgs.rock)
            c_puter?.setAttribute("src",imgs.paper)
            vs(main)
            log("you win");
      }
      console.log("rock");
})
paper?.addEventListener("click",()=>{
      u_c = "paper"
      if(u_c === c_res){
            u_sr?.setAttribute("src",imgs.paper)
            c_puter?.setAttribute("src",imgs.paper)
            vs(main)
            log("its a tie");
           

      }
      if(c_res === "scissors"){
            u_sr?.setAttribute("src",imgs.paper)
            c_puter?.setAttribute("src",imgs.scissors)
            vs(main)
            statusx?.setAttribute("class","wim")
            log("I win ");
      }
      if(c_res === "rock"){
            u_sr?.setAttribute("src",imgs.paper)
            c_puter?.setAttribute("src",imgs.rock)
            vs(main)
            log("you win ");
      }
      
      console.log("paper");
})
scissors?.addEventListener("click",()=>{
      u_c = "scissors"
      if(u_c === c_res){
            u_sr?.setAttribute("src",imgs.scissors)
            c_puter?.setAttribute("src",imgs.scissors)
            vs(main)
            log("its a tie");
            

      }
      if(c_res === "rock"){
            u_sr?.setAttribute("src",imgs.scissors)
            c_puter?.setAttribute("src",imgs.rock)
            vs(main)
            log("I win ");
      }
      if(c_res === "paper"){
            u_sr?.setAttribute("src",imgs.scissors)
            c_puter?.setAttribute("src",imgs.paper)
            vs(main)
            log("you win");
      }
      
      console.log("scissors");
})
