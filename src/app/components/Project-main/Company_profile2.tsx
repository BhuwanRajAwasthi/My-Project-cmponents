export default function CompanyProfile2() {
    return (
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src="/cover-photo.jpg"
            alt="Cover Photo"
            className="w-full h-56 object-cover"
          />
          <div className="absolute top-4 left-4">
            <img
              src="/themisfit.jpg"
              alt="Company Logo"
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold">Your Company Name</h1>
          <p className="mt-4 text-gray-600">
            Your company description goes here. This should be a brief paragraph
            that provides an overview of what your company does, its mission, and
            any other relevant details.
          </p>
          <div className="flex items-center mt-6">
            <div className="flex-shrink-0">
              <img
                src="/location-icon.svg"
                alt="Location Icon"
                className="w-6 h-6"
              />
            </div>
            <div className="ml-2 text-gray-600">
              Your Company Address, City, State, Country
            </div>
          </div>
          <div className="flex items-center mt-2">
            <div className="flex-shrink-0">
              <img
                src="/phone-icon.svg"
                alt="Phone Icon"
                className="w-6 h-6"
              />
            </div>
            <div className="ml-2 text-gray-600">
              (123) 456-7890
            </div>
          </div>
          <div className="flex items-center mt-2">
            <div className="flex-shrink-0">
              <img
                src="/email-icon.svg"
                alt="Email Icon"
                className="w-6 h-6"
              />
            </div>
            <div className="ml-2 text-gray-600">
              your-company@example.com
            </div>
          </div>
        </div>
      </div>
    );
  }