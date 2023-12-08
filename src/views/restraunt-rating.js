import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom/cjs/react-router-dom'

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

  const [hasFetched, setHasFetched] = useState(false)

  const [isLiked, setLiked] = useState(false);
  const [shouldUpdate, setShouldUpdateLike] = useState(true);
  const [hasClicked, setClicked] = useState(false)
  const[clicks, setClicks] = useState(0)

  useEffect(() => {
    // Set first account data
    setAccountData(location.state && location.state.accountData);

    const getLikeStatus = async () => {

      if (!shouldUpdate) {
        console.log("No update on liked status required")
        return;
      }

      console.warn("Checking the like status of this rest")

      if (accountData == undefined || accountData == null){
        console.info("Can't check like if no user is logged in!")
        return
      }

      var stringIsInvalid = accountData.email.S === undefined ||
                            typeof accountData.email.S !== 'string' ||
                            accountData.email.S.length < 1;
      if (stringIsInvalid) {
        console.error("No account available yet!")
        return;
      }

      try {
        var optionsForGet = {
          method: 'GET',
          redirect: 'follow',
          header: headers
        }

        var getAllLikedURL = getLikedURL + `email=` + accountData.email.S
        // console.info("Url for get Liked Rests= " + getAllLikedURL)

        const getLiked = await fetch(getAllLikedURL, optionsForGet);
        const jsonData = await getLiked.json();        

        if (!shouldUpdate) {
          console.warn("should not update; Maybe we have updated before?")
          return
        }

        for (let i = 0; i < Object.keys(jsonData.restaurants).length; i++) {
          if (jsonData.restaurants[i].S == id) {
            try {
              console.info("This rest was found in the liked list")
              setLiked(true)
              setShouldUpdateLike(false)
              return
            } catch (error) {
              
            } finally {
              setLiked(false)
            }
          }
        }
      } catch (error) {
        console.error("Error: " + error)
      } finally {
        setShouldUpdateLike(false)
      }
    }


    // Fetch restraunt by id
    const fetchWithId = async () => {
      if (hasFetched)
        return
      try {
        if ((id != null) || (id != undefined)) {
          // console.log("ID to fetch: " + id);
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
      }
    }

    const toggleLikeAndUpdate = async () => {
      console.log("Changing liked status...")
      console.warn("Clicks: " + clicks)
      if (clicks > 0) {
        console.warn("Multiple calls detected; updating like status instead")
        getLikeStatus();
        return
      }
       
      setClicks(clicks + 1)
      

      try {
        
        var optionsForLike = {
          method: 'POST',
          redirect: 'follow',
          header: headers,
          body: JSON.stringify({
            "email": accountData.email.S,
            "restaurantID" : id
          })
        }

        var optionsForUnLike = {
          method: 'DELETE',
          redirect: 'follow',
          header: headers
        }
        // If this rest is liked, then remove it
        if (isLiked) {
            console.log("Rest was liked, adding to liked list")
            const update = await fetch(likeURL, optionsForLike);
        } else {
          console.log("Rest was unliked, removing from list")
          var removeLikeURL = unLikeURL + `email=` + accountData.email.S + "&restaurantID=" + id
          const deleteLike = await fetch(removeLikeURL, optionsForUnLike);
        }
        setShouldUpdateLike(true)
      } catch (error) {
        console.error("Error: " + error)
      } finally {
        setClicked(false)
        setClicks(0)
      }
    }

    fetchWithId()

    if (accountData != undefined || accountData != null){
      console.log("Account data is now available")
      getLikeStatus();
    }

    if (hasClicked) {
      //console.info("Button has been clicked during/after render")
      toggleLikeAndUpdate()
    }
    
  }, [isLiked, isLoading])

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
    setShouldUpdateLike(true)
    setLiked(!isLiked)
    setClicked(true)
  }

  if (isError) {
    return (
      <div className="restraunt-rating-page">
        <Helmet>
          <title>RestrauntRating - cs4800-restaurant-recommender</title>
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

  else if (isLoading) {
    return (
      <div className="restraunt-rating-page">
        <Helmet>
          <title>RestrauntRating - cs4800-restaurant-recommender</title>
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
          <title>RestrauntRating - cs4800-restaurant-recommender</title>
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
