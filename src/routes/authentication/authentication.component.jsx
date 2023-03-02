import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/sign-in/sign-in.component';

import { AuthContainer } from './authentication.styles';

const Authentication = () => {

    return (
        <AuthContainer>
            <SignIn></SignIn>
            <SignUp></SignUp>
        </AuthContainer>
    )
}

export default Authentication;