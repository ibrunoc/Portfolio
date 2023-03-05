import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Loading from "./Components/Loading/Loading";

import { useState, useEffect } from "react";

const App = lazy(() => import('./App.jsx'));
const Courses = lazy(() => import('./Pages/Courses/Courses.jsx'));
const Projects = lazy(() => import('./Pages/Projects/Project.jsx'));
const Error = lazy(() => import('./Pages/Error404/Error404.jsx'));

export function Router() {

  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
      setIsLoading(true);
      setTimeout(() => {
      setIsLoading(false);
      }, 1000);
  }, []);
  
  return (    
    <Suspense fallbacky={<Loading />}>      
      {loading?      
      <Loading />:
        <BrowserRouter>   
          <Routes>        

            <Route path="*" element={<Error />} />      

            <Route path="/" element={<App />} /> 

            <Route path="/Courses" element={<Courses />} />
            <Route path="/Formacao" element={<Courses />} />
            <Route path="/Formação" element={<Courses />} />
            <Route path="/Cursos" element={<Courses />} />
            <Route path="/Curso" element={<Courses />} />

            <Route path="/Projeto" element={<Projects />} />          
            <Route path="/Projetos" element={<Projects />} />
            <Route path="/Project" element={<Projects />} />
            <Route path="/Projects" element={<Projects />} />

          </Routes>     
        </BrowserRouter>      
      }
    </Suspense>
  );
}

