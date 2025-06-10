const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fekwhatapps');

}

let allChats=[
    {
        from:"neha",
        to:"sachin",
        msg:"i love you",
        created_at:new Date(),
     },
 
     {
        from:"neeraj",
        to:"munesh",
        msg:"where are you bro",
        created_at:new Date(),
     },
 
     {
         from:"sachin",
         to:"adam",
         msg:"who are you?",
         created_at:new Date(),
     },
 
     {
         from:"reeta",
         to:"geeta",
         msg:"kaha ja rahi rahi ho",
         created_at:new Date(),
     },
 
     {
         from:"suresh",
         to:"munesh",
         msg:"wrong",
         created_at:new Date(),
     }
];

Chat.insertMany(allChats);
   