import React, { useEffect, useState } from "react";
import client from "../../client";

const Footer = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "socials"]{
          "socialLinks": Social_Links[]{
            "link": social_link,
            "icon": icon
          }
        }`
      )
      .then((data) => {
        if (data.length > 0) {
          let socialLinks = data[0].socialLinks;
          setData(socialLinks);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <div className="bg-darkBlue text-center py-5">
      <p className="text-blue mb-2">Let's connect!</p>
      <div className="flex justify-center items-center gap-4 text-2xl mb-2 text-green block md:hidden lg:hidden xl:hidden">
        {data.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue mb-3 hover:text-green"
            dangerouslySetInnerHTML={{ __html: social.icon }}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
