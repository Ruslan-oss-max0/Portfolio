import taskBoard from "../assets/images/task-board.png";
import game2048 from "../assets/images/game-2048.png";
import moviesFilter from "../assets/images/movies-filter.png";
import landingPage from "../assets/images/landing-page.png";
import sortableTable from "../assets/images/sortable-table.png";
import listOfGoods from "../assets/images/list-of-goods.png";

export const projects = [
  {
    id: 1,
    name: "Movies Catalog & Form Validation",
    category: "React & TypeScript",
    tech: ["React", "TypeScript", "Vite", "Controlled Inputs", "CSS Modules"],
    summary:
      "A dynamic movie catalogue with real-time title/description filtering and an admin-style 'Add Movie' modal with strict field validation.",
    problem:
      "Admin form submission in catalog management apps often allows dirty or incomplete records without robust client-side validation, leading to invalid states and broken interfaces.",
    solution:
      "Engineered a controlled form with real-time blur validation, error states on touched fields, and disabled dispatch buttons until all requirements pass, resetting cleanly upon submission.",
    highlights: [
      "Field validation on blur with touch-state tracking",
      "Instant dual filtering across titles and descriptions",
      "Clean form state lifecycle with automated post-submit reset"
    ],
    live: "https://ruslan-oss-max0.github.io/react_movies-list-filter-js/",
    github: "https://github.com/Ruslan-oss-max0/react_movies-list-filter-js",
    image: moviesFilter
  },

  {
    id: 2,
    name: "Audio Store High-Fidelity Landing Page",
    category: "Responsive Layouts",
    tech: ["HTML5", "SCSS", "BEM", "CSS Grid", "Flexbox", "Figma"],
    summary:
      "A pixel-perfect e-commerce landing page for a premier audio equipment store, translated directly from a Figma design spec.",
    problem:
      "E-commerce landing pages must display complex multi-product cards with prices, categories, and hero showcases across all device viewports without layout shifts.",
    solution:
      "Built with strict semantic HTML5 and BEM methodology in modular SCSS. Implemented dynamic CSS Grid layouts, fluid typography, and an accessible mobile hamburger drawer.",
    highlights: [
      "Pixel-perfect fidelity to original Figma design",
      "Modular SCSS mixins and variable architecture",
      "Adaptive Grid layouts tailored for mobile, tablet, and desktop"
    ],
    live: "https://ruslan-oss-max0.github.io/layout_landing-page/",
    github: "https://github.com/Ruslan-oss-max0/layout_landing-page",
    image: landingPage
  },

  {
    id: 3,
    name: "Task Board (Kanban Workflow)",
    category: "React & TypeScript",
    tech: ["React", "TypeScript", "React Hooks", "CSS3", "State Management"],
    summary:
      "A Kanban-style task manager built independently from scratch, managing task lifecycles across Todo, In Progress, and Done.",
    problem:
      "Managing multi-column workflow states without external heavy libraries often leads to convoluted state updates and desynchronized column representations.",
    solution:
      "Designed unidirectional state flow using custom React Hooks and typed interfaces. Built custom actions for moving items forward and backward across stages with clean responsive mobile adaptations.",
    highlights: [
      "Strongly typed task data model in TypeScript",
      "Predictable state transitions between Kanban lanes",
      "Zero-dependency component architecture and clean responsive layout"
    ],
    live: "https://ruslan-oss-max0.github.io/task-board/",
    github: "https://github.com/Ruslan-oss-max0/task-board",
    image: taskBoard
  },

  {
    id: 4,
    name: "2048 Game Engine",
    category: "JavaScript DOM",
    tech: ["Vanilla JavaScript", "ES6+", "CSS Animations", "DOM API"],
    summary:
      "A complete algorithmic implementation of the classic 2048 game built with pure vanilla JavaScript and zero external dependencies.",
    problem:
      "Game development in vanilla JavaScript requires fast, bug-free mathematical matrix transformations, collision detection, and synchronization with keyboard listeners.",
    solution:
      "Implemented a 4x4 matrix engine that handles 4-direction sliding, row compression, number merges, and win/loss state evaluators through direct DOM manipulation.",
    highlights: [
      "Mathematical 2D matrix transformations for all directions",
      "Tile merge algorithms and score tracking logic",
      "Hardware-accelerated CSS animations on tile shifts"
    ],
    live: "https://ruslan-oss-max0.github.io/js_2048_game/",
    github: "https://github.com/Ruslan-oss-max0/js_2048_game",
    image: game2048
  },

  {
    id: 5,
    name: "Sortable Employee Data Table",
    category: "JavaScript DOM",
    tech: ["JavaScript", "DOM API", "CSS Grid", "Algorithm Sorting"],
    summary:
      "An interactive data table with multi-type column sorting for employee records (Name, Position, Age, Salary).",
    problem:
      "Sorting tabular data involves distinct data types (alphabetical strings vs numerical values) and needs alternating asc/desc states without full page refreshes.",
    solution:
      "Engineered a lightweight vanilla JS algorithm that inspects column data attributes, parses types appropriately, toggles sort indicators, and re-orders DOM table nodes in place.",
    highlights: [
      "Type-aware comparators for numbers and strings",
      "Ascending and descending sort order toggling",
      "Zero-library direct DOM optimization"
    ],
    live: "https://ruslan-oss-max0.github.io/js_sort_table_DOM/",
    github: "https://github.com/Ruslan-oss-max0/js_sort_table_DOM",
    image: sortableTable
  },

  {
    id: 6,
    name: "List of Goods State Controller",
    category: "React & TypeScript",
    tech: ["React", "JavaScript", "Controlled State", "Array Transformations"],
    summary:
      "A React application managing inventory display with versatile real-time sorting and an instant state restore feature.",
    problem:
      "When users apply multiple sorts or filters, mutating original arrays causes irreversible data loss and prevents simple rollback to original order.",
    solution:
      "Implemented immutable array processing with state snapshots, supporting alphabetical sort, length-based sort, and reverse sort, alongside an instant baseline reset.",
    highlights: [
      "Immutable state handling avoiding destructive mutations",
      "Multi-option sorting strategy (alphabetical, length, reverse)",
      "Instant one-click reset to initial fetched dataset"
    ],
    live: "https://ruslan-oss-max0.github.io/react_list-of-goods-js/",
    github: "https://github.com/Ruslan-oss-max0/react_list-of-goods-js",
    image: listOfGoods
  }
];
