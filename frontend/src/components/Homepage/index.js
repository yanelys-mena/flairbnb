import './Homepage.css'
import { Link, useHistory } from 'react-router-dom';
import SearchBar from '../SearchBar';
import { useEffect } from 'react';
import { getAllListings } from '../../store/listings';
import { useDispatch, useSelector } from 'react-redux';

const Homepage = () => {
    const history = useHistory();
    const listings = useSelector((state) => Object.values(state?.listings));
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllListings());

    }, [])

    listings.sort(function (a, b) {
        return 0.5 - Math.random();
    });


    const redirect = () => {
        history.push('/listings#listingsPage')
    };

    const inspoImages = ['https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=240', 'https://a0.muscache.com/im/pictures/471ce643-a666-4787-8b9b-46ccd9137073.jpg?im_w=320', 'https://a0.muscache.com/im/pictures/aef20929-0d6a-40e7-8ac9-321ff0edf8c9.jpg?im_w=320', 'https://a0.muscache.com/im/pictures/2c0232e1-1dfe-4979-8e9c-04a7217b2c7c.jpg?im_w=320']



    return (
        <main>

            <div id="search_bar_div">
                <SearchBar />
            </div>
            <div className="home_largeimg">
                <div className="largeimg_card">
                    <img className="image" src="https://a0.muscache.com/im/pictures/8aa32150-e831-40aa-98f5-b743b44c6b27.jpg?im_w=1920"></img>
                    <div className="largeimg_overlay">
                        <p>Let your curiosity do the booking.</p>
                        <button onClick={redirect}><p>I'm flexible</p></button>
                    </div>

                </div>
            </div>
            <div className="home_inspo">
                <div id="inspiration_new_trip">Inspiration for your next trip</div>

                <div className="home_inspocards">
                    {listings?.map((listing, idx) =>
                        <>
                            {idx < 4 &&
                                <div className={`inspo_card${idx + 1}`}>

                                    <Link to={`/listings/${listing?.id}`} target="_blank" rel='noreferrer'>
                                        {/* <img src={inspoImages[idx]} className="inspo_img"></img> */}
                                        <img src={listing?.Images[0]?.url} className="inspo_img"></img>
                                        <div className="inspocard_overlay">
                                            <p>{listing?.name}</p>
                                            <p>{listing?.city}</p>
                                        </div>
                                    </Link>
                                </div>
                            }
                        </>
                    )}

                </div>

            </div>
            {/* <div className="inspo_card1">
                        <img src="https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=240" className="inspo_img"></img>
                        <div className="inspocard_overlay">
                            <p>Kissimmee</p>
                            <p>189 miles away</p>
                        </div>
                    </div>
                    <div className="inspo_card2">
                        <img src="https://a0.muscache.com/im/pictures/471ce643-a666-4787-8b9b-46ccd9137073.jpg?im_w=320" className="inspo_img"></img>
                        <div className="inspocard_overlay">

                            <p>Tampa</p>
                            <p>205 miles away</p>
                        </div>
                    </div>
                    <div className="inspo_card3">
                        <img src="https://a0.muscache.com/im/pictures/aef20929-0d6a-40e7-8ac9-321ff0edf8c9.jpg?im_w=320" className="inspo_img"></img>                    <div className="inspocard_overlay">

                            <p>Sevierville</p>
                            <p>725 miles away</p>
                        </div>
                    </div>
                    <div className="inspo_card4">
                        <img src="https://a0.muscache.com/im/pictures/2c0232e1-1dfe-4979-8e9c-04a7217b2c7c.jpg?im_w=320" className="inspo_img"></img>
                        <div className="inspocard_overlay">

                            <p>Atlanta</p>
                            <p>606 miles away</p>
                        </div>
                    </div> */}

            <div id="inspiration_new_trip">Discover our Partners</div>

            <div className="home_discover">

                <div className="discover_card">
                    <img src="https://a0.muscache.com/im/pictures/b2f98185-f3bf-40db-ba8d-da0bceeccc65.jpg?im_w=720" ></img>
                    <div className="discover_overlay">
                        <p>Get inspired for your trip</p>
                        <a href="https://pinterest-clone-aa.herokuapp.com/" target="_blank">
                            <button>Organize your ideas</button>
                        </a>
                    </div>
                </div>
                <div className="discover_card">
                    <img src="../../../static/pets.png" ></img>
                    <div className="discover_overlay">
                        <p>Traveling with pets</p>
                        <a href="https://aa-petsy.herokuapp.com/" target="_blank">
                            <button>Shop Pet Products</button>
                        </a>

                    </div>
                </div>
            </div>
            {/* <div className="home_shop">
                <div>
                    <p>Shop Flairbnb gift cards</p>
                    <button>Learn more</button>
                </div>
                <img src="https://a0.muscache.com/im/pictures/1ca4a497-ba40-4429-be1c-ac6abe4209c6.jpg?im_w=1200"></img>
            </div> */}
        </main >
    )
};


export default Homepage;