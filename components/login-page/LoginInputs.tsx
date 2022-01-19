import inputTypes from '../../types/inputTypes'

import usernameIcon from '../../public/assets/icons/person.svg'

import AuthInput from '../generic-components/forms-and-inputs/AuthInput'

interface Props {
    formStyles: string
}

const LoginInputs = ({ formStyles }: Props) => {
    return (
        // TODO add action url
        <form name='login' action='' method='post' className={formStyles}>
            <AuthInput
                iconSrc={usernameIcon}
                inputType={inputTypes.text}
                name='username-or-email'
                placeholder='Username or email'
            />

            <AuthInput
                iconSrc={usernameIcon}
                inputType={inputTypes.password}
                name='password'
                placeholder='Password'
                isDataSensitive={true}
            />
        </form>
    )
}

export default LoginInputs