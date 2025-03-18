'use client';

import { useEffect, useState } from "react";
import PropertylistItem from "./PropertyListItem";
import apiService from "@/app/services/apiServices";

export type PropertyType = {
    id: string;
    title: string;
    image_url: string;
    price_per_night:number;
}

const Propertylist = () => {
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        const url = 'http://localhost:8000/api/properties/properties/';

        await fetch(url, {
            method: 'GET',
        })
        .then(response => response.json())
        .then((json) => {
            console.log('json', json)

            setProperties(json.data)
        })
        .catch((error) => {
            console.log('error', error)
        })
    };

    useEffect(() => {
        apiService.get('hello')

        getProperties();
    }, []);

    return (
        <>
            {properties.map((property) => {
                return(
                    <PropertylistItem 
                        key={property.id}
                        property={property}
                    />
                )
            })}
        </>
    )
}

export default Propertylist;