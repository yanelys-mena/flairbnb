import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import SignUpFormPage from "./components/SignUpFormPage";
import Listings from "./components/Listings";
import ListingDetail from "./components/ListingDetail";
import { restoreListings } from "./store/listings";
import CreateListings from "./components/CreateListing";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(restoreListings());
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
        </Switch>
      )}
    </>
  );
}

export default App;
