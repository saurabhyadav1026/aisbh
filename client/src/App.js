

//import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import ChatPageSection from './ChatPageSection'
import ProfileSection from './components/userProfile/ProfileSection'


export const App= () => { 

const [page,setPage]=useState('ChatPageSection');

const luser=localStorage.getItem('activeUser')||'sbhunk'

const [activeUser,setActiveUser]=useState(luser);
 
/* useEffect(()=>{
    const ac_user=localStorage.getItem('activeUser')
    alert(ac_user)
    if(ac_user){alert("@sbhb")
      setActiveUser(ac_user);}
alert("local   ")
},[])
 */
useEffect(()=>{
  /*   if(!activeUser){
        setActiveUser('sbhunk')
        localStorage.setItem('activeUser','sbhunk')
    }
    else{ */
    alert('welcome '+activeUser)
localStorage.setItem('activeUser',activeUser)
},[activeUser])


return <>

{page==='ProfileSection'&&<ProfileSection  activeUser={activeUser} setActiveUser={setActiveUser} setPage={setPage}/>}
{page==='ChatPageSection'&& <ChatPageSection activeUser={activeUser} setPage={setPage}/>}

</>

}
export default App;



/* 
<Router>

<Routes>

<Route path='/'>{<AIChatPage/>}</Route>
<Route path='/loggin'>{<Loggin/>}</Route>

</Routes>

</Router> 
 */