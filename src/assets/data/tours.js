import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Virtual Tech Conference",
    platform: "Zoom",
    duration: "3 hours",
    price: 49,
    maxParticipants: 500,
    desc: "Join industry leaders to discuss emerging trends in technology.",
    reviews: [
      {
        name: "Alice Johnson",
        rating: 4.8,
      },
      {
        name: "Alice Johnson",
        rating: 5,
      },
    ],
    avgRating: 4.7,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Online Yoga Workshop",
    platform: "Microsoft Teams",
    duration: "1.5 hours",
    price: 19,
    maxParticipants: 100,
    desc: "Relax and rejuvenate with a guided yoga session from experts.",
    reviews: [
      {
        name: "Robert Smith",
        rating: 4.5,
      },
    ],
    avgRating: 4.6,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Digital Marketing Webinar",
    platform: "Google Meet",
    duration: "2 hours",
    price: 29,
    maxParticipants: 200,
    desc: "Learn the latest strategies and tools in digital marketing.",
    reviews: [
      {
        name: "Emily Davis",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: tourImg03,
    featured: false,
  },
  {
    id: "04",
    title: "Virtual Art Exhibition",
    platform: "Custom Platform",
    duration: "4 hours",
    price: 0, // Free event
    maxParticipants: 1000,
    desc: "Experience stunning artwork and interact with artists online.",
    reviews: [
      {
        name: "Mark Wilson",
        rating: 4.9,
      },
    ],
    avgRating: 4.8,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Online Coding Bootcamp",
    platform: "Zoom",
    duration: "6 hours",
    price: 99,
    maxParticipants: 50,
    desc: "Hands-on coding session with industry mentors.",
    reviews: [
      {
        name: "Sophia Brown",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Virtual Cooking Class",
    platform: "Skype",
    duration: "2 hours",
    price: 39,
    maxParticipants: 20,
    desc: "Cook delicious meals with guidance from a professional chef.",
    reviews: [
      {
        name: "John Lee",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Online Leadership Summit",
    platform: "Hopin",
    duration: "5 hours",
    price: 79,
    maxParticipants: 300,
    desc: "Enhance your leadership skills with expert speakers.",
    reviews: [
     
    ],
    avgRating: 4.8,
    photo: tourImg07,
    featured: true,
  },
  {
    id: "08",
    title: "Virtual Music Concert",
    platform: "YouTube Live",
    duration: "3 hours",
    price: 15,
    maxParticipants: 10000,
    desc: "Enjoy live performances from popular artists at home.",
    reviews: [
      {
        name: "Henry Clark",
        rating: 4.9,
      },
    ],
    avgRating: 4.9,
    photo: tourImg08,
    featured: true,
  },
];

export default tours;
