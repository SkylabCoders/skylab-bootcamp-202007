import React from 'react';
import Welcome from './Welcome'
import Item from './Item'
import './../css/Dashboard.css'

const url = "https://images.pexels.com/photos/9606/people-woman-sport-muscles.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
const mockTheme = {
    imgurl: url,
    title: 'Sports'
}
function Dashboard(){
    return (
        <>
            <div className="dashboard__container">
                <Welcome />
                <Item themeTitle={mockTheme.title} themeImgurl={mockTheme.imgurl} />
                <Item themeTitle={mockTheme.title} themeImgurl={mockTheme.imgurl}/>
                <Item themeTitle={mockTheme.title} themeImgurl={mockTheme.imgurl}/>
                <Item themeTitle={mockTheme.title} themeImgurl={mockTheme.imgurl}/>
            </div>
        </>
    )
}

export default Dashboard;