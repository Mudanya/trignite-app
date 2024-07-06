import React from "react";
import GridBackground from "./ui/GridBackground";

const Services = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <GridBackground>
        <section id="services" className="h-full w-full flex justify-center flex-col">
          <h2 className="sm:text-6xl text-4xl text-center">Our Services</h2>              
              <center><img src="/h_line_shape.png" alt="" /></center>
           

          <h4>Tech Solutions for Your Business</h4>
          <p>
            We specialize in providing tailored tech solutions that cater to
            your business needs.
          </p>
          <h4>Website Development</h4>
          <p>
            Crafting responsive and user-friendly websites optimized for your
            business objectives.
          </p>
          <h4>Mobile Application Development</h4>
          <p>
            Creating custom mobile applications to enhance your business
            presence and operations.
          </p>
          <h4>Payment Integrations</h4>
          <p>
            Integrating secure payment gateways to streamline transactions for
            your customers.
          </p>
          <h4>Hosting Services</h4>
          <p>
            Reliable hosting solutions to ensure your website and applications
            perform seamlessly.
          </p>
          <h4>Remote Support</h4>
          <p>
            Efficient technical assistance and troubleshooting remotely,
            ensuring minimal downtime.
          </p>
          <h4>Software as a Service (SaaS)</h4>
          <p>
            Connecting you with essential software solutions, with ongoing
            monitoring and support.
          </p>
          <h4>Custom Software Development</h4>
          <p>
            Designing and developing bespoke software applications tailored to
            your specific business requirements.
          </p>
          <h4>Troubleshooting and Technical Support</h4>
          <p>
            Expert support for resolving issues with software applications,
            programs, and online tools.
          </p>
          <h4>Technology Training</h4>
          <p>
            Comprehensive training sessions to empower your team with the skills
            to maximize technology use effectively. Crafted to simplify your
            business's technological needs, our services blend{" "}
          </p>
        </section>
      </GridBackground>
    </div>
  );
};

export default Services;
