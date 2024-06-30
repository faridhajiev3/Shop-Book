import React from 'react'
import "./shop.css"
// import books from "..//shop../pages/assets/8aabf1bdde6f35265ff40fb98689a2d3.png"
import { BOOKS } from '../../books'
import Product from './product'
import Shopmain from './shopmain'
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import ListItem from './listItem'
export default function Shop() {
    return ( 
        <div>
            <div className="shop">
                <div className="shopTitle">
                    <h1 style={{ fontSize: "40px" }}>New Releases This Week</h1>
                    <p style={{ fontSize: "16px" }}>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>
                    <div>
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="container">
                    <div className="shape-container">
                        <img className='shape' src="https://divbyzero.com/wp-content/uploads/2024/01/You-are-a-Badass.png.webp" alt="" />
                    </div>
                    <div className="shape-container">
                        <img className='shape' src="https://divbyzero.com/wp-content/uploads/2024/01/The-Power-of-Habit.png.webp" alt="" />
                    </div>
                    <div className="shape-container">
                        <img className='shape' src="https://divbyzero.com/wp-content/uploads/2024/01/Who-moved-my-cheese.jpg.webp" alt="" />
                    </div>
                </div>
            </div>
            <Shopmain />
            <div className='theEnd'>
                <div>
                    <div>
                        <img className='writing' src="https://s3-alpha-sig.figma.com/img/4589/5a84/8aabf1bdde6f35265ff40fb98689a2d3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=puIGON~oHsvj8H-uxpfeg28Blb5cG-1ahngoIIAsYwiWT-MiIw~hqMp6FL8qvxYvOOkf2gKca0SvnBJOScFRcBTy23GNdAkw-BlLS9cG68Q-FP1IxFIyvSRzOH--IynYhMCQVh5f1RNAe2md9A1ikD7I2IRQAgrrq0s5GB7WpPzPFpV2CpvebPinWxvGb37P-PxC~qXreR0PBrwQpN6XxvTy-pVixD2d2tmTUZvgIiZqFa7VXUI7s747V4eW5lXyJTmoDoMtlxQhjE-72KU4ejU0f9N-brNRuDjtAA4byZug-jPN6CncxFW7qImtXomsS5ZTIRLEXQxzqU~4nnNnnQ__" alt="" />
                    </div>
                    <div className='items'>
                        <ListItem text={"About"} />
                        <ListItem text={"Features"} />
                        <ListItem text={"Pricing"} />
                        <ListItem text={"Gallery"} />
                        <ListItem text={"Team"} />
                    </div>
                </div>
                <div className='regis'>
                    <div>
                        <p>Subscribe to stay tuned for new product and latest updates. Let’s do it!</p>
                    </div>
                    <div>
                        <input placeholder='Enter your email address' type="text" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='setting'>
                <nav>

                <div className='itemLink'>
                    <ul>
                    <ListItem text={"Privacy Policy"} path='/'/>
                    <ListItem text={"Terms of Use"} />
                    <ListItem text={"Sales and Refunds"} />
                    <ListItem text={"Legal"} />
                    </ul>
                </div>
                <div className='socialMedia'>
                    <FaInstagram className='instagram'/>
                    <FaGoogle className='google'/>
                    <FaFacebook className='facebook'/>
                </div>
                </nav>
            </div>
        </div>
    )
}