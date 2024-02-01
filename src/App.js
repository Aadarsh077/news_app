import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News'
import {  Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App =()=> {
  
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <Navbar />
        <LoadingBar 
          height={3}
          color='#f11946'
          progress={progress}
        />
          <Routes>
            <Route exact path="/" element={<News apiKey={apiKey} pageSize={pageSize} setProgress={setProgress} key="general"  country="in" category="general" />} />
            <Route exact path='/bussiness' element={<News apiKey={apiKey} pageSize={pageSize} setProgress={setProgress} key="bussiness"  country="in" category="business" />} />
            <Route exact path="/health" element={<News apiKey={apiKey} pageSize={pageSize} setProgress={setProgress} key="health"  country="in" category="health" />} />
            <Route exact path="/sports" element={<News apiKey={apiKey} pageSize={pageSize} setProgress={setProgress} key="sports"  country="in" category="sports" />} />
            <Route exact path="/technology" element={<News apiKey={apiKey} pageSize={pageSize} setProgress={setProgress} key="technology"  country="in" category="technology" />} />
            <Route exact path="/science" element={<News apiKey={apiKey} pageSize={pageSize} setProgress={setProgress} key="science"  country="in" category="science" />} />
            <Route exact path="/entertainment" element={<News apiKey={apiKey} pageSize={pageSize} setProgress={setProgress} key="entertainment"  country="in" category="entertainment" />} />
          </Routes>
      </div>
    )
  
}
export default App;
