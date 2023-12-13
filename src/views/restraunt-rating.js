import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom/cjs/react-router-dom'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import LinkLabel from '../components/href-label'
import NavigatorBar from '../components/navigator-bar'
import Label from '../components/label'
import './restraunt-rating.css'
import RestaurantFromID from '../components/restaurant-from-id-output.json'

/*Headers for CORS */
const headers = new Headers({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With'
});

const restIDURL = 'https://ovz97nwwca.execute-api.us-east-1.amazonaws.com/GetRestaurantFromID';
const likeURL = 'https://bn8qlgorkl.execute-api.us-east-1.amazonaws.com/Testing/Account/Restaurant'
const unLikeURL = 'https://bn8qlgorkl.execute-api.us-east-1.amazonaws.com/Testing/Account/Restaurant?'
const getLikedURL = 'https://bn8qlgorkl.execute-api.us-east-1.amazonaws.com/Testing/Account/Restaurant?'

const RestrauntRating = (props) => {
  // Get restraunt id
  let { id } = useParams();

  // Logged in account data
  const [accountData, setAccountData] = useState(null);
  const location = useLocation();

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [restrauntData, setData] = useState("");

  // Used to check if a response has been fetched or not; Prevents multiple class for fetching
  const [hasFetched, setHasFetched] = useState(false)
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [isLiked, setLiked] = useState(null);
  const [hasClicked, setClicked] = useState(false)

  // This hook only handles the fetching of rest information
  useEffect(() => {
    if (accountData == null || accountData == undefined)
      return
      

    // Fetch restraunt by id
    const fetchWithId = async () => {
      console.log("Fetching Rest Info")
      if (hasFetched){ 
        console.log("Rest Fetched, no need to do it again")
        return
      }

      try {
        if ((id != null) || (id != undefined)) {
          const requestBody = {
            "id" : id
          };
          
          var request = {
            method: 'POST',
            redirect: 'follow',
            header: headers,
            body: JSON.stringify(requestBody, null, 2)
          };

          // Get the data from the Rest ID
          try {
            const response = await fetch(restIDURL, request);
            const data = await response.json();
            console.info("Rest info received")
            setData(data);
            setHasFetched(true)
          } catch (error) {
            console.error("Error in getting Rest ID")
            return
          }
        } else {
          console.error("No ID was passed...");
          setData(RestaurantFromID);
          return;
        }
      } catch (error) {
        console.error("An error occured: " + error);
        setError(true);
      } finally {
        setLoading(false);
        setLoggedIn(true);
      }
    }
    fetchWithId();
  }, [accountData]);

  // Repeatedly set account until it becomes available
  useEffect(() => {
    setAccountData(location.state && location.state.accountData);
  })

  // When rest is finally fetched, we should then check the liked status too
  useEffect(() => {
    if (accountData == null || accountData == undefined)
      return
    const getLikeStatus = async () => {
      console.warn("Checking the like status of this rest for the first time")
      try {
        var optionsForGet = {
          method: 'GET',
          redirect: 'follow',
          header: headers
        }

        var getAllLikedURL = getLikedURL + `email=` + accountData.email.S
        const getLiked = await fetch(getAllLikedURL, optionsForGet)
          .then(response => response.json())
          .then((data) => {
            // console.log("Data" + JSON.stringify(data.restaurants))
            if (JSON.stringify(data.restaurants) == "[]") {
              return
            }
            const jsonData = data
            for (let i = 0; i < Object.keys(jsonData.restaurants).length; i++) {
              if (jsonData.restaurants[i].S == id) {
                try {
                  console.info("This rest was found in the liked list")
                  setLiked(true)
                  return
                } catch (error) {
                  console.log("Error when getting list: " + error)
                }
              }
            }
        });
      } catch (error) {
        console.error("Error: " + error)
      }
    }
    getLikeStatus();
  }, [hasFetched])

   // Handling changes from liked
   useEffect(() => {
    if (accountData == null || accountData == undefined)
      return

    if(hasClicked == false)
      return

    const handleLike = async () => {
      console.log("Like button clicked")
      if (isLiked) {
        console.log("Rest was liked")
        var optionsForLike = {
          method: 'POST',
          redirect: 'follow',
          header: headers,
          body: JSON.stringify({
            "email": accountData.email.S,
            "restaurantID" : id
          })
        }
        try {
          const update = await fetch(likeURL, optionsForLike);
        } catch (err) {
          console.error("Error in adding rest to liked list: " + err)
        }
        setClicked(false)
      } else {
        console.log("Rest was unliked")
        var optionsForUnLike = {
          method: 'DELETE',
          redirect: 'follow',
          header: headers
        }
        try {
          var removeLikeURL = unLikeURL + `email=` + accountData.email.S + "&restaurantID=" + id
          const deleteLike = await fetch(removeLikeURL, optionsForUnLike);
        } catch (err) {
          console.error("Error: " + err)
        }
        setClicked(false)
      }
    }
    handleLike();
  }, [hasClicked])

  function handleText(jsonText) {
    var text = String(jsonText)
      text.replace(/["{}]/g, '');
    return text;
  }

  // Set restraunt as liked and save it to likedRestraunts on account
  const handleLike = (e) => {
    e.preventDefault();
    if (accountData == undefined || accountData == null){
      console.error("Can't like if no user is logged in!")
      return
    }

    console.info("Like button pressed; Handling...")
    setLiked(!isLiked)
    setClicked(true)
  }

  if (isError) {
    return (
      <div className="restraunt-rating-page">
        <Helmet>
          <title>Restraunt Rating - Error</title>
          <meta
            property="og:title"
            content="RestrauntRating"
          />
        </Helmet>
        <NavigatorBar accountData={ accountData }></NavigatorBar>
        <img
          alt="image"
          src={props.imageSource}
          className="restraunt-image"
        />
        <div className="restraunt-rating-header">
          <h1 className="restraunt-rating-title">
            Error getting Name!
          </h1>
        </div>
        <div className="restraunt-rating-restraunt-info">
          <div className="restraunt-rating-restraunt-details">
            <div className="restraunt-rating-restraunt-contacts">
              <div className="restraunt-rating-row1">
                <Label
                  mainLabel="Address:"
                  listLabel="???"
                ></Label>
                <Label
                  mainLabel="Rating:"
                  listLabel="--/--"
                ></Label>
              </div>
              <div className="restraunt-rating-row2">
                <Label
                  mainLabel="Phone:"
                  listLabel="???"
                ></Label>
                <Label
                  mainLabel="Website:"
                  listLabel="???"
                ></Label>
              </div>
              <div className="restraunt-rating-row3">
                <Label
                  mainLabel="Cuisine:"
                  listLabel="???"
                ></Label>
                <Label
                  mainLabel="Price Range:"
                  listLabel="???"
                ></Label>
              </div>
              <button 
                type="button" 
                className={isLiked ? "restraunt-rating-unlike-button button" : "restraunt-rating-like-button button"} 
                onClick={handleLike}
              >
                  {isLiked ? 'Liked' : 'Like'}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  else if (!isLoggedIn) {
    return (
      <div className="restraunt-rating-page">
        <Helmet>
          <title>Restraunt Rating - Error</title>
          <meta
            property="og:title"
            content="RestrauntRating"
          />
        </Helmet>
        <NavigatorBar accountData={ accountData }></NavigatorBar>
        <img
          alt="image"
          src={props.imageSource}
          className="restraunt-image"
        />
        <div className="restraunt-rating-header">
          <h1 className="restraunt-rating-title">
            You need to be logged in to view the restaurant
          </h1>
          <span className="user-login-text5">
            <span>Don&apos;t have an account?</span>
              <br></br>
            </span>
            <Link to="/registration" className="user-login-navlink">
              Create one.
            </Link>
        </div>
        <div className="registration-to-login-container">
            <span className="registration-text12">
              <span>Already have an account?</span>
              <br></br>
            </span>
            <Link to="/user-login" className="registration-navlink">
              <span>
                Sign in here.
              </span>
            </Link>
          </div>
        <div className="restraunt-rating-restraunt-info">
          
        </div>
      </div>
    )
  }

  else if (isLoading) {
    return (
      <div className="restraunt-rating-page">
        <Helmet>
          <title>Restraunt Rating - Loading...</title>
          <meta
            property="og:title"
            content="RestrauntRating"
          />
        </Helmet>
        <NavigatorBar accountData={ accountData }></NavigatorBar>
        <img
          alt="image"
          src={props.imageSource}
          className="restraunt-image"
        />
        <div className="restraunt-rating-header">
          <h1 className="restraunt-rating-title">
            Loading...
          </h1>
        </div>
        <div className="restraunt-rating-restraunt-info">
          <div className="restraunt-rating-restraunt-details">
            <div className="restraunt-rating-restraunt-contacts">
              <div className="restraunt-rating-row1">
                <Label
                  mainLabel="Address:"
                  listLabel="Loading..."
                ></Label>
                <Label
                  mainLabel="Rating:"
                  listLabel="Loading..."
                ></Label>
              </div>
              <div className="restraunt-rating-row2">
                <Label
                  mainLabel="Phone:"
                  listLabel="Loading..."
                ></Label>
                <Label
                  mainLabel="Website:"
                  listLabel="Loading..."
                ></Label>
              </div>
              <div className="restraunt-rating-row3">
                <Label
                  mainLabel="Cuisine:"
                  listLabel="Loading..."
                ></Label>
                <Label
                  mainLabel="Price Range:"
                  listLabel="Loading"
                ></Label>
              </div>
              <button 
                type="button" 
                className={"restraunt-rating-like-button button"}>
                  Like
                </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  else {
    return (
      <div className="restraunt-rating-page">
        <Helmet>
          <title>{restrauntData.name} - Restraunt Rating</title>
          <meta
            property="og:title"
            content="RestrauntRating"
          />
        </Helmet>
        <NavigatorBar accountData={ accountData }></NavigatorBar>
        <img
          alt="image"
          src={restrauntData.image_url}
          className="restraunt-image"
        />
        <div className="restraunt-rating-header">
          <h1 className="restraunt-rating-title">
            {restrauntData.name}
          </h1>
        </div>
        <div className="restraunt-rating-restraunt-info">
          <div className="restraunt-rating-restraunt-details">
            <div className="restraunt-rating-restraunt-contacts">
              <div className="restraunt-rating-row1">
                <Label
                  mainLabel="Address:"
                  listLabel={restrauntData.location}
                ></Label>
                <Label
                  mainLabel="Rating:"
                  listLabel={restrauntData.rating + "/ 5"}
                ></Label>
              </div>
              <div className="restraunt-rating-row2">
                <Label
                  mainLabel="Phone:"
                  listLabel={restrauntData.phone}
                ></Label>
                <LinkLabel
                  mainLabel="Website:"
                  href_label={restrauntData.url}
                ></LinkLabel>
              </div>
              <div className="restraunt-rating-row3">
                <Label
                  mainLabel="Cuisine:"
                  listLabel={handleText(restrauntData.restaurant_types)}
                ></Label>
                <Label
                  mainLabel="Price:"
                  listLabel={restrauntData.price}
                ></Label>
              </div>
            </div>
          </div>
          <button type="button" className={isLiked ? "restraunt-rating-unlike-button button" : "restraunt-rating-like-button button"} onClick={handleLike}>
                  {isLiked ? 'Liked' : 'Like'}
                </button>
        </div>
      </div>
    )
  }

  
}

RestrauntRating.defaultProps = {
  imageSource: 'https://play.teleporthq.io/static/svg/default-img.svg',
  restrauntName: 'Loading...',
  restaurantRating: "--"
}

RestrauntRating.propTypes = {
  imageSource: PropTypes.string,
  restrauntName: PropTypes.string,
  restaurantRating: PropTypes.any
}

export default RestrauntRating
