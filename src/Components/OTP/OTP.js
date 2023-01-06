import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import { useState } from "react";
import './otp.scss';

const OTP = () => {

    const [orgOTPParent, setOrgOTPParent] = useState('');
    const [userOTP, setUserOTP] = useState('');
    const [isDisableConfirmOTP, setIsDisableConfirmOTP] = useState(false);
    const [timer, setTimer] = useState(10);
    
    const confirmOTP = () => {
        if(+orgOTPParent === +userOTP && orgOTPParent !== '') {
            setTimer(0);
            alert("Đúng OTP");   
        }else{
            alert("Sai OTP");
        }
    }

    return (
        <div className="otp-container">
            <GenerateOTP orgOTPParent={orgOTPParent} setOrgOTPParent={setOrgOTPParent} />
            <InputOTP 
                userOTP={userOTP} 
                setUserOTP={setUserOTP} 
                confirmOTP={confirmOTP} 
                isDisableConfirmOTP={isDisableConfirmOTP}
                setIsDisableConfirmOTP={setIsDisableConfirmOTP}
                timer={timer}
                setTimer={setTimer}
            />
        </div>
    )
}

export default OTP;