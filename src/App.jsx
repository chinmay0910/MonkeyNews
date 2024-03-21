import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import { Route} from "react-router"
import {
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=>{
  const apiKey = "3416bdf6a26d4a7a827f649ec2139a04";
  const pageSize = 5;
  const [progress, setProgress] = useState(0)


    return(
      <>
      <Router>
        <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business"  pageSize={4} country="in" category="business"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment"  pageSize={4} country="in" category="entertainment"/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health"  pageSize={4} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science"  pageSize={4} country="in" category="science"/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports"  pageSize={4} country="in" category="sports"/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology"  pageSize={4} country="in" category="technology"/>}/>
          
        </Routes>
      </Router>
      </>

    )
  }


export default App
