

//import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import ChatPageSection from './ChatPageSection'
import ProfileSection from './components/userProfile/ProfileSection'


export const App= () => { 

const [page,setPage]=useState('ChatPageSection');

const [activeUser,setActiveUser]=useState('sbhunk');
 




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