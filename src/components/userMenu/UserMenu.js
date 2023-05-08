import { logOut } from 'Redux/auth/authOperations';
import { getUser } from 'Redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';

import { Btn, Div, P } from './UserMenu-styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const handleClickBtn = () => {
    dispatch(logOut());
  };
  return (
    <Div>
      <P>Welcome user: {user}</P>

      <Btn
        type="button"
        onClick={handleClickBtn}
        size="small"
        color="inherit"
        variant="outlined"
      >
        Logout
      </Btn>
    </Div>
  );
};

export default UserMenu;
