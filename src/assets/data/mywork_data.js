import project1_img from "../../assets/expense.png";
import project2_img from "../../assets/ecommerce.png";
import project3_img from "../../assets/cooter.jpg";

const mywork_data = [
  {
    no: 1,
    name: "Expense-Tracker",
    img: project1_img,
    site: "https://next-expense-tracker-ai-xi.vercel.app/",
    description:
      "AI-powered financial tracker built with Next.js, TypeScript, and Tailwind. Uses Neon PostgreSQL (via Prisma) for data, Clerk for secure auth, and OpenRouter/OpenAI for smart categorization.",
  },
  {
    no: 2,
    name: "E-commerce",
    img: project2_img,
    site: "https://e-commerce-hva7.vercel.app/",
    description:
      "A comprehensive shopping platform featuring product listings, cart functionality, and payment integration. Developed using the MERN stack with Redux Toolkit for efficient state management.",
  },
  {
    no: 3,
    name: "Event Management APP",
    img: project3_img,
    description:
      "A mobile application for scheduling and managing events. Built using React Native and SQLite, allowing user to register events, upload images, and manage important dates via a calendar view.",
  },
];

export default mywork_data;
