


import ProfileSectionControl from "./ProfileSectionControl"

const ProfileSection=(props)=>{


    


  const sty1={
height:'95%',
width:'100%',
backgroundColor:'black',
display:'flex', 
position:'fixed', 
alignItems:'center',
justifyContent:'center',
flexDirection:'column'
    }

const sty2={

    height:'60%',
width:'70%',
backgroundColor:'white',


}











return <div id="sbh" style={sty1}>

<div style={{display:"block",position:'fixed',top:'5%',right:'5%'}}><h1 onClick={()=>props.setPage('ChatPageSection')} style={{color:'white'}}>X</h1></div>
<div style={sty2}>

<ProfileSectionControl isLoggin={props.isLoggin} setIsLoggin={props.setIsLoggin} activeUser={props.activeUser} setActiveUser={props.setActiveUser} setPage={props.setPage} />

</div>
</div>


}

export default ProfileSection;