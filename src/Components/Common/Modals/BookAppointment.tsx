import ThemeButton from "@/Components/ui/Button/ThemeButton";

const BookAppointment = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Select Date and Time</h2>
      {/* Appointment Type */}
      <div className="flex gap-4 mb-4">
        <button className="flex-1 border rounded-lg p-4 flex flex-col items-center">
          <span className="mb-2">🎥</span>
          Video call
          <br />
          $20
        </button>
        <button className="flex-1 border rounded-lg p-4 flex flex-col items-center bg-primary text-white">
          <span className="mb-2">👥</span>
          In-person
          <br />
          $20
        </button>
      </div>
      {/* Reason for Visit */}
      <select className="w-full mb-4 border rounded-lg p-2">
        <option>Follow up visit</option>
        <option>Consultation</option>
        <option>Routine Checkup</option>
      </select>
      {/* Appointment For */}
      <select className="w-full mb-4 border rounded-lg p-2">
        <option>Family Members</option>
        <option>Self</option>
      </select>
      {/* Select Date */}

      {/* Select Time */}
      <div className="mb-4 grid grid-cols-3 gap-2">
        <button
          className="bg-gray-200 rounded px-2 py-1 text-gray-400"
          disabled
        >
          08:00 AM
        </button>
        <button className="bg-gray-100 rounded px-2 py-1">09:00 AM</button>
        <button className="bg-gray-100 rounded px-2 py-1">10:00 AM</button>
        <button className="bg-gray-100 rounded px-2 py-1">11:00 AM</button>
        <button className="bg-[#e6e8f3] rounded px-2 py-1 font-bold">
          03:00 PM
        </button>
        <button className="bg-gray-100 rounded px-2 py-1">05:00 PM</button>
      </div>
      <ThemeButton variant="primary">Book an Appointment &rarr;</ThemeButton>
    </div>
  );
};

export default BookAppointment;
