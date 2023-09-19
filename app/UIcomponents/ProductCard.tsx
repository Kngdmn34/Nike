'use client'
import React, { useState } from "react";

import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import ModelTrig from "./Model";


export default function ProductCard() {

    const [isModelOpen, setIsModelOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const list = [
        {
            title: "Sandale",
            img: "/images/usamaproductone.jpg",
            price: "399 MAD",
        },
        {
            title: "Tiger",
            img: "/images/productwo.jpg",
            price: "1699 MAD",
        },
        {
            title: "Raspberry",
            img: "/images/productthree.jpg",
            price: "1200 MAD",
        },
        {
            title: "Shark",
            img: "/images/productfour.jpg",
            price: "6700 MAD",
        },
        {
            title: "The Blue",
            img: "/images/productfive.jpg",
            price: "2299 MAD",
        },
        {
            title: "Jordan",
            img: "/images/productsix.jpg",
            price: "8900 MAD",
        },
        {
            title: "Air Max",
            img: "/images/productseven.jpg",
            price: "799 MAD",
        },
        {
            title: "Blazer",
            img: "/images/davidhinkel.jpg",
            price: "3299 MAD",
        },
    ];
    const openModel = (product: any) => {
        setSelectedProduct(product);
        setIsModelOpen(true);
    };



    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            {list.map((item, index) => (
                <Card shadow="sm" key={index} isPressable onClick={() => openModel(item)} >
                    <CardBody className="overflow-visible p-0">
                        <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt={item.title}
                            className="w-full object-cover h-[140px] rounded-xl"
                            src={item.img}
                        />
                    </CardBody>
                    <CardFooter className="text-small  justify-between">
                        <b>{item.title}</b>
                        <p className="text-default-500">{item.price}</p>
                    </CardFooter>
                </Card>
            ))}

        </div>
    );
}