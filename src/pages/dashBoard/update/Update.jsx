
import UpdateForm from "../../../Components/dashboard/dashUpdate/UpdateForm"
import cookie from 'react-cookies';
function UpdatePage() {
 

    let token1 =cookie.load('auth'); 



  return (
    <>
    <UpdateForm token = {token1}/>
    
    </>

 );
}

export default UpdatePage;
