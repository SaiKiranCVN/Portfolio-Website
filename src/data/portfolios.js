import web from "../img/portImages/web.jpg";
import stock from "../img/portImages/stock.jpg";
import ss from "../img/portImages/sematic_segmentation.jpg";
import dag from "../img/portImages/dag.png";

const portfolios = [
  {
    id: 1,
    category: "Data",
    image: ss,
    link1: "https://github.com/SaiKiranCVN/semantic-segmentation",
    title: "Sematic Segmentation",
    text: "Multi-Scale Image Segmentation.",
  },
  {
    id: 2,
    category: "SDE",
    image: stock,
    link1: "https://github.com/SaiKiranCVN/Virtual-Stock-Application",
    title: "Stock Trading App",
    text: "Trading App with fake data.",
  },
  {
    id: 3,
    category: "SDE",
    image: web,
    link1: "https://www.google.com",
    title: "Portfolio Website",
    text: "Created using React.",
  },
  {
    id: 4,
    category: "Daata",
    image: dag,
    link1: "https://github.com/SaiKiranCVN/Data-Pipeleines-with-Airflow",
    title: "Data Pipeline - Sparkify",
    text: "Data Pipeline using Airflow.",
  },
];

export default portfolios;
