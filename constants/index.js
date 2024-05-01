const listOfRefs=[
    {
      id:1,
      name:'Home',
      ref:'#top'
    },
    {
      id:2,
      name:'About',
      ref:'#about',
    },
    {
      id:3,
      name:'Profile',
      ref:'#profile',
    },
    {
      id:4,
      name:'Services',
      ref:'#services',
    }
  ]

const study= [
    {
      id:1,
      name: "Engineer",
      place: "U. of Development, Chile",
      description: "3.5 years of engineering experience, with 49% of courses passed.",
      date: "March 2019 - today",
      icon: "UDD.png"
    },
    {
      id:2,
      name: "Henry",
      place: "Remote, Chile",
      description: "Bootcamp with +800 hours of programming",
      date: "March 2023 - July 2023",
      icon: "logoOG.png"
    }
  ]

const experinces= []

const projects=[
  {
    id:1,
    name: "Doggy Deep",
    url: "https://github.com/diegoleteliers10/PI_Dogs_Henry",
    deploy:"https://doggydeep.netlify.app/",
    image: "/doggydeep.png",
    description: "Design and develop a dog App with search, filtering, creation and deletion of dogs, eye catching and intuitive design. I had to get dogs through api requests to be displayed on screen, plus validations. I had use the data through routes in the server. And I had to create a database that had new and existing dogs and temperaments.",
    leng:[{name:"#React",icon:''},{name:"#Express",icon:''},{name:"#PostgreSQL",icon:''},{name:"#Redux",icon:''}]
  },
  {
    id:2,
    name: "Rick & Morty",
    url: "https://github.com/diegoleteliers10/Rick_y_Morty",
    deploy:"",
    image: "/rick&morty.png",
    description: "Design and develop a rick and morty App. Where you can search, filtering, creation and deleted chartacters. Also eye catching and intuitive. I had to get characters through api requests to be displayed on screen, plus validations. I had use the data through routes in the server. And I had to create a database that save new users and their favorites characters.",
    leng:[{name:"#React",icon:''},{name:"#Express",icon:''},{name:"#PostgreSQL",icon:''},{name:"#Redux",icon:''}]
  },
  {
    id:3,
    name: "WizzardingWares",
    url: "https://github.com/diegoleteliers10/wizarding_wares",
    deploy:"https://wizarding-wares-red.vercel.app/",
    image: "/wizzardingwares.png",
    description: "My job was to develop the backend part of the project. Having to create the api and the endpoints for the application data usage. I used JWT to encrypt the api endpoints to make it more secure. And I helped to a lesser extent in the frontend, besides being in charge of the deployment of the application and the servers along with the database.",
    leng:[{name:"#React",icon:''},{name:"#Express",icon:''},{name:"#PostgreSQL",icon:''},{name:"#Redux",icon:''}]
  },
  {
    id:4,
    name: "Puraluz Yoga",
    url: "https://github.com/diegoleteliers10/puraluz",
    deploy:"https://puraluz.vercel.app/",
    image: "/puraluz_yoga.png",
    description: "My job was to develop the landing page for a friend, who is a yoga instructor. Had to create de mail form with email.js and use the api of whatsapp to send messages via whatsapp to my friend. Also had to design the website.",
    leng:[{name:"#Astro",icon:''},{name:"#Emailjs",icon:''}]
  }
]

const skills = [
  {
    name: "HTML",
    icon: '',
    level: "Advanced"
  },
  {
    name: "CSS",
    icon: '',
    level: "Intermediate"
  },
  {
    name: "JS",
    icon: '',
    level: "Intermediate"
  },
  {
    name: "TS",
    icon: '',
    level: "Intermediate"
  },
  {
    name: "React",
    icon: '',
    level: "Intermediate"
  },
  {
    name: "Redux",
    icon: '',
    level: "Intermediate"
  },
  {
    name: "Tailwind",
    icon: '',
    level: "Advanced"
  },
  {
    name: "Node",
    icon: '',
    level: "Intermediate"
  },
  {
    name: "Git",
    icon: '',
    level: "Intermediate"
  },
  {
    name: "Express",
    icon: '',
    level: "Intermediate"
  },
  {
    name: "Postgre",
    icon: '',
    level: "Advanced"
  },
  {
    name: "Python",
    icon: '',
    level: "Basic"
  }
];

  export {
    listOfRefs,
    study,
    experinces,
    projects,
    skills
  }