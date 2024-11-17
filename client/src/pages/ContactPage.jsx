import React from "react";

function ContactPage() {
  return (
    <div className="font-outfit text-gray-800 p-8">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row  gap-16">
        {/* Map Section */}
        <div className="flex justify-center md:w-full">
          <div className="md:h-auto rounded-full overflow-hidden  border-custom-purple-1001 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26043.47934630407!2d76.67163689046029!3d9.693258625916231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cdbe6ffc82cf%3A0xb84a5f15951ef74a!2sSt.%20Thomas%20College%20Palai%20(Autonomous)!5e0!3m2!1sen!2sin!4v1731837162667!5m2!1sen!2sin"
             className=" w-[300px] h-[300px] md:w-[450px] md:h-[450px] "
              style={{ border:  0 }}
           
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col justify-center md:w-full">
          <h1 className="text-4xl text-[#330A48]">
            CONTACT <span className=" font-bold">US</span>
          </h1>
          <p className="text-lg leading-relaxed">
            For any questions or assistance regarding the Pala Marathon 2024,
            feel free to reach out:
          </p>
          <ul className="mt-4 space-y-2 text-lg">
            <li>
              📞 <span className="font-bold">Phone:</span>{" "}
              <a
                href="tel:+917896567697"
                className="text-purple-800 hover:underline"
              >
                +91 7896 567 697
              </a>
            </li>
            <li>
              📧 <span className="font-bold">Email:</span>{" "}
              <a
                href="mailto:info@palamarathon2024.com"
                className="text-purple-800 hover:underline"
              >
                info@palamarathon2024.com
              </a>
            </li>
            <li>
              🌐 <span className="font-bold">Website:</span>{" "}
              <a
                href="http://palamarathon.efpala.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-800 hover:underline"
              >
                palamarathon.efpala.org
              </a>
            </li>
          </ul>

          {/* Assembly Point Section */}
          <div className="mt-6">
            <h3 className="font-bold text-xl text-purple-800">
              Assembly Point:
            </h3>
            <p className="text-lg leading-relaxed mt-2">
              Starting Location: Pala Community Park, Main Entrance <br />
              Please arrive by 6:30 AM for check-in and warm-up activities.{" "}
              <br />
              The marathon will begin promptly at 7:00 AM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
