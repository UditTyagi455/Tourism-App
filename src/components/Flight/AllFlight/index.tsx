import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {Text} from "react-native"
import { useSelector,useDispatch } from "react-redux";
import { setTabBar } from "../../../features/TabBar/tabBar";
import Header  from "../../Header";

const AllFlight = () => {
    const dispatch = useDispatch();
    const tabBar = useSelector(state => console.log("state.navbar.value ==>",state))
    useEffect(()=>{
        dispatch(setTabBar(true)) 
        return () => {
            dispatch(setTabBar(false)) 
        }
    },[])
    return(
        <SafeAreaView>
            <Header />
        </SafeAreaView>
    )
}

export default AllFlight;