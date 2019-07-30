import { Tool } from './tool';

export const TOOLS: Tool[] = [
    
    {
        id: 1,
        name:"Maltego",
        type: ["OSINT"],
        operatingSystem: "Linux / Windows",
        author: "Paterva",
        image: "http://1.bp.blogspot.com/-OKw5xy-ji1Q/TawgfOMHrRI/AAAAAAAAAAA/xdrnUZuplhs/s1600/splash_303-3.jpg",
        added: new Date()
    },

    {
        id: 2,
        name: "TheHarvester",
        type: ["OSINT"],
        operatingSystem: "Linux / Windows",
        author: "laramies",
        image: "https://cdn.darknet.org.uk/wp-content/uploads/2012/01/theHarvester-Gather-E-mail-Accounts-Subdomains-Hosts-Employee-Names-640x350.jpg",
        added: new Date()
    },
    {
        id: 3,
        name: "Metasploit",
        type: ["Exploitation", "OSINT"],
        operatingSystem: "Linux / Windows",
        author: "RapidShare",
        image: "https://www.kilianver.net/wp-content/uploads/2018/03/01_metasploit_icon-300x300.png",
        added: new Date()
    },

    {
        id: 4,
        name: "nmap",
        type: ["Fingerprinting"],
        operatingSystem: "Linux",
        author: "Fyodor ",
        image: "https://blog.sodifrance.fr/wp-content/uploads/2017/06/nmap.png",
        added: new Date()
    },
    {
        id: 5,
        name: "TweetAnalyser",
        type: ["OSINT"],
        operatingSystem: "Linux",
        author: "X0rg",
        image: "https://camo.githubusercontent.com/81a2090387f63d4fd1559912501e30c6cb58fef9/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a4b75686644725f32624f4a3743504f7a56586e774c412e706e67",
        added: new Date()
    }

];