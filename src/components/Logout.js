import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { useContext } from 'react';
import styled from 'styled-components';

const LogoutButton = styled.link`
//   background-color: #f5f5f5;
//   color: #333;
//   border: none;
//   padding: 10px 15px;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 16px;
//   &:hover {
//     background-color: #ddd;
//   }
`;

const LogoutContainer = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// height: 60px;
// background-color: #f5f5f5;
// position: fixed;
// width: 200px;
`;
function Logout() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch({ type: "LOGOUT" });
    console.log("Logout successful");
    navigate("/login");
  };

  return (
    <>
   <LogoutContainer>
      <LogoutButton onClick={handleLogout}>
        Logout
      </LogoutButton>
    </LogoutContainer>
    </>
  );
}

export default Logout;