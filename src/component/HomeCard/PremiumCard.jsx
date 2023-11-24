import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Premium from "./Premium";

const PremiumCard = () => {
    const[premiums, setPremiums] = useState([])

    useEffect(()=>{
        fetch("./premimum.json")
        .then(res=>res.json())
        .then(data=>setPremiums(data))
    },[setPremiums])
    console.log(premiums);

    return (
        <div>
            <SectionTitle></SectionTitle>
            <div className="grid grid-cols-3 gap-6">
                {
                    premiums.map(premium=> <Premium key={premium.id} premium={premium}></Premium>)
                }
            </div>
        </div>
    );
};

export default PremiumCard;