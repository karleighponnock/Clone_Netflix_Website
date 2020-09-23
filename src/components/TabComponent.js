import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import TabDevices from './tabs_nav/TabDevices';
import TabPrices from './tabs_nav/TabPrices';
import '../css/TabsNav.css'

class TabComponent extends Component {
    render() {
        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab> 
                            <TabDoor>
                            </TabDoor>
                            <p><strong>No commitments<br />
                            Cancel online at anytime</strong></p>
                        </Tab>
                        <Tab> 
                            <TabDevices>
                            </TabDevices>
                            <p><strong>Watch anywhere</strong></p>
                        </Tab>
                        <Tab> 
                            <TabPrices>
                            </TabPrices>
                            <p><strong>Pick your price</strong></p>
                        </Tab>
                    </TabList>
                </Tabs>
            </div>
        );
    }
}

export default TabComponent;