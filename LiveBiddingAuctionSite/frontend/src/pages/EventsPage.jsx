import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./PagesCss/Events.css";
import NavSpace from "../components/NavSpace";
import { useNavigate } from "react-router-dom";

const EventsPage = () => {
  const navigate = useNavigate();

  const handleDivClick = (event) => {
    // Perform any additional logic before navigation if needed
    // For example, you can extract data from the event object

    // Navigate to the new page with the event id as a parameter
    navigate(`/EventPage/${event._id}`);
  };

  // Sample data for event categories and events
  const eventCategories = [
    { id: 1, name: "All" },
    { id: 2, name: "Art" },
    { id: 3, name: "Real-Estate" },
    { id: 4, name: "Antiques" },
    { id: 5, name: "Cars" },
    { id: 6, name: "Jewelry" },
    // Add more event categories as needed
  ];

  const [events, setEvents] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest"); // Default sorting option

  // Ref for all events section
  const allEventsRef = useRef(null);

  // Function to scroll to all events section
  const scrollToAllEvents = () => {
    allEventsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to sort events based on selected sorting option
  const sortEvents = (events) => {
    switch (sortBy) {
      case "newest":
        return events.sort((a, b) => new Date(b.date) - new Date(a.date));
      case "oldest":
        return events.sort((a, b) => new Date(a.date) - new Date(b.date));
      case "highestRated":
        return events.sort((a, b) => b.rating - a.rating);
      case "lowestRated":
        return events.sort((a, b) => a.rating - b.rating);
      default:
        return events;
    }
  };

  const convertDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  function convertTime(time24) {
    const strTime24 = time24.toString();
    const hours24 = parseInt(strTime24.substring(0, 2));
    const minutes = strTime24.substring(2);
    const ampm = hours24 >= 12 ? "PM" : "AM";
    let hours12 = hours24 % 12;
    hours12 = hours12 || 12;
    const time12 = hours12 + ":" + minutes + " " + ampm;
    return time12;
  }

  function getDuration(startTime, duration) {
    return `${convertTime(startTime)} - ${convertTime(startTime + duration)}`;
  }

  const GetRequest = async () => {
    const response = await fetch("http://localhost:3000/event", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setEvents(data);
  };

  useEffect(
    function () {
      GetRequest();
    },
    [setEvents]
  );

  return (
    <div>
      <NavSpace />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          {/* Navbar */}
          <nav className="mt-[64px]  flex justify-between items-center mb-8 eventsNavBar">
            <div className="ml-4">
              <h2 className="font-semibold text-4xl text-gray-800">Events</h2>
            </div>
            <div className="flex items-center space-x-4 mr-4 mt-4">
              <div className="relative">
                <div className="">
                  <Link
                    to="/Bidding"
                    className="bg-primary text-white px-4 py-2 rounded-md h-10 mr-4"
                  >
                    Live Bidding
                  </Link>

                  <select
                    className="border p-2 mr-2 mb-2 appearance-none"
                    id="Filter"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {eventCategories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12l-6-6h12l-6 6z" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <div>
                  <select
                    className="border p-2 mr-2 mb-2 appearance-none"
                    value={sortBy}
                    id="Sort"
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="highestRated">Highest Rated</option>
                    <option value="lowestRated">Lowest Rated</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-6h12l-6 6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Event Categories */}
          <div div className="mb-8">
            {eventCategories.map((category) => (
              <div key={category.id}>
                {selectedCategory === "All" ||
                selectedCategory === category.name ? (
                  <div>
                    <h3 className="text-2xl mt-4 font-semibold text-gray-800 mb-4">
                      {category.name}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {sortEvents(
                        events.filter((event) =>
                          category.name === "All"
                            ? true
                            : event.category === category.name
                        )
                      ).map((event) => (
                        <div
                          key={event.id}
                          className="bg-white rounded-lg shadow-md overflow-hidden"
                          onClick={() => handleDivClick(event)}
                        >
                          <div
                            className={`flex flex-col justify-between items-center px-4 py-3 bg-gray-200 ${event.category}`}
                          >
                            <div className="text-lg font-semibold text-gray-800">
                              {event.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {convertDate(event.date)}
                            </div>
                            <div className="text-sm text-gray-600">
                              {getDuration(event.startTime, event.duration)}
                            </div>
                          </div>
                          <div className="px-4 py-3">
                            <p className="text-gray-700">{event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          {/* Ref for all events section */}
          <div ref={allEventsRef} />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
