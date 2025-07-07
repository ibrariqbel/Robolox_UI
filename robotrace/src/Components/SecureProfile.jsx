
import IsAuthrizor from '../Utils/IsAuthorized'

const SecureProfile = () => {
   IsAuthrizor();
  return (
    <div><h1 style={{textAlign: 'center'}}>This is secure Page this should only open after Sucessful Login</h1></div>
  )
}

export default SecureProfile