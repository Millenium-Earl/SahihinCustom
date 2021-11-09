import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop'
import NotFound from "./components/NotFound";
import GridContent from "./components/GridContent";
import DateComponent from "./components/DateComponent";
import AllPrayerCards from "./components/AllItems/AllPrayerCards";
import AllAudios from "./components/AllItems/AllAudios";
import AllBooks from "./components/AllItems/AllBooks";
import AllFatawis from "./components/AllItems/AllFatawis";
import AllVideos from "./components/AllItems/AllVideos";
import PrayerCardDetails from "./components/DetailedItems/PrayerCardDetails";
import FatawiDetails from './components/DetailedItems/FatawiDetails'
import BookDetails from './components/DetailedItems/BookDetails'
import VideoDetails from "./components/DetailedItems/VideoDetails";
import AudioDetailsTest from './components/DetailedItems/AudioDetailsTest'




const axios = require("axios");

function App() {
  const [PrayerCards, setPrayerCards] = useState([]);
  const [Audios, setAudios] = useState([]);
  const [Books, setBooks] = useState([]);
  const [Fatawis, setFatawis] = useState([]);
  const [Videos, setVideos] = useState([]);
  

  const [loading, setLoading] = useState(true);

  const getPrayerCards = async () => {
    await axios
      .get("http://172.18.28.218:8080/api/praycard/", {
        params: JSON.stringify({}),
      })
      .then(function (response) {
        

        setPrayerCards([...response.data]);
        setLoading(false)
        
      })
      .catch(function (error) {
        console.log(error);
        setLoading(true)
      });
  };

  const getAudios = async () => {
    await axios
      .get("http://172.18.28.218:8080/api/audio/", {
        params: JSON.stringify({}),
      })
      .then(function (response) {
        setAudios([...response.data]);
        setLoading(false)
        
      })
      .catch(function (error) {
        console.log(error);
        setLoading(true);
      });
  };

  const getBooks = async () => {
    await axios
      .get("http://172.18.28.218:8080/api/book/", {
        params: JSON.stringify({}),
      })
      .then(function (response) {
        console.log(response);
        setLoading(false)

        setBooks([...response.data]);
        
      })
      .catch(function (error) {
        console.log(error);
        setLoading(true)
      });
  };
  const getFatawis = async () => {
    await axios
      .get("http://172.18.28.218:8080/api/fatawi/", {
        params: JSON.stringify({}),
      })
      .then(function (response) {
        console.log(response);

        setFatawis([...response.data]);
        setLoading(false);
        
      })
      .catch(function (error) {
        console.log(error);
        setLoading(true);
      });
  };
  const getVideos = async () => {
    await axios
      .get("http://172.18.28.218:8080/api/video/", {
        params: JSON.stringify({}),
      })
      .then(function (response) {
        console.log(response);

        setVideos([...response.data]);
        setLoading(false);
        
      })
      .catch(function (error) {
        console.log(error);
        setLoading(true)
      });
  };


  return (
    <div className="App">
      <Router>
        <Nav />
         {/* <DateComponent />  */}
        <ScrollToTop>
        <Switch>
          <Route path="/" exact>
            
            <GridContent
              PrayerCards={PrayerCards}
              Audios={Audios}
              Books={Books}
              Fatawis={Fatawis}
              Videos={Videos}
              loading={loading}
              setLoading={setLoading}
              getPrayerCards={getPrayerCards}
              getAudios={getAudios}
              getBooks={getBooks}
              getFatawis ={getFatawis}
              getVideos={getVideos} 
            />
          </Route>
          <Route path="/AllCards" exact>
            
            <AllPrayerCards PrayerCards={PrayerCards} getPrayerCards={getPrayerCards} loading={loading} />
          </Route>
          <Route path="/AllCards/:id" component={PrayerCardDetails} />
          <Route path="/AllAudios" exact>
            <AllAudios Audios={Audios} getAudios={getAudios} loading={loading} />
          </Route>
          <Route path="/AllAudios/:id" component={AudioDetailsTest} />
           
          <Route path="/AllBooks" exact>
            
            <AllBooks Books={Books} getBooks={getBooks} loading={loading} />
          </Route>
          <Route path="/AllBooks/:id" component={BookDetails} />
            
          <Route path="/AllFatawis" exact>
            
            <AllFatawis Fatawis={Fatawis} getFatawis={getFatawis} loading={loading} />
          </Route>
          <Route path="/AllFatawis/:id" component={FatawiDetails} />
            {/* <FatawiDetails /> */}
          
          <Route path="/AllVideos" exact>
            <AllVideos loading={loading} Videos={Videos} getVideos={getVideos} />
          </Route>
          <Route path="/AllVideos/:id" component={VideoDetails} />
          <Route component={NotFound} />
    

        </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
