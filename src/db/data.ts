
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export const MY_DATA = {
    name: 'Dalveer Singh',
    avatar: '/images/me.jpeg',
    role: 'Full Stack Web Developer',
    resume_link: 'https://www.dalveersidhu.com/resume/MyResume.pdf',
    contact: {
        email: 'dalveersidhu97@gmail.com',
        phone: '+19029880900',
        address: 'Calgary, Alberta',
    },
    social: [
        { label: 'LinkedIn', Icon: FaLinkedin, url: 'https://www.linkedin.com/in/dalveer-singh-sidhu/' },
        { label: 'Github', Icon: FaGithubSquare, url: 'https://github.com/dalveersidhu97' },
        { label: 'Facebook', Icon: FaFacebookSquare, url: 'https://www.facebook.com/laddisidhu97' }
    ],
    about: {
        about_me: 'I am a fullstack web developer in Calgary, Alberta. I got my interests in coding since 12th grade thats why I did my Graduation and Postgraduation in computer application. Now, Coding has become my favourite passion and I love seeing the results of my efforts.',
        what_i_am_doing: [
            {
                title: 'Fullstack Web development',
                desc: 'Single or Multipage fullstack websites using Node.js, Express.js, Next.js, React.js, Core PHP, Spring MVC, SQL or NoSQL databases etc.',
                icon: ''
            },
            {
                title: 'Front End Web Development',
                desc: 'I can build responsive front end websites using HTML, CSS, JS, React.js, JQery etc.',
                icon: ''
            },
            {
                title: 'API Development',
                desc: 'I can make APIs using Node.js, Next.js, Core PHP, MongoDB, Mongoose, SQL, Web Tokesn etc.',
                icon: ''
            },
        ]
    },
    skill_sets: [
        {
            set_name: 'Back-End',
            skills: [
                { skill_name: 'Express.js', level: 'Expert' },
                { skill_name: 'GraphQL', level: 'Intermediate' },
                { skill_name: 'Sequelize.js', level: 'Expert' },
                { skill_name: 'Mongoose', level: 'Intermediate' },
                { skill_name: 'Unit Testing', level: 'Expert' },
            ]
        },
        {
            set_name: 'Front-End',
            skills: [
                { skill_name: 'React.js', level: 'Expert' },
                { skill_name: 'Redux / Redux Toolkit', level: 'Expert' },
                { skill_name: 'Tailwind', level: 'Expert' },
                { skill_name: 'Unit Testing', level: 'Expert' },
            ]
        },
        {
            set_name: 'Programming Languages',
            skills: [
                { skill_name: 'Javascript', level: 'Expert' },
                { skill_name: 'Typescript', level: 'Expert' },
                { skill_name: 'HTML5 & CSS3', level: 'Expert' },
                { skill_name: 'PHP', level: 'Expert' },
                { skill_name: 'Java', level: 'Intermediate' },
                { skill_name: 'Golang', level: 'Begginer' },
            ]
        },
        {
            set_name: 'Frameworks / Libraries',
            skills: [
                { skill_name: 'Node.js', level: 'Expert' },
                { skill_name: 'Next.js', level: 'Expert' },
                { skill_name: 'GraphQL', level: 'Expert' },
                { skill_name: 'OAuth, JWT', level: 'Expert' },
            ]
        },
        {
            set_name: 'Database',
            skills: [
                { skill_name: 'PostgreSQL', level: 'Expert' },
                { skill_name: 'MySQL', level: 'Expert' },
                { skill_name: 'SQL Server', level: 'Expert' },
                { skill_name: 'MongoDB', level: 'Expert' },
                { skill_name: 'Mongoose (ORM)', level: 'Intermediate' },
                { skill_name: 'Sequelize (ORM)', level: 'Expert'}
            ]
        },
        {
            set_name: 'More',
            skills: [
                { skill_name: 'Docker', level: 'Expert' },
                { skill_name: 'Github & GitLab', level: 'Expert' },
                { skill_name: 'REST APIs', level: 'Expert' },
                { skill_name: 'MVC Architecture', level: 'Expert' },
                { skill_name: 'Test Driven Development (TDD)', level: 'Intermediate' },
                { skill_name: 'Unit Testing', level: 'Expert'},
                { skill_name: 'Agile methodologies, JIRA', level: 'Expert'},
                { skill_name: 'Chrome Extensions Development', level: 'Intermediate'}
            ]
        }
    ],
    experience: {
        work: {
            summary: 'With 1 year of experience as a fullstack Nodejs/Typescript developer.',
            work_history: [
                {
                    icon: '',
                    job_title: 'Full Stack Developer',
                    subLabel: '(Full Time 7 Months)',
                    company: 'New World Inc',
                    address: 'Toronto, ON',
                    roles: [
                        'Developed REST API using Node.js, Typescript, Sequelize.js, and PostgresSQL database for the New World NFT Platform.',
                        'Developed Front-End App Using React.js, Redux.js, Typescript, TailwindCSS, etc.'
                    ]
                },
                {
                    icon: '',
                    job_title: 'Web Developer',
                    subLabel: '(Intern 4 Months)',
                    company: 'Infowiz',
                    address: 'Etobicoke, ON',
                    roles: [
                        'Working in Node.js, and Next.js environments using a custom Express server.',
                        'Building RESTful APIs that serve data to the React front-end.'
                    ]
                }
            ]
        },
        projects: {
            summary: 'I have create many project since last 3.5 years Such as Movies Websites to download movies, Youtube video, playlist or channle dowloader using Youtube API, android app for movies. Some of them whose source code still I have are :-',
            list: [
                {
                    project_name: 'AssignDaku.com',
                    slug: 'assigndaku',
                    desc: 'Utilized My Own SMS API, Typescript, Next.js, Custom Express Server, React.js, Mongoose, Strip Payments, TailwindCSS. Here I help others with programming bugs, assignments, and projects. I control user requests through my admin panel. This domain directly accesses my computer IP, so it may not open if my computer is turned off.',
                    images: [
                        { src: '/images/assigndaku.jpg', alt: 'Assigndaku' },
                        { src: '/images/web_project.jpg', alt: 'Web project' },
                        { src: '/images/assigndaku.jpg', alt: 'Assigndaku' },
                        { src: '/images/web_project.jpg', alt: 'Web project' }
                    ],
                    links: [
                        { label: 'Github', url: 'https://github.com/dalveersidhu97/assigndaku', icon: '' },
                        { label: 'Deployed', url: 'https://assigndaku.com/', icon: '' }
                    ],
                    tags: ['Node.js', 'Next.js', 'React.js', 'Redux.js', 'Typescript', 'Mongoose', 'TailwindCSS', 'HTML5 & CSS3']
                },
                {
                    project_name: 'E-Commerce Static Website',
                    slug: 'e-commerce-static-website',
                    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                    images: [{ src: '/images/web_project.jpg', alt: 'Web project' }, { src: '/images/web_project.jpg', alt: 'Web project' }],
                    links: [
                        { label: 'Github', url: 'https://github.com/dalveersidhu97/WebProject', icon: '' },
                        { label: 'Deployed', url: 'http://desicart.000webhostapp.com/', icon: '' }
                    ],
                    tags: ['HTML5', 'CSS3', 'Javascript']
                }
            ]
        },
    },
    education: {
        summary: 'Web developer with ability to learn and collaborate in rapidly changing evironments and compositions. Worked through 1000+ hours of bootcamp structure, learning Javascript, Node.js, React.js, Next.js, Typescript and many more. Eager to tackle web development/design challenges to achieve lasting impact on user experience.',
        list: [
            {
                icon: '',
                course: 'Computer Software and Database Development',
                tags: [
                    { icon: '', label: 'Post Graduate Diploma' },
                    { icon: '', label: 'Lambton College' },
                    { icon: '', label: 'Toronto Campus' },
                    { icon: '', label: 'GPA 3.6' },
                    { icon: '', label: '2 years' },
                    { icon: '', label: 'May 2020' },
                    { icon: '', label: 'to' },
                    { icon: '', label: 'May 2022' },
                ]
            },
            {
                icon: '',
                course: 'Bachelor of Computer Application',
                tags: [
                    { icon: '', label: 'Bachelors\'s Degree' },
                    { icon: '', label: 'Punjaib University' },
                    { icon: '', label: 'Patiala Campus' },
                    { icon: '', label: 'GPA 3.0' },
                    { icon: '', label: '3 years' },
                    { icon: '', label: 'May 2016' },
                    { icon: '', label: 'to' },
                    { icon: '', label: 'May 2019' },
                ]
            }
        ]
    }
}