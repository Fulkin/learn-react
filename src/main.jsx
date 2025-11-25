import {createRoot} from "react-dom/client";
import {App} from "./components/app/app.jsx";
import '/styles/global.css';

const root = document.getElementById('root');

const reactRoot = createRoot(root);

reactRoot.render(<App title='Restaurants'/>)