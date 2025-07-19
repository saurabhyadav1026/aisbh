
import {About_icon, Help_icon, Privacy_icon, Setting_icon} from '../../icons'


const others=()=>{


    return (
        <>
        <div id="left_nav_bottom" className="left_bar">
    <div className="left_nav_icons " style={{flexDirection:'column',alignItems:'center'}}>

       {/*  <!-- setting icon --> */}
        
            <Setting_icon ></Setting_icon>
            <Privacy_icon></Privacy_icon>
            <Help_icon></Help_icon>
            <About_icon></About_icon>
        
        {/* <!--     <div id="privacy_icon"></div>
    <div id="about_icon"></div>
    <div id="help_icon"></div>
--> */}
    </div>
    <div className="left_nav_bar">
        <div>
            <h3 style={{paddingLeft:"5px"}}>Setting</h3>
            <h3  style={{padding:"5px"}}>Privacy & Policy</h3>
            <h3  style={{padding:"5px"}}>Help</h3>
            <h3  style={{padding:"5px"}}>About</h3>
        </div>
       {/*  <div><h4>Privacy & Policy</h4></div>
    <div><h4>Help</h4></div>
    <div ><h4>About</h4></div> */}

    </div>

</div>
        </>
    );
}

export default others;