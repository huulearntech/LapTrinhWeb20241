import React, { useState, useEffect } from "react";
import { InputForm, Button } from "../../components";
import { apiRegister } from "../../services/auth";
import { useLocation } from "react-router-dom";

const Login = () => {
    const location = useLocation()
    const [ isRegister, setIsRegister ] = useState(location.state?.flag)    // do state có thể là null nên cần dấu ?
    const [payload, setPayload] = useState({
        phone: "",
        password: "",
        name: ""
    })
    useEffect(() => {
        setIsRegister(location.state?.flag)
    }, [location.state?.flag])

    const handleSubmit = async () => {
        const response = await apiRegister(payload)
    }

    return (
        <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
            <h3 className="font-semibold text-2xl mb-3" >{ isRegister ? "ĐĂNG KÝ TÀI KHOẢN" : "ĐĂNG NHẬP" }</h3>
            <div className="w-full flex flex-col gap-3">
                {isRegister && <InputForm label={"HỌ TÊN"} value={payload.name} setValue={setPayload} type={"name"} />}
                <InputForm label={"SỐ ĐIỆN THOẠI"} value={payload.phone} setValue={setPayload} type={"phone"} />
                <InputForm label={"MẬT KHẨU"} value={payload.password} setValue={setPayload} type={"password"} />
                <Button 
                    text={ isRegister ? "ĐĂNG KÝ" : "ĐĂNG NHẬP" }
                    bgColor="bg-secondary1"
                    textColor="text-white"
                    fullWidth
                    onClick={handleSubmit}
                />
            </div>
            <div className="mt-7 flex items-center justify-between">
                {isRegister 
                    ? <small>Bạn đã có tài khoản? <span 
                        onClick={() => { setIsRegister(false) }}
                        className="text-blue-500 hover:underline cursor-pointer"
                    >
                        Đăng nhập ngay
                    </span></small> 
                    : <>
                        <small className="text-[blue] hover:text-[orange] cursor-pointer">Bạn quên mật khẩu?</small>
                        <small 
                            onClick={() => { setIsRegister(true) }}
                            className="text-[blue] hover:text-[orange] cursor-pointer"
                        >
                            Tạo tài khoản mới
                        </small>
                    </>}
            </div>
        </div>
    )
}

export default Login