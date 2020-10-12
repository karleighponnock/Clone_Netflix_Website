import React from 'react'
import { Button } from './Button'
import styled from 'styled-components'
import ImgTv from '../images/tab-tv.png'

function TabContentTwo() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{ fontSize: '1.5rem' }}>
                        Watch TV shows and movies anytime, anywhere - personalized for you.
                    </span>
                    <Button className="btn">try it now</Button>

                    {/* //tv image container */}
                    <div>
                        <img src={ImgTv} />
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blue-ray players and more.</p>
                    </div>
                     {/* //tablet image container */}
                     <div>
                        <img src={ImgTv} />
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blue-ray players and more.</p>
                    </div>
                    <div>
                        <img src={ImgTv} />
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blue-ray players and more.</p>
                    </div>
                </div>
            </div>
        </TabContainer>
    )
}

export default TabContentTwo;


// Main Tab Content Container
const TabContainer = styled.div`
background: var(--main-deep-dark);

.tab-content{
    margin: 015%;
}

// Tab Top Content
.tab-top-content{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-item: center;
    padding: 2.5rem 0;
}

span {
    grid-column: 1 / 8;
}

.btn {
    margin: 0 1.25rem 1.5rem;
    grid-column: 10 / 12;
}

`;
