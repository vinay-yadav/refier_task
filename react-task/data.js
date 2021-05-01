const axios = require('axios');

// const data = [
//     {
//         "title": "Wide Career Choices for all - Hand Holding included",
//         "sub_heading": null,
//         "description": "Career Counselling for all 12th Class Students and personalized attention-centric Coaching to clear entrance examination of choice. Example - BBA, BBS, CLAT, HOTEL MANAGEMENT",
//         "instructor": "Dharmendra Kumar",
//         "event_on": "2021-03-30T17:00:00Z",
//         "cost": "0",
//         "up_vote": 2,
//         "down_vote": 0
//     },
//     {
//         "title": "Introduction to MONGODB (NOSQL)",
//         "sub_heading": null,
//         "description": "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.",
//         "instructor": "Hitesh Chaudhary",
//         "event_on": "2021-03-31T16:30:00Z",
//         "cost": "0",
//         "up_vote": 1,
//         "down_vote": 0
//     },
//     {
//         "title": "Divorcing the mediocrity monster",
//         "sub_heading": null,
//         "description": "A motivational program especially for Professionals who aspire to move from Mediocrity to Excellence",
//         "instructor": "Renu Khanna",
//         "event_on": "2021-04-15T18:00:00Z",
//         "cost": "300",
//         "up_vote": 1,
//         "down_vote": 0
//     },
//     {
//         "title": "Decision Making",
//         "sub_heading": null,
//         "description": "In our life, every day we have to make a number of small and big decisions. The quality of our life depends on the quality of our decisions",
//         "instructor": "Arun Chitlangia",
//         "event_on": "2021-04-30T16:00:00Z",
//         "cost": "500",
//         "up_vote": 1,
//         "down_vote": 0
//     },
//     {
//         "title": "Getting Started with Git",
//         "sub_heading": null,
//         "description": "Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
//         "instructor": "Charlie Smith",
//         "event_on": "2021-04-07T11:00:00Z",
//         "cost": "0",
//         "up_vote": 0,
//         "down_vote": 0
//     },
//     {
//         "title": "Introduction to Cloud Computing",
//         "sub_heading": null,
//         "description": "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. The term is generally used to describe data centers available to many users over the Internet.",
//         "instructor": "Smith Jones",
//         "event_on": "2021-04-10T13:00:00Z",
//         "cost": "0",
//         "up_vote": 0,
//         "down_vote": 2
//     },
//     {
//         "title": "Introduction to Ansible",
//         "sub_heading": null,
//         "description": "Ansible is an open-source software provisioning, configuration management, and application-deployment tool enabling infrastructure as code. It runs on many Unix-like systems and can configure both Unix-like systems as well as Microsoft Windows.",
//         "instructor": "Sailaish Chauhan",
//         "event_on": "2021-04-20T12:30:00Z",
//         "cost": "0",
//         "up_vote": 0,
//         "down_vote": 0
//     },
//     {
//         "title": "Learning SQl",
//         "sub_heading": null,
//         "description": "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.",
//         "instructor": "Suman Bhaweja",
//         "event_on": "2021-05-23T18:00:00Z",
//         "cost": "1000",
//         "up_vote": 1,
//         "down_vote": 0
//     },
//     {
//         "title": "Learn Python the HARD WAY",
//         "sub_heading": null,
//         "description": "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation.",
//         "instructor": "Guido van Rossum",
//         "event_on": "2021-04-10T17:00:00Z",
//         "cost": "1200",
//         "up_vote": 0,
//         "down_vote": 0
//     },
//     {
//         "title": "Getting Started with Node.js",
//         "sub_heading": null,
//         "description": "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
//         "instructor": "Ryan Dahl",
//         "event_on": "2021-04-27T14:00:00Z",
//         "cost": "800",
//         "up_vote": 0,
//         "down_vote": 0
//     },
//     {
//         "title": "API Tester",
//         "sub_heading": "Creating using api",
//         "description": "Creating webinar using API",
//         "instructor": "None",
//         "event_on": "2021-04-30T17:00:00Z",
//         "cost": "3000",
//         "up_vote": 0,
//         "down_vote": 0
//     },
//     {
//         "title": "Test 02",
//         "sub_heading": null,
//         "description": "Career Counselling for all 12th Class Students and personalized attention-centric Coaching to clear entrance examination of choice. Example - BBA, BBS, CLAT, HOTEL MANAGEMENT",
//         "instructor": "HH",
//         "event_on": "2021-06-30T17:00:00Z",
//         "cost": "0",
//         "up_vote": 0,
//         "down_vote": 0
//     }
// ]

// axios.get('https://burgerbuilder-cb640-default-rtdb.firebaseio.com/orders.json')
// .then(response => console.log(response.data))
// .catch(err => console.log(err));

// data.map((element, index) => {
//     axios.post('https://mywebinars-60679-default-rtdb.firebaseio.com/webinars.json', element)
//         .then(response => console.log(response.data))
//         .catch(err => console.log(err));
// });


axios.get('https://mywebinars-60679-default-rtdb.firebaseio.com/webinars.json')
    .then(response => console.log(response.data))
    .catch(err => console.log(err));