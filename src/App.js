import React,{Suspense} from "react";
import { useEffect, lazy } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';


import Loader from "./Component/Loader";

// Nav Components
const NavBar = lazy(() => import("./Component/Navbar"));
const MobileNav =lazy(()=>import("./Component/MobileNav"));
const EmptyNav =lazy(()=>import("./Component/pages/emptyNavDiv"));

// Main Pages
const Home =lazy(()=>import("./Component/pages/Home"));
const Admin =lazy(()=>import("./Component/pages/Admin"));
const GalleryView =lazy(()=>import("./Component/pages/GalleryView"));
const About =lazy(()=>import("./Component/pages/About"));

// Service Pages
const Logo =lazy(()=>import("./Component/pages/logo"));
const Ads =lazy(()=>import("./Component/pages/ads"));
const Editing =lazy(()=>import("./Component/pages/Editing"));
const Photo =lazy(()=>import("./Component/pages/photo"));
const Poster =lazy(()=>import("./Component/pages/Poster"));
const UiUx =lazy(()=>import("./Component/pages/uiUx"));
const Other =lazy(()=>import("./Component/pages/otherService"));

//Admin Console
const AdminPanel =lazy(()=>import("./Component/pages/AdminPanel"));

// Other Pages
const QuotePage =lazy(()=>import("./Component/pages/qoute-page"));
const Dev =lazy(()=>import("./Component/pages/dev"));
const PageNotFound =lazy(()=>import("./Component/pages/PageNotFound"));
const AppDownload =lazy(()=>import("./Component/pages/AppDownload"));
// Top scroll function
const ScrollToTop =lazy(()=>import("./Component/ScrollToTop"));

// Page Loader


function App() {  

// Hook for (AOS) animatiom libary
  useEffect(() => {
    AOS.init();
  },[]);

  return (
    <Suspense fallback={<Loader/>}>
  <Router>
  <ScrollToTop/>
        <Switch>
          <Route exact path="/">
          <NavBar />
        <MobileNav/>
            <Home />
          </Route>
  
          <Route exact path="/admin">
          <NavBar />
        <MobileNav/>
            <Admin />
          </Route>
  
          <Route exact path="/admin-dashboard">
          <NavBar />
        <MobileNav/>
            <AdminPanel/>
          </Route>
         
         <Route exact path="/artgallery">
        {/* <Loader/> */}
        <NavBar />
       <MobileNav/>
          <GalleryView/>
        </Route>
  
          <Route exact path="/about">
          <NavBar />
        <MobileNav/>
            <About />
          </Route>
           
          <Route exact path="/logo">
          <NavBar />
        <MobileNav/>
            <Logo/>
          </Route>
           
          <Route exact path="/ads">
          <NavBar />
        <MobileNav/>
            <Ads/>
          </Route>
          <Route exact path="/edit">
          <NavBar />
        <MobileNav/>
            <Editing/>
            </Route>
            <Route exact path="/photo">
            <NavBar />
        <MobileNav/>
            <Photo/>
            </Route>
            <Route exact path="/poster">
            <NavBar />
        <MobileNav/>
            <Poster/>
            </Route>
            <Route exact path="/ui-ux">
            <NavBar />
        <MobileNav/>
           <UiUx/>
            </Route>
  
            <Route exact path="/other">
            <NavBar />
        <MobileNav/>
            <Other/>
            </Route>
  
            <Route exact path="/qoute">
            <NavBar />
        <MobileNav/>
          <QuotePage/>
            </Route>
  
            <Route exact path="/dev">
            <NavBar />
        <MobileNav/>
          <Dev/>        
            </Route>
  
            <Route exact path="/our-app">
            <NavBar />
        <MobileNav/>
          <AppDownload/>       
            </Route>
  
          
            <Route path="*">
          <PageNotFound/>
            </Route>
        </Switch>
        <EmptyNav/>
      </Router> 
      </Suspense>
  );
}

export default App;
