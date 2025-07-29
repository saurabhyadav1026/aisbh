


const LogReg=()=>{

const [isLoggin,setIsLoggin]=useState(true)



return<>

<div className="blank_layer">
    <div id="log_reg_box">
        <h2>Loggin yourself</h2>
{isLoggin?<Loggin></Loggin>:<Register></Register>}

</div>
</div>



</>


}

export default LogReg;