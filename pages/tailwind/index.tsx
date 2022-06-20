import { ImageModel } from '@Model/ImageModel';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ImageActions from 'redux/actions/ImageActions';

const index = () => {

    const [data, setData] = useState<ImageModel[]>([]);

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = () => {
        ImageActions.getImages(
            (success: any) => {
                console.log(success.slice(0, 20));
                setData(success.slice(0, 20))
            },
            (error: any) => {
                console.error(error);
            }
        );
    };

    return (
        <div>
            <h1 className="text-4xl font-bold underline bg-red-400">Welcome to Tailwind Css</h1>

            <div className="grid grid-cols-4 gap-4 m-6 mt-10">
                {data && data.map(data =>
                    <div className="mt-8 mb-8">
                        <b>Image Id: {data.albumId}</b>
                        <p className="text-2xl font-bold">Title: {data.title}</p>
                        <img
                            src={data.url}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default index;
