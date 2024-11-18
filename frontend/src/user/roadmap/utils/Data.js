import componentsImg from "../assets/components.png";
import propsImg from "../assets/config.png";
import jsxUiImg from "../assets/jsx-ui.png";
import stateImg from "../assets/state-mgmt.png";

export const CORE_CONCEPTS = {
  "React": [
    {
      image: "https://tse3.mm.bing.net/th?id=OIP.GzdFy5squ0rVubF6hkEjxgHaFe&pid=Api&P=0&h=180",
      title: "Components",
      description:
        "The core UI building block - compose the user interface by combining multiple components.",
    },
    {
      image: "https://tse1.mm.bing.net/th?id=OIP.ODdee1TJBMuYPwplLtsMDwHaEK&pid=Api&P=0&h=180",
      title: "JSX",
      description:
        "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
    },
    {
      image: "https://tse3.mm.bing.net/th?id=OIP.dCML_A4kzUtHX1tRElHsRwHaFc&pid=Api&P=0&h=180",
      title: "Props",
      description:
        "Make components configurable (and therefore reusable) by passing input data to them.",
    },
    {
      image: "https://tse4.mm.bing.net/th?id=OIP.6jTSr1z5twk3iYQIa3SuyAHaEK&pid=Api&P=0&h=180",
      title: "State",
      description:
        "React-managed data which, when changed, causes the component to re-render & the UI to update.",
    },
  ],
  "Java": [
    {
      image: "https://tse2.mm.bing.net/th?id=OIP.rTY438E7T7HMhqMjgBuergHaEK&pid=Api&P=0&h=180",
      title: "Java Basics",
      description: "Learn the basics of Java programming including syntax, data types, and control flow.",
    },
    {
      image: "https://tse2.mm.bing.net/th?id=OIP.18oa02exDX1vVlr0e3Q5RAHaEK&pid=Api&P=0&h=180",
      title: "Object-Oriented Programming",
      description: "Understand the core principles of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction.",
    },
    {
      image: "https://tse1.mm.bing.net/th?id=OIP.linlgFV2AGXiMjd4kKmAgwHaDw&pid=Api&P=0&h=180",
      title: "Collections Framework",
      description: "Learn how to use Java's Collection framework for managing groups of objects.",
    },
    {
      image: "https://tse2.mm.bing.net/th?id=OIP.TJh3oROUDPuHevvHKzs4OQHaEK&pid=Api&P=0&h=180",
      title: "Multithreading",
      description: "Understand how to use threads and concurrency to perform multiple operations simultaneously.",
    },
  ],
  "Python": [
    {
      image: "https://tse1.mm.bing.net/th?id=OIP.T_rLgeh73t7-ryvut12I8QHaDe&pid=Api&P=0&h=180",
      title: "Python Basics",
      description: "Understand Python syntax, variables, data types, and basic operations.",
    },
    {
      image: jsxUiImg,
      title: "Data Structures",
      description: "Learn about Python's built-in data structures such as lists, tuples, sets, and dictionaries.",
    },
    {
      image: propsImg,
      title: "Flask",
      description: "Get started with Flask to build web applications in Python.",
    },
    {
      image: stateImg,
      title: "NumPy",
      description: "Explore NumPy for numerical computing and array manipulation in Python.",
    },
  ],
  "C++": [
    {
      image: componentsImg,
      title: "C++ Basics",
      description: "Understand the syntax, data types, and control structures in C++.",
    },
    {
      image: jsxUiImg,
      title: "Object-Oriented Programming",
      description: "Learn OOP concepts in C++ such as classes, objects, inheritance, and polymorphism.",
    },
    {
      image: propsImg,
      title: "Standard Template Library (STL)",
      description: "Get familiar with the STL and how to use vectors, maps, sets, and other containers.",
    },
    {
      image: stateImg,
      title: "Pointers and Memory Management",
      description: "Understand pointers, memory allocation, and how to manage resources effectively.",
    },
  ],
  "MongoDB": [
    {
      image: componentsImg,
      title: "MongoDB Basics",
      description: "Learn how to set up and use MongoDB, a NoSQL database.",
    },
    {
      image: jsxUiImg,
      title: "Aggregation Framework",
      description: "Understand how to use MongoDB's aggregation framework for data processing and analysis.",
    },
    {
      image: propsImg,
      title: "Indexes",
      description: "Learn about creating and using indexes in MongoDB to improve query performance.",
    },
    {
      image: stateImg,
      title: "Data Modeling",
      description: "Understand the best practices for designing schemas in MongoDB.",
    },
  ],
  "SQL": [
    {
      image: componentsImg,
      title: "SQL Basics",
      description: "Learn the fundamentals of SQL including SELECT, INSERT, UPDATE, and DELETE commands.",
    },
    {
      image: jsxUiImg,
      title: "Joins",
      description: "Understand how to use JOIN operations to combine data from multiple tables.",
    },
    {
      image: propsImg,
      title: "Indexes",
      description: "Learn how indexes improve the speed of data retrieval operations.",
    },
    {
      image: stateImg,
      title: "Normalization",
      description: "Understand how to structure a relational database to reduce redundancy and improve data integrity.",
    },
  ],
  "R": [
    {
      image: componentsImg,
      title: "R Basics",
      description: "Get started with R programming for statistical computing and graphics.",
    },
    {
      image: jsxUiImg,
      title: "Data Manipulation",
      description: "Learn how to manipulate and clean data using R libraries like dplyr and tidyr.",
    },
    {
      image: propsImg,
      title: "Data Visualization",
      description: "Create compelling data visualizations using ggplot2 and other visualization libraries.",
    },
    {
      image: stateImg,
      title: "Statistical Analysis",
      description: "Understand how to perform various statistical analyses using R.",
    },
  ],
  "C#": [
    {
      image: componentsImg,
      title: "C# Basics",
      description: "Learn the fundamentals of C# programming including syntax, data types, and control structures.",
    },
    {
      image: jsxUiImg,
      title: "OOP in C#",
      description: "Explore object-oriented programming concepts such as classes, inheritance, and polymorphism in C#.",
    },
    {
      image: propsImg,
      title: "LINQ",
      description: "Learn how to use Language Integrated Query (LINQ) for querying collections in C#.",
    },
    {
      image: stateImg,
      title: ".NET Framework",
      description: "Understand the .NET framework and how to build applications using C#.",
    },
  ],
  "WebDev": [
    {
      image: componentsImg,
      title: "HTML & CSS",
      description: "Learn the basics of HTML for structure and CSS for styling web pages.",
    },
    {
      image: jsxUiImg,
      title: "JavaScript",
      description: "Understand how to use JavaScript to add interactivity to web pages.",
    },
    {
      image: propsImg,
      title: "Responsive Design",
      description: "Learn how to create web pages that look good on all devices using responsive design techniques.",
    },
    {
      image: stateImg,
      title: "Frontend Frameworks",
      description: "Explore frontend frameworks like React, Angular, and Vue.js for building modern web apps.",
    },
  ],
  "SpringBoot": [
    {
      image: componentsImg,
      title: "Spring Boot Basics",
      description: "Learn how to set up and run a Spring Boot application.",
    },
    {
      image: jsxUiImg,
      title: "Dependency Injection",
      description: "Understand the concept of dependency injection and how Spring Boot uses it.",
    },
    {
      image: propsImg,
      title: "Spring MVC",
      description: "Explore how to create RESTful web services using Spring MVC.",
    },
    {
      image: stateImg,
      title: "Spring Data JPA",
      description: "Learn how to use Spring Data JPA for database operations in Spring Boot.",
    },
  ],
  "Django": [
    {
      image: componentsImg,
      title: "Django Basics",
      description: "Get started with Django, a high-level Python web framework.",
    },
    {
      image: jsxUiImg,
      title: "Models",
      description: "Learn how to define models in Django to represent database tables.",
    },
    {
      image: propsImg,
      title: "Views & Templates",
      description: "Understand how to create views and templates for rendering HTML in Django.",
    },
    {
      image: stateImg,
      title: "Django REST Framework",
      description: "Explore how to create RESTful APIs using Django REST Framework.",
    },
  ],
  "AI": [
    {
      image: componentsImg,
      title: "AI Basics",
      description: "Understand the fundamentals of Artificial Intelligence, including key concepts and techniques.",
    },
    {
      image: jsxUiImg,
      title: "Machine Learning",
      description: "Learn how AI systems can learn from data using Machine Learning algorithms.",
    },
    {
      image: propsImg,
      title: "Neural Networks",
      description: "Explore the basics of neural networks and how they are used in AI.",
    },
    {
      image: stateImg,
      title: "AI Ethics",
      description: "Understand the ethical considerations and challenges in the development and deployment of AI.",
    },
  ],
  "ML": [
    {
      image: componentsImg,
      title: "Machine Learning Basics",
      description: "Learn the fundamental concepts of Machine Learning and how it differs from traditional programming.",
    },
    {
      image: jsxUiImg,
      title: "Supervised Learning",
      description: "Understand how supervised learning algorithms use labeled data for training.",
    },
    {
      image: propsImg,
      title: "Unsupervised Learning",
      description: "Explore unsupervised learning methods for discovering patterns in data.",
    },
    {
      image: stateImg,
      title: "Model Evaluation",
      description: "Learn how to evaluate the performance of machine learning models.",
    },
  ],
  "DL": [
    {
      image: componentsImg,
      title: "Deep Learning Basics",
      description: "Understand the principles of Deep Learning and how it builds on Machine Learning.",
    },
    {
      image: jsxUiImg,
      title: "Neural Networks",
      description: "Learn how neural networks are structured and how they function in deep learning.",
    },
    {
      image: propsImg,
      title: "Convolutional Neural Networks",
      description: "Explore CNNs and their application in image processing tasks.",
    },
    {
      image: stateImg,
      title: "Recurrent Neural Networks",
      description: "Understand RNNs and their use in processing sequential data.",
    },
  ],
  "GenAI": [
    {
      image: componentsImg,
      title: "Generative AI Basics",
      description: "Learn about Generative AI and how it can create new data similar to existing data.",
    },
    {
      image: jsxUiImg,
      title: "GANs",
      description: "Explore Generative Adversarial Networks and how they are used in Generative AI.",
    },
    {
      image: propsImg,
      title: "Autoencoders",
      description: "Understand how autoencoders work and their application in data generation.",
    },
    {
      image: stateImg,
      title: "Applications of GenAI",
      description: "Discover real-world applications of Generative AI in various industries.",
    },
  ],
  "Angular": [
    {
      image: componentsImg,
      title: "Components & Templates",
      description: "Learn how to create and use components and templates to build Angular applications.",
    },
    {
      image: jsxUiImg,
      title: "Directives",
      description: "Understand how to use Angular directives to extend HTML capabilities.",
    },
    {
      image: propsImg,
      title: "Services & Dependency Injection",
      description: "Explore how to use services and dependency injection for code reusability and modularity.",
    },
    {
      image: stateImg,
      title: "Routing & Navigation",
      description: "Learn how to implement routing to navigate between different views in an Angular app.",
    },
  ],
  "Express": [
    {
      image: componentsImg,
      title: "Express Basics",
      description: "Get started with Express, a web application framework for Node.js.",
    },
    {
      image: jsxUiImg,
      title: "Routing",
      description: "Understand how to set up and manage routes in an Express application.",
    },
    {
      image: propsImg,
      title: "Middleware",
      description: "Learn how to use middleware to handle requests, responses, and error handling in Express.",
    },
    {
      image: stateImg,
      title: "REST APIs",
      description: "Build RESTful APIs using Express and manage HTTP methods and status codes.",
    },
  ],
  "Node": [
    {
      image: componentsImg,
      title: "Node.js Basics",
      description: "Learn the fundamentals of Node.js and its event-driven architecture.",
    },
    {
      image: jsxUiImg,
      title: "File System",
      description: "Understand how to interact with the file system using Node.js.",
    },
    {
      image: propsImg,
      title: "Asynchronous Programming",
      description: "Explore async programming in Node.js using callbacks, promises, and async/await.",
    },
    {
      image: stateImg,
      title: "Modules & NPM",
      description: "Learn about Node.js modules and how to use NPM for package management.",
    },
  ],
  "Flask": [
    {
      image: componentsImg,
      title: "Flask Basics",
      description: "Get started with Flask, a lightweight WSGI web application framework in Python.",
    },
    {
      image: jsxUiImg,
      title: "Routing & Views",
      description: "Understand how to create routes and views to handle HTTP requests in Flask.",
    },
    {
      image: propsImg,
      title: "Templates & Jinja2",
      description: "Learn how to render HTML templates using Jinja2 in Flask.",
    },
    {
      image: stateImg,
      title: "RESTful Services",
      description: "Build RESTful web services using Flask and handle JSON data.",
    },
  ],
  "Cybersecurity": [
    {
      image: componentsImg,
      title: "Basic Concepts",
      description: "Understand the fundamentals of cybersecurity including threats, vulnerabilities, and risks.",
    },
    {
      image: jsxUiImg,
      title: "Cryptography",
      description: "Learn about encryption, decryption, and key management to secure data.",
    },
    {
      image: propsImg,
      title: "Network Security",
      description: "Explore techniques to protect networks from intrusions, such as firewalls and VPNs.",
    },
    {
      image: stateImg,
      title: "Ethical Hacking",
      description: "Understand the role of ethical hacking in identifying and mitigating security vulnerabilities.",
    },
  ],
  "Blockchain": [
    {
      image: componentsImg,
      title: "Blockchain Basics",
      description: "Learn the fundamentals of blockchain technology and its decentralized nature.",
    },
    {
      image: jsxUiImg,
      title: "Consensus Mechanisms",
      description: "Understand how consensus is achieved in a blockchain network using methods like PoW and PoS.",
    },
    {
      image: propsImg,
      title: "Smart Contracts",
      description: "Explore how smart contracts work and their role in automating transactions on the blockchain.",
    },
    {
      image: stateImg,
      title: "Decentralized Applications (dApps)",
      description: "Learn how to develop decentralized applications that run on blockchain networks.",
    },
  ],
  "Cloud Computing": [
    {
      image: componentsImg,
      title: "Cloud Service Models",
      description: "Understand the different cloud service models: IaaS, PaaS, and SaaS.",
    },
    {
      image: jsxUiImg,
      title: "Virtualization",
      description: "Learn how virtualization is used in cloud computing to create virtual machines and environments.",
    },
    {
      image: propsImg,
      title: "Cloud Storage",
      description: "Explore cloud storage solutions and how they provide scalable and reliable data storage.",
    },
    {
      image: stateImg,
      title: "Deployment Models",
      description: "Understand the different cloud deployment models: public, private, hybrid, and multi-cloud.",
    },
  ],
  "DevOps": [
    {
      image: componentsImg,
      title: "CI/CD Pipeline",
      description: "Learn how to set up a continuous integration and continuous deployment pipeline for software development.",
    },
    {
      image: jsxUiImg,
      title: "Infrastructure as Code",
      description: "Understand how to manage and provision infrastructure using code with tools like Terraform and Ansible.",
    },
    {
      image: propsImg,
      title: "Containerization",
      description: "Explore how to use containers for consistent and isolated application environments using Docker.",
    },
    {
      image: stateImg,
      title: "Monitoring & Logging",
      description: "Learn how to implement monitoring and logging to maintain application performance and reliability.",
    },
  ],
  "Quantum Computing": [
    {
      image: componentsImg,
      title: "Quantum Mechanics Basics",
      description: "Understand the principles of quantum mechanics that form the foundation of quantum computing.",
    },
    {
      image: jsxUiImg,
      title: "Qubits",
      description: "Learn about qubits and how they differ from classical bits in quantum computing.",
    },
    {
      image: propsImg,
      title: "Quantum Algorithms",
      description: "Explore key quantum algorithms like Shor's algorithm and Grover's algorithm.",
    },
    {
      image: stateImg,
      title: "Quantum Supremacy",
      description: "Understand the concept of quantum supremacy and its implications for computation.",
    },
  ],
  "Data Science": [
    {
      image: componentsImg,
      title: "Data Analysis",
      description: "Learn how to analyze and interpret data using statistical and computational methods.",
    },
    {
      image: jsxUiImg,
      title: "Data Visualization",
      description: "Understand how to create visual representations of data to uncover insights using tools like Matplotlib and Seaborn.",
    },
    {
      image: propsImg,
      title: "Machine Learning Models",
      description: "Explore how to build and train machine learning models for predictive analysis.",
    },
    {
      image: stateImg,
      title: "Big Data Technologies",
      description: "Learn about big data tools and frameworks like Hadoop and Spark for processing large datasets.",
    },
  ],
  "IoT": [
    {
      image: componentsImg,
      title: "IoT Basics",
      description: "Understand the fundamentals of IoT and how devices are connected to exchange data.",
    },
    {
      image: jsxUiImg,
      title: "Sensors & Actuators",
      description: "Learn how sensors collect data and actuators perform actions in an IoT system.",
    },
    {
      image: propsImg,
      title: "Communication Protocols",
      description: "Explore different communication protocols used in IoT such as MQTT, HTTP, and CoAP.",
    },
    {
      image: stateImg,
      title: "Edge Computing",
      description: "Understand how edge computing is used to process data closer to where it is generated in IoT systems.",
    },
  ],
  "AR/VR": [
    {
      image: componentsImg,
      title: "Augmented Reality (AR)",
      description: "Learn how AR overlays digital content on the real world using devices like smartphones and AR glasses.",
    },
    {
      image: jsxUiImg,
      title: "Virtual Reality (VR)",
      description: "Understand how VR immerses users in a fully virtual environment using devices like VR headsets.",
    },
    {
      image: propsImg,
      title: "3D Modeling",
      description: "Explore how 3D models are created and used in AR/VR applications.",
    },
    {
      image: stateImg,
      title: "AR/VR Development Tools",
      description: "Learn about tools and platforms like Unity and Unreal Engine for developing AR/VR applications.",
    },
  ],
  "Edge Computing": [
    {
      image: componentsImg,
      title: "Edge Computing Basics",
      description: "Understand the concept of edge computing and how it brings computation closer to data sources.",
    },
    {
      image: jsxUiImg,
      title: "Latency Reduction",
      description: "Learn how edge computing reduces latency and improves performance for real-time applications.",
    },
    {
      image: propsImg,
      title: "Edge Devices",
      description: "Explore the role of edge devices in processing data locally in edge computing.",
    },
    {
      image: stateImg,
      title: "Security in Edge Computing",
      description: "Understand the security challenges and solutions in edge computing environments.",
    },
  ],
  "Serverless Computing": [
    {
      image: componentsImg,
      title: "Serverless Architecture",
      description: "Learn about serverless architecture and how it abstracts server management away from developers.",
    },
    {
      image: jsxUiImg,
      title: "Function as a Service (FaaS)",
      description: "Understand how FaaS allows you to deploy and run individual functions in the cloud.",
    },
    {
      image: propsImg,
      title: "Event-Driven Computing",
      description: "Explore how serverless functions are triggered by events and how they are used in event-driven architectures.",
    },
    {
      image: stateImg,
      title: "Scalability & Cost Efficiency",
      description: "Learn how serverless computing provides scalability and cost efficiency by charging only for execution time.",
    },
  ],
  
};

// import componentsImg from "../assets/components.png";
// import propsImg from "../assets/config.png";
// import jsxUiImg from "../assets/jsx-ui.png";
// import stateImg from "../assets/state-mgmt.png";

// export const CORE_CONCEPTS = {
//   "React": [
//     {
//       image: componentsImg,
//       title: "Components",
//       description:
//         "The core UI building block - compose the user interface by combining multiple components.",
//     },
//     {
//       image: jsxUiImg,
//       title: "JSX",
//       description:
//         "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
//     },
//     {
//       image: propsImg,
//       title: "Props",
//       description:
//         "Make components configurable (and therefore reusable) by passing input data to them.",
//     },
//     {
//       image: stateImg,
//       title: "State",
//       description:
//         "React-managed data which, when changed, causes the component to re-render & the UI to update.",
//     },
//   ],
//   "Java": [
//     {
//       image: componentsImg,
//       title: "Java Basics",
//       description: "Learn the basics of Java programming including syntax, data types, and control flow.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Object-Oriented Programming",
//       description: "Understand the core principles of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction.",
//     },
//     {
//       image: propsImg,
//       title: "Collections Framework",
//       description: "Learn how to use Java's Collection framework for managing groups of objects.",
//     },
//     {
//       image: stateImg,
//       title: "Multithreading",
//       description: "Understand how to use threads and concurrency to perform multiple operations simultaneously.",
//     },
//   ],
//   "Python": [
//     {
//       image: componentsImg,
//       title: "Python Basics",
//       description: "Understand Python syntax, variables, data types, and basic operations.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Data Structures",
//       description: "Learn about Python's built-in data structures such as lists, tuples, sets, and dictionaries.",
//     },
//     {
//       image: propsImg,
//       title: "Flask",
//       description: "Get started with Flask to build web applications in Python.",
//     },
//     {
//       image: stateImg,
//       title: "NumPy",
//       description: "Explore NumPy for numerical computing and array manipulation in Python.",
//     },
//   ],
//   "C++": [
//     {
//       image: componentsImg,
//       title: "C++ Basics",
//       description: "Understand the syntax, data types, and control structures in C++.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Object-Oriented Programming",
//       description: "Learn OOP concepts in C++ such as classes, objects, inheritance, and polymorphism.",
//     },
//     {
//       image: propsImg,
//       title: "Standard Template Library (STL)",
//       description: "Get familiar with the STL and how to use vectors, maps, sets, and other containers.",
//     },
//     {
//       image: stateImg,
//       title: "Pointers and Memory Management",
//       description: "Understand pointers, memory allocation, and how to manage resources effectively.",
//     },
//   ],
//   "MongoDB": [
//     {
//       image: componentsImg,
//       title: "MongoDB Basics",
//       description: "Learn how to set up and use MongoDB, a NoSQL database.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Aggregation Framework",
//       description: "Understand how to use MongoDB's aggregation framework for data processing and analysis.",
//     },
//     {
//       image: propsImg,
//       title: "Indexes",
//       description: "Learn about creating and using indexes in MongoDB to improve query performance.",
//     },
//     {
//       image: stateImg,
//       title: "Data Modeling",
//       description: "Understand the best practices for designing schemas in MongoDB.",
//     },
//   ],
//   "SQL": [
//     {
//       image: componentsImg,
//       title: "SQL Basics",
//       description: "Learn the fundamentals of SQL including SELECT, INSERT, UPDATE, and DELETE commands.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Joins",
//       description: "Understand how to use JOIN operations to combine data from multiple tables.",
//     },
//     {
//       image: propsImg,
//       title: "Indexes",
//       description: "Learn how indexes improve the speed of data retrieval operations.",
//     },
//     {
//       image: stateImg,
//       title: "Normalization",
//       description: "Understand how to structure a relational database to reduce redundancy and improve data integrity.",
//     },
//   ],
//   "R": [
//     {
//       image: componentsImg,
//       title: "R Basics",
//       description: "Get started with R programming for statistical computing and graphics.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Data Manipulation",
//       description: "Learn how to manipulate and clean data using R libraries like dplyr and tidyr.",
//     },
//     {
//       image: propsImg,
//       title: "Data Visualization",
//       description: "Create compelling data visualizations using ggplot2 and other visualization libraries.",
//     },
//     {
//       image: stateImg,
//       title: "Statistical Analysis",
//       description: "Understand how to perform various statistical analyses using R.",
//     },
//   ],
//   "C#": [
//     {
//       image: componentsImg,
//       title: "C# Basics",
//       description: "Learn the fundamentals of C# programming including syntax, data types, and control structures.",
//     },
//     {
//       image: jsxUiImg,
//       title: "OOP in C#",
//       description: "Explore object-oriented programming concepts such as classes, inheritance, and polymorphism in C#.",
//     },
//     {
//       image: propsImg,
//       title: "LINQ",
//       description: "Learn how to use Language Integrated Query (LINQ) for querying collections in C#.",
//     },
//     {
//       image: stateImg,
//       title: ".NET Framework",
//       description: "Understand the .NET framework and how to build applications using C#.",
//     },
//   ],
//   "WebDev": [
//     {
//       image: componentsImg,
//       title: "HTML & CSS",
//       description: "Learn the basics of HTML for structure and CSS for styling web pages.",
//     },
//     {
//       image: jsxUiImg,
//       title: "JavaScript",
//       description: "Understand how to use JavaScript to add interactivity to web pages.",
//     },
//     {
//       image: propsImg,
//       title: "Responsive Design",
//       description: "Learn how to create web pages that look good on all devices using responsive design techniques.",
//     },
//     {
//       image: stateImg,
//       title: "Frontend Frameworks",
//       description: "Explore frontend frameworks like React, Angular, and Vue.js for building modern web apps.",
//     },
//   ],
//   "SpringBoot": [
//     {
//       image: componentsImg,
//       title: "Spring Boot Basics",
//       description: "Learn how to set up and run a Spring Boot application.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Dependency Injection",
//       description: "Understand the concept of dependency injection and how Spring Boot uses it.",
//     },
//     {
//       image: propsImg,
//       title: "Spring MVC",
//       description: "Explore how to create RESTful web services using Spring MVC.",
//     },
//     {
//       image: stateImg,
//       title: "Spring Data JPA",
//       description: "Learn how to use Spring Data JPA for database operations in Spring Boot.",
//     },
//   ],
//   "Django": [
//     {
//       image: componentsImg,
//       title: "Django Basics",
//       description: "Get started with Django, a high-level Python web framework.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Models",
//       description: "Learn how to define models in Django to represent database tables.",
//     },
//     {
//       image: propsImg,
//       title: "Views & Templates",
//       description: "Understand how to create views and templates for rendering HTML in Django.",
//     },
//     {
//       image: stateImg,
//       title: "Django REST Framework",
//       description: "Explore how to create RESTful APIs using Django REST Framework.",
//     },
//   ],
//   "AI": [
//     {
//       image: componentsImg,
//       title: "AI Basics",
//       description: "Understand the fundamentals of Artificial Intelligence, including key concepts and techniques.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Machine Learning",
//       description: "Learn how AI systems can learn from data using Machine Learning algorithms.",
//     },
//     {
//       image: propsImg,
//       title: "Neural Networks",
//       description: "Explore the basics of neural networks and how they are used in AI.",
//     },
//     {
//       image: stateImg,
//       title: "AI Ethics",
//       description: "Understand the ethical considerations and challenges in the development and deployment of AI.",
//     },
//   ],
//   "ML": [
//     {
//       image: componentsImg,
//       title: "Machine Learning Basics",
//       description: "Learn the fundamental concepts of Machine Learning and how it differs from traditional programming.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Supervised Learning",
//       description: "Understand how supervised learning algorithms use labeled data for training.",
//     },
//     {
//       image: propsImg,
//       title: "Unsupervised Learning",
//       description: "Explore unsupervised learning methods for discovering patterns in data.",
//     },
//     {
//       image: stateImg,
//       title: "Model Evaluation",
//       description: "Learn how to evaluate the performance of machine learning models.",
//     },
//   ],
//   "DL": [
//     {
//       image: componentsImg,
//       title: "Deep Learning Basics",
//       description: "Understand the principles of Deep Learning and how it builds on Machine Learning.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Neural Networks",
//       description: "Learn how neural networks are structured and how they function in deep learning.",
//     },
//     {
//       image: propsImg,
//       title: "Convolutional Neural Networks",
//       description: "Explore CNNs and their application in image processing tasks.",
//     },
//     {
//       image: stateImg,
//       title: "Recurrent Neural Networks",
//       description: "Understand RNNs and their use in processing sequential data.",
//     },
//   ],
//   "GenAI": [
//     {
//       image: componentsImg,
//       title: "Generative AI Basics",
//       description: "Learn about Generative AI and how it can create new data similar to existing data.",
//     },
//     {
//       image: jsxUiImg,
//       title: "GANs",
//       description: "Explore Generative Adversarial Networks and how they are used in Generative AI.",
//     },
//     {
//       image: propsImg,
//       title: "Autoencoders",
//       description: "Understand how autoencoders work and their application in data generation.",
//     },
//     {
//       image: stateImg,
//       title: "Applications of GenAI",
//       description: "Discover real-world applications of Generative AI in various industries.",
//     },
//   ],
//   "Angular": [
//     {
//       image: componentsImg,
//       title: "Components & Templates",
//       description: "Learn how to create and use components and templates to build Angular applications.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Directives",
//       description: "Understand how to use Angular directives to extend HTML capabilities.",
//     },
//     {
//       image: propsImg,
//       title: "Services & Dependency Injection",
//       description: "Explore how to use services and dependency injection for code reusability and modularity.",
//     },
//     {
//       image: stateImg,
//       title: "Routing & Navigation",
//       description: "Learn how to implement routing to navigate between different views in an Angular app.",
//     },
//   ],
//   "Express": [
//     {
//       image: componentsImg,
//       title: "Express Basics",
//       description: "Get started with Express, a web application framework for Node.js.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Routing",
//       description: "Understand how to set up and manage routes in an Express application.",
//     },
//     {
//       image: propsImg,
//       title: "Middleware",
//       description: "Learn how to use middleware to handle requests, responses, and error handling in Express.",
//     },
//     {
//       image: stateImg,
//       title: "REST APIs",
//       description: "Build RESTful APIs using Express and manage HTTP methods and status codes.",
//     },
//   ],
//   "Node": [
//     {
//       image: componentsImg,
//       title: "Node.js Basics",
//       description: "Learn the fundamentals of Node.js and its event-driven architecture.",
//     },
//     {
//       image: jsxUiImg,
//       title: "File System",
//       description: "Understand how to interact with the file system using Node.js.",
//     },
//     {
//       image: propsImg,
//       title: "Asynchronous Programming",
//       description: "Explore async programming in Node.js using callbacks, promises, and async/await.",
//     },
//     {
//       image: stateImg,
//       title: "Modules & NPM",
//       description: "Learn about Node.js modules and how to use NPM for package management.",
//     },
//   ],
//   "Flask": [
//     {
//       image: componentsImg,
//       title: "Flask Basics",
//       description: "Get started with Flask, a lightweight WSGI web application framework in Python.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Routing & Views",
//       description: "Understand how to create routes and views to handle HTTP requests in Flask.",
//     },
//     {
//       image: propsImg,
//       title: "Templates & Jinja2",
//       description: "Learn how to render HTML templates using Jinja2 in Flask.",
//     },
//     {
//       image: stateImg,
//       title: "RESTful Services",
//       description: "Build RESTful web services using Flask and handle JSON data.",
//     },
//   ],
//   "Cybersecurity": [
//     {
//       image: componentsImg,
//       title: "Basic Concepts",
//       description: "Understand the fundamentals of cybersecurity including threats, vulnerabilities, and risks.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Cryptography",
//       description: "Learn about encryption, decryption, and key management to secure data.",
//     },
//     {
//       image: propsImg,
//       title: "Network Security",
//       description: "Explore techniques to protect networks from intrusions, such as firewalls and VPNs.",
//     },
//     {
//       image: stateImg,
//       title: "Ethical Hacking",
//       description: "Understand the role of ethical hacking in identifying and mitigating security vulnerabilities.",
//     },
//   ],
//   "Blockchain": [
//     {
//       image: componentsImg,
//       title: "Blockchain Basics",
//       description: "Learn the fundamentals of blockchain technology and its decentralized nature.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Consensus Mechanisms",
//       description: "Understand how consensus is achieved in a blockchain network using methods like PoW and PoS.",
//     },
//     {
//       image: propsImg,
//       title: "Smart Contracts",
//       description: "Explore how smart contracts work and their role in automating transactions on the blockchain.",
//     },
//     {
//       image: stateImg,
//       title: "Decentralized Applications (dApps)",
//       description: "Learn how to develop decentralized applications that run on blockchain networks.",
//     },
//   ],
//   "Cloud Computing": [
//     {
//       image: componentsImg,
//       title: "Cloud Service Models",
//       description: "Understand the different cloud service models: IaaS, PaaS, and SaaS.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Virtualization",
//       description: "Learn how virtualization is used in cloud computing to create virtual machines and environments.",
//     },
//     {
//       image: propsImg,
//       title: "Cloud Storage",
//       description: "Explore cloud storage solutions and how they provide scalable and reliable data storage.",
//     },
//     {
//       image: stateImg,
//       title: "Deployment Models",
//       description: "Understand the different cloud deployment models: public, private, hybrid, and multi-cloud.",
//     },
//   ],
//   "DevOps": [
//     {
//       image: componentsImg,
//       title: "CI/CD Pipeline",
//       description: "Learn how to set up a continuous integration and continuous deployment pipeline for software development.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Infrastructure as Code",
//       description: "Understand how to manage and provision infrastructure using code with tools like Terraform and Ansible.",
//     },
//     {
//       image: propsImg,
//       title: "Containerization",
//       description: "Explore how to use containers for consistent and isolated application environments using Docker.",
//     },
//     {
//       image: stateImg,
//       title: "Monitoring & Logging",
//       description: "Learn how to implement monitoring and logging to maintain application performance and reliability.",
//     },
//   ],
//   "Quantum Computing": [
//     {
//       image: componentsImg,
//       title: "Quantum Mechanics Basics",
//       description: "Understand the principles of quantum mechanics that form the foundation of quantum computing.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Qubits",
//       description: "Learn about qubits and how they differ from classical bits in quantum computing.",
//     },
//     {
//       image: propsImg,
//       title: "Quantum Algorithms",
//       description: "Explore key quantum algorithms like Shor's algorithm and Grover's algorithm.",
//     },
//     {
//       image: stateImg,
//       title: "Quantum Supremacy",
//       description: "Understand the concept of quantum supremacy and its implications for computation.",
//     },
//   ],
//   "Data Science": [
//     {
//       image: componentsImg,
//       title: "Data Analysis",
//       description: "Learn how to analyze and interpret data using statistical and computational methods.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Data Visualization",
//       description: "Understand how to create visual representations of data to uncover insights using tools like Matplotlib and Seaborn.",
//     },
//     {
//       image: propsImg,
//       title: "Machine Learning Models",
//       description: "Explore how to build and train machine learning models for predictive analysis.",
//     },
//     {
//       image: stateImg,
//       title: "Big Data Technologies",
//       description: "Learn about big data tools and frameworks like Hadoop and Spark for processing large datasets.",
//     },
//   ],
//   "IoT": [
//     {
//       image: componentsImg,
//       title: "IoT Basics",
//       description: "Understand the fundamentals of IoT and how devices are connected to exchange data.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Sensors & Actuators",
//       description: "Learn how sensors collect data and actuators perform actions in an IoT system.",
//     },
//     {
//       image: propsImg,
//       title: "Communication Protocols",
//       description: "Explore different communication protocols used in IoT such as MQTT, HTTP, and CoAP.",
//     },
//     {
//       image: stateImg,
//       title: "Edge Computing",
//       description: "Understand how edge computing is used to process data closer to where it is generated in IoT systems.",
//     },
//   ],
//   "AR/VR": [
//     {
//       image: componentsImg,
//       title: "Augmented Reality (AR)",
//       description: "Learn how AR overlays digital content on the real world using devices like smartphones and AR glasses.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Virtual Reality (VR)",
//       description: "Understand how VR immerses users in a fully virtual environment using devices like VR headsets.",
//     },
//     {
//       image: propsImg,
//       title: "3D Modeling",
//       description: "Explore how 3D models are created and used in AR/VR applications.",
//     },
//     {
//       image: stateImg,
//       title: "AR/VR Development Tools",
//       description: "Learn about tools and platforms like Unity and Unreal Engine for developing AR/VR applications.",
//     },
//   ],
//   "Edge Computing": [
//     {
//       image: componentsImg,
//       title: "Edge Computing Basics",
//       description: "Understand the concept of edge computing and how it brings computation closer to data sources.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Latency Reduction",
//       description: "Learn how edge computing reduces latency and improves performance for real-time applications.",
//     },
//     {
//       image: propsImg,
//       title: "Edge Devices",
//       description: "Explore the role of edge devices in processing data locally in edge computing.",
//     },
//     {
//       image: stateImg,
//       title: "Security in Edge Computing",
//       description: "Understand the security challenges and solutions in edge computing environments.",
//     },
//   ],
//   "Serverless Computing": [
//     {
//       image: componentsImg,
//       title: "Serverless Architecture",
//       description: "Learn about serverless architecture and how it abstracts server management away from developers.",
//     },
//     {
//       image: jsxUiImg,
//       title: "Function as a Service (FaaS)",
//       description: "Understand how FaaS allows you to deploy and run individual functions in the cloud.",
//     },
//     {
//       image: propsImg,
//       title: "Event-Driven Computing",
//       description: "Explore how serverless functions are triggered by events and how they are used in event-driven architectures.",
//     },
//     {
//       image: stateImg,
//       title: "Scalability & Cost Efficiency",
//       description: "Learn how serverless computing provides scalability and cost efficiency by charging only for execution time.",
//     },
//   ],
  
// };
