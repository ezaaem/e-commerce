export default function Page() {
  return (
    <div className="w-4/5  m-auto pb-10 my-16">
      <h2 className="mb-16">
        <span className="text-slate-400">Home / </span>
        <span>Contact</span>{" "}
      </h2>
      <div className="flex ml-2 h-[28rem] gap-14 ">
        <div className="shadow-md p-10 w-80  rounded-sm">
          <div className="border-b-2	">
            <h1 className="flex gap-3 font-semibold items-center ">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#DB4444" />
                <path
                  d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Call To Us
            </h1>
            <p className="text-xs py-4">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-xs pb-10 ">Phone: +8801611112222</p>
          </div>
          <div className="pt-10">
            {" "}
            <h1 className="flex gap-3 font-semibold  items-center ">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#DB4444" />
                <path
                  d="M10 13L20 20L30 13M10 27H30V13H10V27Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Write To US
            </h1>
            <p className="text-xs py-4">
              Fill out our form and we will contact you within 24 hours.{" "}
            </p>
            <p className="text-xs pb-4">Emails: customer@exclusive.com</p>
            <p className="text-xs  ">Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className=" w-[50rem]  p-10 bg-white shadow-md rounded-sm">
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border  rounded-sm bg-gray-100  focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="phone"
                  placeholder="Your Phone"
                  className="w-full px-4 py-2 border bg-gray-100  rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
            </div>
            <div>
              <textarea
                id="message"
                placeholder="Your Message"
                className="w-full px-4 py-2 border  rounded-sm bg-gray-100  focus:outline-none focus:ring-2 focus:ring-red-500"
                rows="8"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-2 w-52 h-14 bg-red-500 text-white font-medium rounded-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
