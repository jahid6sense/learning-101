import React from 'react';
import TryCss from "@styles/Try.module.css";
import topCss from "./index.module.css";

const index = () => {

    

    return (
        <div>
            <div>Working now (^.^)</div>
            <div className={topCss.blueColor}>Value: {process.env.customKey}</div>
            <div className={topCss.bgGold}>Check console: I am in {process.env.HOST}</div>
            <div className={TryCss.redColor}>It should show only &apos;Warn&apos;</div>
            <br />
            {/* <div>Go to <a href="">s{process.env.Host}</a></div> */}
            <img
                className={topCss.img}
                src="https://assets.entrepreneur.com/content/3x2/2000/20160628101609-Coding.jpeg" alt="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/10/29/Pictures/_263cb176-19bf-11eb-aaf6-cc648d414a4d.jpg"
            />
        </div>
    );
};

export default index;
