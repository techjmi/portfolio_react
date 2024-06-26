import blog from "../Assets/Projects/blog.png";
import curd from "../Assets/Projects/curd.png";
import flipkart from "../Assets/Projects/flipkart.png";
import notes from "../Assets/Projects/notes.png";
import recipe from "../Assets/Projects/reciep.png";
import food from '../Assets/Projects/food.png'

const projects = [
  {
    imgPath: blog,
    title: "Blog Application",
    description: "A blog application built with the MERN stack (MongoDB, Express, React, Node.js). This application allows users to create, read, update, and delete blog posts. It features user authentication, rich text editor, and responsive design, providing a seamless blogging experience.",
    ghLink: "https://github.com/techjmi/blog__mern",
    demoLink: "https://blog-mern-cfpm.onrender.com/",
  },
  {
    imgPath: food,
    title: "Food Web Application",
    description: "A food ordering web application built using the MERN stack. Users can browse through various food items, add them to their cart, and place orders. The application includes features like user authentication, order tracking, and a secure payment gateway integration.",
    ghLink: "https://github.com/techjmi/food-web",
    demoLink: "https://food-application-web-tios.onrender.com/",
  },
  {
    imgPath: recipe,
    title: "Recipe Search Application",
    description: "A recipe search application built using the Forkify API. Users can search for recipes by ingredients, view detailed instructions, and save their favorite recipes. The application provides an intuitive user interface and leverages modern JavaScript practices.",
    ghLink: "https://github.com/techjmi/Recipe_Search",
    demoLink: "https://brilliant-sprite-34b3f9.netlify.app/",
  },
  {
    imgPath: notes,
    title: "Notes App",
    description: "A Notes App built with React.js that allows users to create, edit, and delete notes. The app features a sleek user interface, local storage for data persistence, and supports Markdown syntax for formatting notes.",
    ghLink: "https://github.com/techjmi/notes-app",
    demoLink: "https://notes-react-sr48.onrender.com/",
  },
  {
    imgPath: curd,
    title: "CRUD Application with Redux Thunk",
    description: "A CRUD application built with React.js and Redux Thunk middleware. This application demonstrates state management using Redux and asynchronous actions with Thunk. It allows users to perform create, read, update, and delete operations efficiently.",
    ghLink: "https://github.com/techjmi/Redux-toolkit-thunk",
    demoLink: "https://redux-toolkit-thunk.onrender.com/",
  },
  {
    imgPath: flipkart,
    title: "Flipkart Clone",
    description: "A clone of the popular e-commerce website Flipkart built with React.js. The application replicates key features like product listings, user authentication, cart management, and checkout process, providing a comprehensive understanding of e-commerce functionalities.",
    ghLink: "https://github.com/techjmi/flipkart-clone",
    demoLink: "https://flipkart-frontend-50y3.onrender.com/",
  },
];

  

export default projects;
