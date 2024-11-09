import Image from "next/image";

function About() {
    return ( 
        <div>
            <h1 className="text-center text-3xl mt-10 font-bold font-serif animate-shake ">About us</h1>
            <h1 className="font-bold font-serif text-3xl mt-10  ml-12">Our Company</h1>
            <p className="text-xl ml-10 mr-10 bg-white border-2 text-black border-gray-50 mt-2">At 𝙔𝙤𝙪𝙧 𝙈𝙚𝙘𝙝𝙖𝙣𝙞𝙘𝙨, we pride ourselves on delivering exceptional car servicing solutions. With years of experience in the automotive industry, we specialize in keeping your vehicle in top condition. Whether it’s routine maintenance, diagnostics, repairs, or custom services, our goal is to ensure your car runs smoothly and safely. Our commitment to high-quality service, attention to detail, and customer satisfaction sets us apart as a trusted choice for all your car care needs.</p>  <br />
            <hr className="border-1 ml-10 mr-10 border-black"/>
            <h1 className="font-bold font-serif text-3xl mt-10  ml-12">Our Team</h1>
            <p className="text-xl ml-10 mr-10 bg-white border-2 border-gray-50 text-black mt-2">
            Our team consists of highly skilled technicians who bring expertise and dedication to every service. With years of hands-on experience and the latest tools at their disposal, our technicians are equipped to handle a wide range of car issues, from simple repairs to complex diagnostics. They work with precision and care, ensuring that every job is done right the first time, keeping your car running at its best.
            </p>
            
            <div className=" justify-items-center hidden md:block">
            <img src="/ourteam.png" alt=" image" className="h-96 w-auto mt-5 rounded-2xl " /></div>
            
            <div className=" justify-items-center lg:hiddden md:hidden">
            <img src="/ourteam.png" alt=" image" className="h-56 w-auto mt-5 rounded-2xl " /></div>
            <br />
            <hr className="border-1 ml-10 mr-10 border-black"/>

            <h1 className="font-bold font-serif text-3xl mt-10  ml-12">Who Are We?</h1>
            
            <p className="text-xl ml-10 mr-10 bg-white border-2 border-gray-50 text-black mt-2">
            We are a group of passionate car service experts who truly understand the value of your vehicle. Our mission is to provide hassle-free, reliable, and affordable car services while ensuring the safety and longevity of your car. We take pride in building lasting relationships with our customers, offering personalized services, and making sure your car’s needs are always met with the highest standards
            </p> <br />
            <hr className="border-1 ml-10 mr-10 border-black"/>
            <h1  className="font-bold font-serif text-3xl mt-10  ml-12">Why Choose Us?</h1>
            <div className="text-xl ml-10 mr-10 bg-white border-2 text-black border-gray-50 mt-2">
                <ul>
                    <li>→ <b className="font-serif">Experienced Technicians </b>: Our skilled team has years of hands-on experience, ensuring reliable and efficient service.</li>
                    <li> → <b className="font-serif">High-Quality Service</b>:  We use the latest tools and techniques to deliver exceptional car care.</li>
                    <li>→ <b className="font-serif">Transparent Pricing</b> :  No hidden costs—just honest and upfront pricing for all our services. </li>
                    <li>→ <b className="font-serif">Customer Satisfaction</b>:  We prioritize your needs and guarantee top-notch service to keep you satisfied.</li>
                    <li>→ <b className="font-serif">Comprehensive Services</b>: From routine maintenance to complex repairs, we provide a wide range of car services.</li>
                    <li>→ <b className="font-serif">Trustworthy Solutions</b>: Our commitment to quality and safety ensures that your vehicle is always in good hands.</li>
                    <li>→ <b className="font-serif">Fast Turnaround:</b>: We aim to complete repairs and services quickly, getting you back on the road without delay.</li>
                </ul>
           

            </div>
            
        </div>
     );
}

export default About;