import "./App.css";
import Home from "./pages/Home";
import  { Routes, Route } from 'react-router-dom';
import Services from "./pages/Services";
import About from "./pages/About";
import PageNotFound from './components/PageNotFound';
import Services_research from "./pages/Services_research";
import Services_Compitions from './pages/Services_Compitions';
import Services_Patent from './pages/Services_Patent';
import Services_Coding from './pages/Services_Coding';
import Services_learning from './pages/Services_learning';
import Services_Project from './pages/Services_Project';
import Services_Tech from './pages/Services_Tech';
import Services_Intership from './pages/Services_Intership';
import Form from "./authentication/Form";
import Login from "./authentication/Login";
import ProjectCloud from "./pages/ProjectCloud";
import ProjectCyber from "./pages/ProjectCyber";
import ProjectIOT from "./pages/ProjectIOT";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path='/contact-us' element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Form />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path='/services/research' element={<Services_research />} />
          <Route path='/services/comptitions'element={<Services_Compitions />} />
          <Route path='/services/patent'element={<Services_Patent />} />
          <Route path='/services/coding'element={<Services_Coding />} />
          <Route path='/services/learning'element={<Services_learning />} />
          <Route path='/services/project'element={<Services_Project />} />
          <Route path='/services/project/cloud-computing' element={<ProjectCloud />} />
          <Route path='/services/project/cyber-security' element={<ProjectCyber />} />
          <Route path='/services/project/iot' element={<ProjectIOT />} />
          <Route path='/services/tech'element={<Services_Tech />} />
          <Route path='/services/internship'element={<Services_Intership />} />
        </Routes>
      </div>
    </>  
  );
}

export default App;
