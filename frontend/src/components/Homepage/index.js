import './Homepage.css'

const Homepage = () => {
    return (
        <main>
            <div className="home_search">
                <p>search bar goes here</p>
            </div>
            <div className="home_largeimg">
                <div className="largeimg_card">
                    <img className="image" src="https://a0.muscache.com/im/pictures/21c2735e-a734-40f8-9f60-9ac299c4394c.jpg?im_w=960"></img>
                    <div class="largeimg_overlay">
                        <p>Not sure where to go? Perfect.</p>
                        <button href="/">I'm flexible</button>
                    </div>

                </div>
            </div>
            <div className="home_inspocards">
                <div className="inspo_card1">
                    <img src="https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=240" className="inspo_img"></img>
                    <div className="inspocard_overlay">
                        <p>Kissimmee</p>
                        <p>189 miles away</p>
                    </div>
                </div>
                <div className="inspo_card2">
                    <img src="https://a0.muscache.com/im/pictures/471ce643-a666-4787-8b9b-46ccd9137073.jpg?im_w=320" className="inspo_img"></img>
                    <p>Tampa</p>
                    <p>205 miles away</p>
                </div>
                <div className="inspo_card3">
                    <img src="https://a0.muscache.com/im/pictures/aef20929-0d6a-40e7-8ac9-321ff0edf8c9.jpg?im_w=320" className="inspo_img"></img>
                    <p>Sevierville</p>
                    <p>725 miles away</p>
                </div>
                <div className="inspo_card4">
                    <img src="https://a0.muscache.com/im/pictures/2c0232e1-1dfe-4979-8e9c-04a7217b2c7c.jpg?im_w=320" className="inspo_img"></img>
                    <p>Atlanta</p>
                    <p>606 miles away</p>
                </div>
            </div>
            <div className="home_discover">
                <div>
                    <img src="https://a0.muscache.com/im/pictures/0dcae177-2f65-4a15-b9e8-75d8c9b3cbe8.jpg?im_w=480" className="discover_card"></img>
                    <p>Things to do on your trip</p>
                    <button>Experiences</button>
                </div>
                <div>
                    <img src="https://a0.muscache.com/im/pictures/aef20929-0d6a-40e7-8ac9-321ff0edf8c9.jpg?im_w=320" className="discover_card"></img>
                    <p>Things to do from home</p>
                    <button>Online Experiences</button>
                </div>
            </div>
            <div className="home_shop">
                <p>Shop Flairbnb gift cards</p>
                <button>Learn more</button>
                <img src="https://a0.muscache.com/im/pictures/1ca4a497-ba40-4429-be1c-ac6abe4209c6.jpg?im_w=1200"></img>
            </div>
        </main >
    )
};


export default Homepage;