import taskBoard from "../assets/images/task-board.png";
import game2048 from "../assets/images/game-2048.png";
import moviesFilter from "../assets/images/movies-filter.png";
import landingPage from "../assets/images/landing-page.png";
import sortableTable from "../assets/images/sortable-table.png";
import listOfGoods from "../assets/images/list-of-goods.png";

export const projects = [
  {
    id: 1,
    name: "Task Board",
    tech: "React, CSS",
    description:
      "A task management app built independently without templates or course guidance. Organises work across three stages — Todo, In Progress, and Done. Tasks move between columns via action buttons, state is managed with React hooks, and the layout adapts fully to mobile screens.",
    live: "https://ruslan-oss-max0.github.io/task-board/",
    github: "https://github.com/Ruslan-oss-max0/task-board",
    image: taskBoard,
  },

  {
    id: 2,
    name: "2048 Game",
    tech: "JavaScript, DOM",
    description:
      "A fully functional implementation of the classic 2048 puzzle game. Built with pure JavaScript and no libraries — handles keyboard input, tile merging logic, movement in all four directions, and win/lose detection. All game state is managed through direct DOM manipulation.",
    live: "https://ruslan-oss-max0.github.io/js_2048_game/",
    github: "https://github.com/Ruslan-oss-max0/js_2048_game",
    image: game2048,
  },

  {
    id: 3,
    name: "Movies Filter",
    tech: "React, JavaScript",
    description:
      "A dynamic movie catalogue with real-time search functionality. As the user types, the list filters instantly across both movie titles and descriptions simultaneously. Built with React controlled components and dynamic list rendering.",
    live: "https://ruslan-oss-max0.github.io/react_movies-list-filter-js/",
    github: "https://github.com/Ruslan-oss-max0/react_movies-list-filter-js",
    image: moviesFilter,
  },

  {
    id: 4,
    name: "Musician Landing Page",
    tech: "HTML, SCSS, JavaScript",
    description:
      "A multi-section landing page for a musician products brand. Features scroll animations, interactive elements, and a fully adaptive layout built with Flexbox and CSS Grid. Written with BEM methodology and SCSS for clean, scalable styling.",
    live: "https://ruslan-oss-max0.github.io/layout_landing-page/",
    github: "https://github.com/Ruslan-oss-max0/layout_landing-page",
    image: landingPage,
  },

  {
    id: 5,
    name: "Sortable Table",
    tech: "JavaScript, DOM",
    description:
      "An interactive data table that sorts employee records by Name, Position, Age, or Salary on column header click. Built entirely with vanilla JavaScript and DOM manipulation — no frameworks or libraries used.",
    live: "https://ruslan-oss-max0.github.io/js_sort_table_DOM/",
    github: "https://github.com/Ruslan-oss-max0/js_sort_table_DOM",
    image: sortableTable,
  },

  {
    id: 6,
    name: "List of Goods",
    tech: "React, JavaScript",
    description:
      "A React application that manages and displays a list of goods with multiple sorting options — alphabetically, by length, or reversed. Includes a reset function that returns the list to its original order. Demonstrates React state management and conditional rendering.",
    live: "https://ruslan-oss-max0.github.io/react_list-of-goods-js/",
    github: "https://github.com/Ruslan-oss-max0/react_list-of-goods-js",
    image: listOfGoods,
  },
];
