'use client'
import React, { useState } from "react";

import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";





export default function ProductCard() {

    const products = [
        {
            title: "AIR ALPHA",
            img: "/images/air-max-alpha-trainer-4-mens-workout-shoes-KDn1dc.jpeg",
            price: "399 MAD",
        },
        {
            title: "ALPHA TRAINER",
            img: "/images/chaussure-dentrainement-air-max-alpha-trainer-5-pour-GmvrRB.jpeg",
            price: "1699 MAD",
        },
        {
            title: "MC TRAINER 2",
            img: "/images/mc-trainer-2-workout-shoes-WFVXbk.jpeg",
            price: "1200 MAD",
        },
        {
            title: "AIR TRAINER ONE",
            img: "/images/airtrainer.jpeg",
            price: "6700 MAD",
        },
        {
            title: " Air Trainer 1 SP",
            img: "/images/c2ac17a4-3d7d-4074-bc13-7b0f95f3bd00.jpeg",
            price: "2299 MAD",
        },
        {
            title: "Air Force",
            img: "/images/b7d9211c-26e7-431a-ac24-b0540fb3c00f.jpeg",
            price: "1400 MAD",
        },
        {
            title: "Air Force 1 High",
            img: "/images/custom-nike-air-force-1-high-by-you-shoes.jpeg",
            price: "799 MAD",
        },
        {
            title: " Air Max 95 By PPSC",
            img: "/images/10ad9134-ca07-4002-9f64-03ff2bc90327.jpeg",
            price: "3299 MAD",
        },
        {
            title: " Blazer Mid Pro Club",
            img: "/images/dec25f7f-1f38-44af-83e7-c8f83974ac16.jpeg",
            price: "1100 MAD",
        },
        {
            title: " Air Max TW",
            img: "/images/chaussure-air-max-tw-pour-2fb6jT.jpeg",
            price: "965 MAD",
        },
    ];





    return (

        <div className="w-full  mt-24   bg-neutral-100">
            <h1 className="text-center text-7xl mt-6 tracking-wider font-extrabold">TREND</h1>

            <div className="w-[96%] cursor-default mx-auto mb-11 mt-11 grid grid-cols-5 gap-2">

                {products.map((product, id) => (
                    <div key={id} className="flex mb-11 flex-col">
                        <div className="p-2 hover:scale-105  transition-all relative w-44 h-44 border-b-2 border-neutral-800"
                            style={{
                                backgroundImage: `url(${product.img})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}
                        >
                            <h2 className="mt-3 absolute font-semibold bottom-0 right-0">{product.price}</h2>
                        </div>
                        <h1>{product.title.toUpperCase()}</h1>
                    </div>
                ))}


            </div>

        </div>
    );
}