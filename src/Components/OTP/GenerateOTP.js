import { useState } from "react"
import Button from "../button/Button";

const GenerateOTP = ({setOrgOTPParent}) => {

    // original
    const [orgOTP, setOrgOTP] = useState('');

    const handleGenerateOtp = () => {
        const otp = Math.floor(100000 + Math.random() * 900000);
        setOrgOTPParent(otp);
        setOrgOTP(otp);
    }

    return(
        <div>
            <p className="otp-number">your OTP: {orgOTP}</p>
            <Button className='button button1' onClick={handleGenerateOtp}>Generate OTP</Button>
        </div>
    )
}

export default GenerateOTP