const employees = [
  {
    id: 1,
    name:"Ali",
    email: "ali@example.com",
    password: "123",
    tasks: [
      {
        id: 1,
        title: "Frontend Dashboard UI",
        description: "Create the frontend UI for the employee dashboard using React and Tailwind.",
        date: "2025-06-15",
        category: "frontend",
        active: true,
        newTask: true,
        completed: false
      },
      {
        id: 2,
        title: "Fix Login Bug",
        description: "Debug the issue with employee login authentication.",
        date: "2025-06-10",
        category: "bugfix",
        active: false,
        newTask: false,
        completed: true
      },
      {
        id: 3,
        title: "User Authentication",
        description: "Integrate JWT-based authentication in the backend.",
        date: "2025-06-13",
        category: "backend",
        active: true,
        newTask: true,
        completed: false
      },
      {
        id: 4,
        title: "Create API Documentation",
        description: "Write clear and concise API documentation for the employee task system.",
        date: "2025-06-18",
        category: "documentation",
        active: true,
        newTask: false,
        completed: false
      }
    ]
  },
  {
    id: 2,
    name:"Fatima",
    email: "fatima@example.com",
    password: "123",
    tasks: [
      {
        id: 1,
        title: "UI Review and Testing",
        description: "Perform usability testing and suggest UI improvements.",
        date: "2025-06-14",
        category: "uiux",
        active: false,
        newTask: false,
        completed: true
      },
      {
        id: 2,
        title: "Design Landing Page",
        description: "Design a professional landing page mockup in Figma.",
        date: "2025-06-12",
        category: "design",
        active: true,
        newTask: true,
        completed: false
      },
      {
        id: 3,
        title: "Prepare Test Cases",
        description: "Create and document test cases for task creation module.",
        date: "2025-06-11",
        category: "qa",
        active: true,
        newTask: false,
        completed: false
      },
      {
        id: 4,
        title: "Employee Feedback Form",
        description: "Design and implement feedback collection form for employees.",
        date: "2025-06-20",
        category: "research",
        active: true,
        newTask: true,
        completed: false
      }
    ]
  },
  {
    id: 3,
    name:"Usman",
    email: "usman@example.com",
    password: "123",
    tasks: [
      {
        id: 1,
        title: "Setup CI/CD",
        description: "Implement continuous integration and deployment pipelines.",
        date: "2025-06-16",
        category: "devops",
        active: true,
        newTask: true,
        completed: false
      },
      {
        id: 2,
        title: "Deploy to Production",
        description: "Deploy the new features to production server.",
        date: "2025-06-17",
        category: "backend",
        active: false,
        newTask: false,
        completed: true
      },
      {
        id: 3,
        title: "Support Ticket Review",
        description: "Analyze recent support tickets and resolve high priority ones.",
        date: "2025-06-10",
        category: "support",
        active: true,
        newTask: true,
        completed: false
      },
      {
        id: 4,
        title: "Optimize SQL Queries",
        description: "Improve performance of task query endpoints.",
        date: "2025-06-11",
        category: "backend",
        active: true,
        newTask: false,
        completed: false
      }
    ]
  }
];

const admin = [{
  "id": 1,
  name : "Misbah",
  "email": "admin@example.com",
  "password": "123"
}];

export const setLocalStorage = ()=>{
  localStorage.setItem('employees', JSON.stringify(employees) )
  localStorage.setItem('admin', JSON.stringify(admin) )
}
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  admin[0].password = '123'
  localStorage.setItem('admin' , JSON.stringify(admin))
  return {employees, admin}
  
}
