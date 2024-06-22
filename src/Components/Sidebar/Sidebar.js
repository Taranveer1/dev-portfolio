import React, { useEffect, useState } from "react";
import client from "../../client";

const Sidebar = () => {
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
    <div className="fixed bottom-0 left-0 p-9 hidden sm:block">
      <div className="flex flex-col items-center">
        {data.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue mb-3 hover:text-green text-3xl"
            dangerouslySetInnerHTML={{ __html: social.icon }}
          />
        ))}
        <div className="w-0.5 bg-blue h-24"></div>
      </div>
    </div>
  );
};

export default Sidebar;
