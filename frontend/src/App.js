import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import SignUpFormPage from "./components/SignUpFormPage";
import Listings from "./components/Listings";
import ListingDetail from "./components/ListingDetail";
import Footer from "./components/Footer";
import { restoreListings } from "./store/listings";
import CreateListings from "./components/CreateListing";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ManageListings from './components/ManageListings';
import SearchResults from './components/SearchResults';
import Trips from './components/Trips';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/signup">
            <SignUpFormPage />
          </Route>
          <Route exact path="/listings/:listingId">
            <ListingDetail ></ListingDetail>
          </Route>
          <Route path="/listings">
            <Listings />
          </Route>
          <Route path="/create-listing">
            <CreateListings />
          </Route>
          <Route path="/manage-listings">
            <ManageListings />
          </Route>
          <Route path="/search/:location/:guests/:start/:end">
            <SearchResults />
          </Route>
          <Route path="/trips">
            <Trips />
          </Route>
        </Switch>
      )}
      <Footer></Footer>

    </>
  );
}

export default App;
