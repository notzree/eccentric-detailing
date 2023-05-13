import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link'
export default function Footer() {
    const defaultProps = {
        center: {
          lat: 43.785935943655645,
          lng: -79.35213241898423,
        },
        zoom: 15,
      };
      const LocationPin = ({ text }) => (
        <div>
          <Icon icon="mdi:map-marker" className="pin-icon text-3xl text-error" />
        </div>
      );
    return(
      <footer className="footer py-10 pl-20 bg-black text-white">
        <div>
          <img className="w-20 h-20" src='logo.png'></img>
          <div>
            <SocialIcon bgColor="black" fgColor="grey" url="https://instagram.com" />
            <SocialIcon bgColor="black" fgColor="grey"  url="https://tiktok.com" />
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover" href='/detailing'>Detailing</Link>
          <Link className="link link-hover" href='/paint-correction'>Paint Correction</Link>
          <Link className="link link-hover" href='/paint-correction-film'>Paint Correction Film</Link>
          <Link className="link link-hover" href='/ceramic-coating'>Ceramic Coating</Link>
          <Link className="link link-hover" href='/tints'>Tints</Link>
          <Link className="link link-hover" href='/wraps'>Wraps</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover" href='/about' >About Us</Link>
          <Link className="link link-hover" href='/contact'>Contact</Link>
        </div>
        <div>
          <span className="footer-title">Location</span>
          <div className="h-[30vh] md:w-[50vh] bg-secondary overflow-hidden rounded-lg  w-[40vh] ">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <LocationPin
                lat={43.785935943655645}
                lng={-79.35213241898423}
              />
            </GoogleMapReact>
          </div>
        </div>
      </footer>
    )

}