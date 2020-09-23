import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';

class TabComponent extends Component {
    render() {
        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab> 
                            <TabDoor>
                            </TabDoor>
                        </Tab>
                        <Tab> Tab Link 2</Tab>
                        <Tab> Tab Link 3</Tab>
                    </TabList>
                </Tabs>
            </div>
        );
    }
}

export default TabComponent;