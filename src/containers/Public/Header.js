import React, { useCallback } from 'react';
import logo from '../../assets/logo.jpg'
import { Button } from '../../components';
import { useNavigate, Link } from 'react-router-dom'
import { path } from '../../ultils/constant'

const Header = () => {
    const navigate = useNavigate()
    const goLogin = useCallback((flag) => {
        navigate(path.LOGIN, { state: { flag } })
    },[])

    return (
        <div className='w-1100'>
            <div className="w-full flex items-center justify-between bg-red-300" >
                <Link to="/">
                    <img 
                        src={logo}
                        alt="logo"
                        className="w-[240px] h-[70px] object-contain"
                    />
                </Link>
                <div className='flex items-center gap-1' >
                    <small>Hotel Booking Web</small>
                    <Button 
                        text={'Đăng nhập'} 
                        textColor="text-white" 
                        bgColor="bg-blue-500" 
                        onClick={ () => goLogin(false) }
                    />
                    <Button 
                        text={'Đăng ký'} 
                        textColor="text-white" 
                        bgColor="bg-blue-500" 
                        onClick={ () => goLogin(true) }
                    />
                    <Button 
                        text={'Đăng tin mới'} 
                        textColor="text-white" 
                        bgColor="bg-orange-500" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Header