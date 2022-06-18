import React, { useEffect, useState } from 'react';
import Image from "next/image";
import img3mb from "@public/images/3mb.jpg";
import Bottom2 from "./index.module.css";
import cookieActions from 'redux/actions/cookieActions';
import { UserModel } from '@Model/UserModel';



const index = () => {

    const [data, setData] = useState<UserModel[]>([]);

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = () => {
        cookieActions.getData(
            (success: any) => {
                console.log(success);
                setData(success)
            },
            (error: any) => {
                console.error(error);
            }
        );
    };

    return (
        <div className={Bottom2.text}>
            <table>
                <thead>
                    {data && data.map(data =>
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                        </tr>
                    )}
                </thead>
            </table>
        </div>
    );
};

export default index;
