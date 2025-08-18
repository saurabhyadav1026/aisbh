
import FriendsList from './FriendsList';


const Friend=(props)=>{

 return<>
           
                  <div  className="left_bar">
                      <div className="left_nav_icons">
                          <div id="friends_icon"><span><b>F</b></span></div>
                      </div>
                      <div className="left_nav_bar">
                          <div className="left_option" style={{ paddingBottom: '10px', display: 'flex', width: '100%' }}>
                              <h3 style={{ width: '80%' }}>Friends</h3>
                                                        
                          </div>
                          {/*  <!-- list of chats  --> */}
                          <div id="Friends_list_bar" className="scrollbar-only-rod" style={{ width: '100%', display: 'flex', flexDirection:"column-reverse" }}>
      
      <FriendsList setActiveChat={props.setActiveChat} chats={props.chats}></FriendsList>
                          </div>
                      </div>
                  </div>
              </>

}

export default Friend;