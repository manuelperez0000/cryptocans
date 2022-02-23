import React,{useEffect} from "react";
import { useDispatch } from 'react-redux'
import { getLocation } from "../../store/redux"
import { useLocation } from "react-router-dom"

const Shop = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getLocation(location.pathname))
    },[])
    return (
        <div className="container p-2">
            <div className="center-v w-100">
                <div className=" w-100">
                    <div className="row text-center">
                        <div className="col-4">
                            <div className="box2 c">
                                Common Box
                            </div>
                            <button className="btn btn-primary mt-2 w-50"> Buy </button>
                        </div>
                        <div className="col-4">
                            <div className="box2 e">
                                Epic Box
                            </div>
                            <button className="btn btn-primary mt-2 w-50"> Buy </button>
                        </div>
                        <div className="col-4">
                            <div className="box2 l">
                                Legendary Box
                            </div>
                            <button className="btn btn-primary mt-2 w-50"> Buy </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Shop