import React,{ useEffect } from "react"
//redux
import { fetchAllUsers } from '../../store/slices/users'
import { useDispatch, useSelector } from 'react-redux'

const Market = () => {

	const {list:users} = useSelector(state => state.users)
    
	const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchAllUsers())    
    },[dispatch])

    return (
        <div>

            {users.map((item)=>{
                return (
                    <div>
                        {item.name}
                    </div>
                )
            })}

            <div className="secondNav">
                <div className="secondNavButton active">
                    Dogs
                </div>
                <div className="secondNavButton">
                    Canodromes
                </div>
                <div className="secondNavButton">
                    Items
                </div>
            </div>
            <div className="">
                <h1>Market</h1>
            </div>
        </div>
    )
}
export default Market