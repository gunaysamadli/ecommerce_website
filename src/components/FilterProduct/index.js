import { React, useState } from 'react';
import { Tabs, Tab } from "@material-ui/core";
import FilterSlider from './FilterSlider';
import './index.scss';


const FilterProduct = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }
    return (
        <div className='product-filter'>
            <div className="product-filter-tabs">
                <div className='container'>
                    <div className='row'>
                        <Tabs className='tabs' value={selectedTab} onChange={handleChange} centered >
                            <Tab label={
                                <div className='tab-menu'>
                                  <h3>Bed && Bath</h3>
                                </div>
                            }>
                            </Tab>
                            <Tab label={
                                <div className='tab-menu'>
                                    <h3>Kitchen && Dining</h3>
                                </div>
                            }>
                            </Tab>
                            <Tab label={
                                <div className='tab-menu'>
                                    <h3>Nightstands</h3>
                                </div>
                            }>
                            </Tab>
                        </Tabs>
                        {selectedTab === 0 && <FilterSlider/>}
                        {selectedTab === 1 && <FilterSlider/>}
                        {selectedTab === 2 && <FilterSlider/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterProduct


