import React from 'react'
import './listing.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import img from '../../../Assets/image(11).png'
import img1 from '../../../Assets/image(6).png'
import img2 from '../../../Assets/image(9).png'
import img3 from '../../../Assets/image(10).png'
import user1 from '../../../Assets/user(4).jpg'
import user2 from '../../../Assets/user(3).jpg'
import user3 from '../../../Assets/user(2).jpg'
import user4 from '../../../Assets/user(1).jpg'

const Listing = () => {
    return (
        <div className='listingSection'>
            <div className="heading flex">
                <h1>My Listings</h1>
                <button className='btn flex'>
                    See All <BsArrowRightShort className='icon' />
                </button>
            </div>

            <div className="secContainer flex">

                <div className="singleItem">
                    <AiOutlineHeart className='icon' />
                    <img src={img} alt="image name" />
                    <h3>Annual Vince</h3>
                </div>

                <div className="singleItem">
                    <AiOutlineHeart className='icon' />
                    <img src={img1} alt="image name" />
                    <h3>Coffe Plant</h3>
                </div>

                <div className="singleItem">
                    <AiOutlineHeart className='icon' />
                    <img src={img2} alt="image name" />
                    <h3>Button Fern</h3>
                </div>

                <div className="singleItem">
                    <AiOutlineHeart className='icon' />
                    <img src={img3} alt="image name" />
                    <h3>Flower Plant</h3>
                </div>

            </div>

            <div className="sellers flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Sellers</h3>
                        <button className='btn flex'>
                            See All <BsArrowRightShort className='icon' />
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={user1} alt="user image" />
                            <img src={user2} alt="user image" />
                            <img src={user3} alt="user image" />
                            <img src={user4} alt="user image" />
                        </div>
                        <div className="cardText">
                            <span>
                                14.556 Plant sold <br />
                                <small>
                                    21 Sellers <span className="date">7 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Featured Sellers</h3>
                        <button className='btn flex'>
                            See All <BsArrowRightShort className='icon' />
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={user4} alt="user image" />
                            <img src={user1} alt="user image" />
                            <img src={user2} alt="user image" />
                            <img src={user3} alt="user image" />
                        </div>
                        <div className="cardText">
                            <span>
                                14.556 Plant sold <br />
                                <small>
                                    21 Sellers <span className="date">7 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listing
