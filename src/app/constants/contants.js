import { FaReact, FaPython } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiFastapi, SiTailwindcss } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";

export const items = [{
    id: "ecommerce",
    title: "ANRAMO",
    background: "CD5C08",
    demo: "/images/pottery_preview_720.mp4",
    website: "https://anramo.onrender.com",
    github: "https://github.com/peareon/pottery",
    description: "ANRAMO is an e-commerce pottery website. \n This website was developed with vanilla Javascript and no CSS frameworks or libraries. The store page is populated directly from an Atlas server, and it is updated after every purchase",
    technologies: [
        {
        tech: <IoLogoJavascript />
        },
        {
        tech: <IoLogoNodejs />
        },
        {
        tech: <SiMongodb />
        }]
    },
    {
        id: "Music",
        title: "Songify",
        background: "9EC8B9",
        demo: "/images/music_preview_720.mp4",
        website: "https://music-spotify-app.vercel.app/",
        github: "https://github.com/peareon/Music-App",
        description: "Looking for new music related to an artist? This app, with Spotify's API help, will find those songs related based on how 'popular' you want the songs to be. The popularity feature allows to aim for undiscovered gems or go straight for consolidated hits",
        technologies: [
            {
            tech: <FaReact/>
            },
            {
            tech: <TbBrandNextjs />
            },
            {
            tech: <SiTailwindcss />
            }]
    },
    {
        id: "CAN",
        title: "CAN-Reveal",
        background: "E5E7E7",
        demo: "/images/can_preview_720.mp4",
        github: "https://github.com/peareon/CAN_Tool",
        description: "This is a specialized tool, which purpose is to highlight the pieces of CAN/RV-C data that changed their previous state to another state on almost real-time. This tool works along a CAN decoder, a data filter and FAST API.",
        technologies: [
            {
            tech: <FaPython />
            },
            {
            tech: <FaReact/>
            },
            {
            tech: <SiFastapi />
            }]
    },
    {
        id: "Travel",
        title: "Travel Blog",
        background: "1e566c",
        demo: "/images/blog_preview_720.mp4",
        github: "https://github.com/peareon/OnlineBlog",
        description: "This simple travel blog has some cool features, such as Login and Register amongst validation, password encrypting, and security cookies, and the possibility to create new posts on the client-side. The posts and users registered are stored in a mongo db.",
        technologies: [
            {
            tech: <FaReact/>
            },
            {
            tech: <TbBrandNextjs />
            },
            {
            tech: <SiMongodb />
            }]
    }
        
]

export const experience = [
    {
        job: "DHL",
        role: "Python Dev",
        role2: "RPA Dev",
        tasks: [
            "• Processes automation through Python",
            '• Automated Web scraping, query updates and report generation',
            '• Processes review and design',
        ],
        position: "self-start",
        imgpos: "left",
        bg: "DHL-bg"
    },
    {
        job: "Alten",
        role: "HiL",
        role2: "HiL",
        tasks: [
            "• Atomated Test cases execution and test report generation",
            '• Requirements review and creation of automated test cases',
            '• Detailed creation & log of tickets containing bugs',
        ],
        position: "self-end",
        imgpos: "right",
        bg: "Alten-bg"
    },
    {
        job: "TATA CS",
        role: "RPA Dev",
        role2: "RPA Dev",
        tasks: [
            "• Processes automation through AA360™",
            '• Automated: Cloud database reading, web scraping to update the portals and report generation',
            '• Processes review and design',
        ],
        position: "self-start",
        imgpos: "left",
        bg: "TATA-bg"
    },
    {
        job: "Winnebago",
        role: "QA",
        role2: "QA",
        tasks: [
            "• Test cases execution and test report generation",
            '• Requirements review and test case creation',
            '• Hardware and Software troubleshooting',
        ],
        position: "self-end",
        imgpos: "right",
        bg: "Wb-bg"
    }
]