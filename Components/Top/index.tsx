import React from "react";
import TryCss from "@styles/Try.module.css";
import topCss from "./index.module.css";
import Image from "next/image";
import img3mb from "@public/images/3mb.jpg";
import img10mb from "@public/images/10mb.jpg";
import img11mb from "@public/images/11mb.jpg";
import img12mb from "@public/images/12mb.jpg";
import Link from 'next/link';

const index = () => {
  const myLoader = ({ src }: any) => {
    return `https://miro.medium.com/max/1400/1*N_A8rlei1cfYHPVK856wXw.png`
  }

  return (
    <div>

      <div className="mb-12 mt-4">
        <h1 className="text-3xl font-bold underline bg-green-300">
          Hello, I am from Tailwind Css
        </h1>

        <Link href="/tailwind">
          <a className="text-2xl font-bold underline text-gray-900">Explore Tailwind Css</a>
        </Link>
      </div>

      <div className="mb-12 mt-4">
        <Link href="/googleMap">
          <a className="text-2xl font-bold underline text-blue-700">Google Map</a>
        </Link>
      </div>

      <div className="mb-12 mt-4">
        <Link href="/tomtomMap">
          <a className="text-2xl font-bold underline text-blue-700">Tomtom Map</a>
        </Link>
      </div>

      <div>Working now (^.^)</div>

      <div className={topCss.blueColor}>Value: {process.env.customKey}</div>
      <div className={topCss.bgGold}>
        Check console: I am in {process.env.HOST}
      </div>
      <div className={TryCss.redColor}>
        It should show only &apos;Warn&apos;
      </div>
      <br />

      <div
      // style={{ display: 'flex' }}
      >
        <div>
          <b>This is 3mb+ pic (not optimized)</b>
          <img
            className={topCss.img}
            src="/images/3mb.jpg"
          />
        </div>

        <div>
          <b>This is 3mb+ pic (optimized) eager</b>
          <Image
            // loader={myLoader}
            loading='eager'
            quality={25}
            src={img3mb}
          />
          <b>This is 10mb+ pic (optimized) lazy</b>
          <Image
            quality={50}
            src={img10mb}
          />
          <b>This is 11mb+ pic (optimized) lazy</b>
          <Image
            src={img11mb}
            quality={75}
          />

          <b>This is 12mb+ pic (optimized) eager</b>
          <div
            style={{ display: 'flex' }}
          >
            <div>
              <Image
                loading='eager'
                quality={100}
                src={img12mb}
              />
            </div>

            <div>
              <img
                className={topCss.img}
                src="/images/12mb.jpg"
              />
            </div>
          </div>
        </div>

      </div>

    </div >
  );
};

export default index;
