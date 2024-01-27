import express from "express";
import bodyparser from "body-parser";
import ejs from "ejs";
import _ from "lodash";


const homePageContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eius iste molestiae minima distinctio laboriosam animi vel, quaerat maxime quasi voluptates amet accusantium repudiandae non iure voluptatum ea dolores harum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eius iste molestiae minima distinctio laboriosam animi vel, quaerat maxime quasi voluptates amet accusantium repudiandae non iure voluptatum ea dolores harum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eius iste molestiae minima distinctio laboriosam animi vel, quaerat maxime quasi voluptates amet accusantium repudiandae non iure voluptatum ea dolores harum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eius iste molestiae minima distinctio laboriosam animi vel, quaerat maxime quasi voluptates amet accusantium repudiandae non iure voluptatum ea dolores harum."
const aboutPageContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eius iste molestiae minima distinctio laboriosam animi vel, quaerat maxime quasi voluptates amet accusantium repudiandae non iure voluptatum ea dolores harum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eius iste molestiae minima distinctio laboriosam animi vel, quaerat maxime quasi voluptates amet accusantium repudiandae non iure voluptatum ea dolores harum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eius iste molestiae minima distinctio laboriosam animi vel, quaerat maxime quasi voluptates amet accusantium repudiandae non iure voluptatum ea dolores harum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eius iste molestiae minima distinctio laboriosam animi vel, quaerat maxime quasi voluptates amet accusantium repudiandae non iure voluptatum ea dolores harum."
const conatctPageContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eius iste molestiae minima distinctio laboriosam animi vel, quaerat maxime quasi voluptates amet accusantium repudiandae non iure voluptatum ea dolores harum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eius iste molestiae minima distinctio laboriosam animi vel, quaerat maxime quasi voluptates amet accusantium repudiandae non iure voluptatum ea dolores harum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eius iste molestiae minima distinctio laboriosam animi vel, quaerat maxime quasi voluptates amet accusantium repudiandae non iure voluptatum ea dolores harum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eius iste molestiae minima distinctio laboriosam animi vel, quaerat maxime quasi voluptates amet accusantium repudiandae non iure voluptatum ea dolores harum."


const app = express();
const port = 3000;

app.set("view engine" , "ejs");

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

var posts = [];

app.get("/" , (req,res) =>{
    res.render("home" ,{
        startingContent: homePageContent,
        posts:posts
    });

});
app.get("/about" , (req,res) =>{
    res.render("about" ,{aboutContent: aboutPageContent});
});
app.get("/contact" , (req,res) =>{
    res.render("contact" ,{contactContent: conatctPageContent });
});
app.get("/compodes" , (req,res) =>{
    res.render("compodes");
});
// app.get("/post" , (req,res) =>{
//     res.render("post");
// });


app.post("/compodes" , (req ,res) =>{

    var post = {
        title: req.body.postTitle,
        content: req.body.postBody
    }

    posts.push(post);

    res.redirect("/");
});
app.get("/post" , (req , res) =>{
    res.render("post"); 
})

app.get("/posts/:postName" , (req ,res) =>{
    const requestedTitle = _.lowerCase(req.params.postName);

    posts.forEach(function(post){
        const storeTitle = _.lowerCase(post.title);

        if(storeTitle === requestedTitle){
                res.render("postss" , {
                    title: post.title,
                    content: post.content
                }); 
        }
        });
});


//  app.post("/" , (req ,res) =>{
//     res.render("header");
//  });

app.listen(port , () =>{
    console.log(`The server is running on port ${port}`)
});
