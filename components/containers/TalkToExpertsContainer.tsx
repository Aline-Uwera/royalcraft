// components/ConsultationSection.js
import React from 'react'

const TalkToExperts = () => {
  return (
    <div className="bg-[#f6f8fb] py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-full max-w-full px-4">
        <div className="md:w-7/12 w-full flex-none max-w-[58.333333%] relative min-h-[1px] px-4">
          <div>
            <h2 className="text-[40px] text-left font-bold leading-[50px] mb-[32px] flex flex-col">
              <span className="text-[20px] leading-7 font-light">
                BEST CUSTOM
              </span>
              Software Development Company
            </h2>
          </div>
          <p className="text-gray-700 mb-6">
            If you are looking to develop software as per your business
            requirements, Space-O Technologies is the right choice for you. We
            have a track record of serving 1200+ clients including Fortune 500
            giants to top brands like Nike and Glovo (received 50M+ downloads).
            Whether you want custom software for scalability or competitive
            advantage – we can help you.
          </p>
          <p className="text-gray-700 mb-6">
            For more than a decade, we’ve been the trusted software partner for
            industries ranging from healthcare and eCommerce to transportation
            and education. Having a team of 140+ skilled software developers –
            well-versed in cloud technologies, microservices architecture, and
            DevOps, we can meet your advanced technical needs.
          </p>
          <p className="text-gray-700 mb-6">
            From product conception to software deployment, you can rely on us
            for your custom software development needs. Let’s talk to discuss
            your idea.
          </p>
        </div>
        <div className="md:w-5/12 w-full px-4 text-center flex-none max-w-[41.666667%] relative min-h-[1px] homen_form">
          <div className="bg-white p-8 rounded-[25px] shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-[#e23c3c47] relative homen_form">
            <h3 className="text-xl font-bold mb-4">Talk to Our Experts Now</h3>
            <p className="text-gray-700 mb-4">
              Validate your idea with the field expert and clear all your
              doubts.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Phone*"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Write your message.*"
                className="w-full p-3 border border-gray-300 rounded h-24"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-500 text-white p-3 rounded font-bold"
              >
                Book Your Consultation Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TalkToExperts
