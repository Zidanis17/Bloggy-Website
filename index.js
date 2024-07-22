import express, { application } from "express";
import bodyParser from "body-parser";
const port = 3000;
const app = express();

let blogsPosted = [{
    title: 'Lorem Ipsum',
    story: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n" +
      '\r\n' +
      'Why do we use it?\r\n' +
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\r\n" +
      '\r\n' +
      '\r\n' +
      'Where does it come from?\r\n' +
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\r\n' +
      '\r\n' +
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\r\n' +
      '\r\n' +
      'Where can I get some?\r\n' +
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    id: 0},{
    title: 'Lorem Ipsum',
    story: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n" +
      '\r\n' +
      'Why do we use it?\r\n' +
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\r\n" +
      '\r\n' +
      '\r\n' +
      'Where does it come from?\r\n' +
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\r\n' +
      '\r\n' +
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\r\n' +
      '\r\n' +
      'Where can I get some?\r\n' +
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    id: 1},
];
let id = 2;


app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/create", (req, res) =>{
    res.render("create.ejs");
});

app.get("/blogs", (req, res) =>{
    res.render("blogs.ejs", {blogs:blogsPosted});
});

app.get('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    blogsPosted = blogsPosted.filter(blog => blog.id !== id);
    res.redirect('/blogs');
});

app.get('/read/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const blogsPosted2 =  blogsPosted.filter(elem => elem.id === id);
    res.render("read.ejs", {title: blogsPosted2[0].title, story: blogsPosted2[0].story})
});

app.get('/edit/:id',  (req, res) => {
    const id = parseInt(req.params.id, 10);
    const blogsPosted2 =  blogsPosted.find(elem =>  elem.id === id);
    res.render("edit.ejs", {id: blogsPosted2.id ,title: blogsPosted2.title, story: blogsPosted2.story});
});

app.post('/edited/:id',  (req, res) => {
    const id = parseInt(req.params.id, 10);
    const indexOfBlog =  blogsPosted.findIndex(elem =>  elem.id === id);

    blogsPosted[indexOfBlog] = req.body;
    blogsPosted[indexOfBlog].id = id

    res.redirect("/blogs");
});

app.get("/edited/:id", (req, res) =>{
    res.render("edit.ejs");
});

app.post("/submit", (req, res) => {
    const blog = req.body;
    blog.id = id;
    id++;
    blogsPosted.push(blog);
    res.redirect("/blogs");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})