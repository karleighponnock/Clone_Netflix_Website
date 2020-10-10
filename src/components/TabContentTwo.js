import React from 'react'
import { Button } from './Button'
import styled from 'styled-components'

    function TabContentTwo() {
        return (
            <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{fontSize: '1.5rem'}}>
                        Watch TV shows and movies anytime, anywhere - personalized for you.
                    </span>
                <Button className="btn">try it now</Button>
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
