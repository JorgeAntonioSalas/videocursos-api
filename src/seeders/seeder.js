const db = require("../utils/database");
const initModels = require("../models/initModels")
const { forEach } = require("p-iteration");
const Users = require("../models/users.models");
const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");
const UsersCourses = require("../models/usersCourses.models");

initModels();

const users = [ 
    {firstName: "Andres", lastName: "Juarez", email: "andres@gmail.com", password: "123hhq"},
    {firstName: "Karla", lastName: "Morales", email: "karla@gmail.com", password: "t2323ew"},
    {firstName: "Brillitt", lastName: "Ccasa", email: "brillitt@gmail.com", password: "443gggq"},
    {firstName: "Jorge", lastName: "Salas", email: "jorge@gmail.com", password: "2322d"}
];

const categories = [
    {name: "Sports"},
    {name: "Letters"},
    {name: "Scients"},
    {name: "Matt"},
    {name: "English"}
];

const courses = [
    {title: "Soccer", description: "Soccer desde 0 hasta avanzado", instructor: "Cristiano Ronaldo", categoryId: 5},
    {title: "Node", description: "Node desde 0 hasta avanzado", instructor: "Zinedine Zidane", categoryId: 1},
    {title: "React", description: "React desde 0 hasta avanzado", instructor: "Matt Takamiya", categoryId: 2},
    {title: "BaseDeDatos", description: "BaseDeDatos nivel avanzado", instructor: "Andrés Cáceres", categoryId: 4},
    {title: "Fundamentos", description: "Fundamentos desde 0 hasta avanzado", instructor: "BrendaBeron", categoryId: 3}
];

const videos = [
    {title: "Soccer", url: "www.youtube.com/soccer", courseId: 1},
    {title: "Node", url: "www.youtube.com/node", courseId: 2},
    {title: "React", url: "www.youtube.com/react", courseId: 3},
    {title: "BaseDeDatos", url: "www.youtube.com/basededatos", courseId: 4},
    {title: "Fundamentos", url: "www.youtube.com/fundamentos", courseId: 5}   
];

const usersCourses = [
    {user_id:1, course_id:2},
    {user_id:1, course_id:4},
    {user_id:2, course_id:1},
    {user_id:3, course_id:5},
    {user_id:4, course_id:3}
];

async function seeding(){
    await db.sync({force: true})
    await forEach(users, (user)=> Users.create(user))
    await forEach(categories, (category)=> Categories.create(category))
    await forEach(courses, (course)=> Courses.create(course))
    await forEach(videos, (video)=> Videos.create(video))
    await forEach(usersCourses, (userCourse)=> UsersCourses.create(userCourse))
};

seeding();



