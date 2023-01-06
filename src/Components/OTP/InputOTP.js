
import { useState } from "react";
import OtpInput from 'react-otp-input';
import Button from "../button/Button";
import CountDown from "./CountDown";

const InputOTP = ({setUserOTP, confirmOTP, isDisableConfirmOTP, setIsDisableConfirmOTP, timer, setTimer}) => {
   
    const [otp, setOtp] = useState('')
    const handleChange = (otp) => {
        setUserOTP(otp);
        setOtp(otp);
    }

    const handleClearInput = () => {
        setOtp('');
        setUserOTP(otp);
    }

    return (
        <div className="input-otp-container">
            <div className="title">Enter verification code</div>
            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span>-</span>}
                inputStyle={'input-customize'}
            />
            <div className="timer"><CountDown setIsDisableConfirmOTP={setIsDisableConfirmOTP} timer={timer} /></div>
            <div className="action">
                <Button className='button button2' onClick={handleClearInput}>Clear</Button>
                <Button className='button button1' onClick={confirmOTP} disabled={isDisableConfirmOTP}>Confirm OTP</Button>
                
            </div>
        </div>
    );
}

export default InputOTP;