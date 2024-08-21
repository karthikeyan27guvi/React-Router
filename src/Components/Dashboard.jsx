import React, { useState, useEffect } from 'react';
import Card from './Cards';
import { useParams } from 'react-router-dom';

function Dashboard() {

  const data = [
    {
        image:"https://mlz8prml4nnc.i.optimole.com/cb:1kp5.54a9a/w:auto/h:auto/q:mauto/f:best/https://fullscale.io/wp-content/uploads/2024/02/what-is-a-full-stack-developer.png",
        title: "Full Stack Development",
        description: "Full-stack developers have a high level of competency in both frontend and backend languages. They are skilled in HTML, CSS, JavaScript, NodeJS, ExpressJS, Django, and PHP. Equally, full-stack developers understand various database management systems (DBMS) like MySQL, PostgreSQL, MongoDB, and more.",
    },
    {
        image:"https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg",
        title: "Data Science",
        description: "Data science is the study of data to extract meaningful insights for business. It is a multidisciplinary approach that combines principles and practices from the fields of mathematics, statistics, artificial intelligence, and computer engineering to analyze large amounts of data",
    },
    {
        image:"https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?height=456&width=711&fit=bounds",
        title: "Machine Learning",
        description: "Machine learning (ML) is a branch of artificial intelligence (AI) and computer science that focuses on the using data and algorithms to enable AI to imitate the way that humans learn, gradually improving its accuracy.",
    },
    {
        image:"https://www.softwebsolutions.com/wp-content/uploads/2022/07/Data-Engineering.jpg",
        title: "Data Engineer",
        description: "A data engineer integrates, transforms, and consolidates data from various structured and unstructured data systems into structures that are suitable for building analytics solutions",
    },
    {
        image:"https://www.learntek.org/blog/wp-content/uploads/2018/05/BA-800x510.jpg",
        title: "Business Analyst",
        description: "A business analyst (BA) is a person who processes, interprets and documents business processes, products, services and software through analysis of data.",
    },
    {
        image:"https://www.neit.edu/wp-content/uploads/2022/10/Cyber-Security-Icon-Concept-2-1-1024x632.jpeg",
        title: "Cyber Security",
        description: "Cybersecurity refers to any technologies, practices and policies for preventing cyberattacks or mitigating their impact. Cybersecurity aims to protect computer systems, applications, devices, data, financial assets and people against ransomware and other malware, phishing scams, data theft and other cyberthreats.",
    },
    {
      image:"https://jumpgrowth.com/wp-content/uploads/2020/02/mean-stacks-main.jpg",
      title: "MEAN Stack Development",
      description: "A MEAN stack developer is a web developer who uses the MEAN software bundle to create dynamic web and mobile applications. MEAN stands for MongoDB, ExpressJS, AngularJS, and Node.js, which are four technologies that work together to enable full-stack JavaScript development.",
    },
  ];

  const [cards, setCards] = useState([]);
  const { filter } = useParams();

  useEffect(() => {
    if (filter === undefined || filter === 'all') {
      setCards(data);
    } else {
      const filteredCards = data.filter((card) => card.title.replace(/\s+/g, '-').toLowerCase() === filter.toLowerCase());
      setCards(filteredCards);
    }
  }, [filter, data]);

  return (
    <div className="container">
      <div className="row" id="wonder">
        {cards.map((card, index) => (
          <Card data={card} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
