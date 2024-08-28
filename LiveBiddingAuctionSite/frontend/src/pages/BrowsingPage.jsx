import React, { useState, useEffect } from "react";
import NavSpace from "../components/NavSpace";
import item1 from "../pages/images/artBackground.png";
import item2 from "../pages/images/antiquesBackground.png";
import item3 from "../pages/images/realEstateBackground.png";
import item4 from "../pages/images/carsBackground.png";
import item5 from "../pages/images/jewellaryBackground.png";
import { Link } from "react-router-dom";

const BrowsingPage = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Fetch items from the server
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/item");
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        const data = await response.json();
        // Combine fetched items with sample items

        setItems(data);
        setFilteredItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    // Filter and sort items
    let filtered = items.filter(
      (item) =>
        item?.name?.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "all" || item.category === selectedCategory)
    );

    switch (sortOption) {
      case "lowToHigh":
        filtered = filtered.sort((a, b) => a.startingPrice - b.startingPrice);
        break;
      case "highToLow":
        filtered = filtered.sort((a, b) => b.startingPrice - a.startingPrice);
        break;
      case "AtoZ":
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    setFilteredItems(filtered);
  }, [searchTerm, selectedCategory, sortOption, items]);

  const handleViewDetails = (itemId) => {
    const selectedItem = items.find((item) => item._id === itemId);
    setSelectedItem(selectedItem);
  };

  const getCurrentTime = () => {
    return Math.floor(Date.now() / 1000); // Current time in Unix timestamp format (seconds)
  };
  const getCurrentTimeInFormat = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    // Pad single-digit hours and minutes with leading zeros
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    // Combine hours and minutes to form the time representation
    return `${formattedHours}${formattedMinutes}`;
  };

  const calculateTimeStatus = (startTime, sold) => {
    const currentTime = getCurrentTimeInFormat();

    if (sold) {
      return "Closed";
    } else if (currentTime < startTime) {
      return "About To Commence";
    } else if (currentTime >= startTime && currentTime <= startTime + 10800) {
      return "Online";
    } else {
      return "Closed";
    }
  };
  return (
    <div>
      <NavSpace />
      <div className="container mx-auto mt-8 p-4">
        {/* <Link to="/AddItemForm" className='font-bold text-xl mx-20 border-4 bg-slate-200 p-2 round-xl'>Add Item</Link> */}
        <Link
          to="/AddItemForm"
          className=" inline-block bg-primary text-white px-4 py-2 rounded-md h-10 mr-4 mb-2"
        >
          Add Item
        </Link>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by item name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 mr-2"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 mr-2"
        >
          <option value="all">All Categories</option>
          <option value="art">Art</option>
          <option value="antiques">Antiques</option>
          <option value="realEstate">Real Estate</option>
          <option value="cars">Cars</option>
          <option value="jewelry">Jewelry</option>
        </select>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border p-2"
        >
          <option value="default">Default Sorting</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="AtoZ">A-Z</option>
        </select>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {filteredItems.map((item) => (
            <div
              key={item._id}
              className="border p-4 flex flex-col justify-between"
            >
              <div className="flex justify-center items-center w-[700px] md:w-[470px] lg:w-[340px] h-[390px] md:h-[260px] lg:h-[190px] overflow-hidden">
                <img
                  src={item.itemPic}
                  alt={item.name}
                  className="w-[90%] h-[90%] object-center object-contain mb-4"
                />
              </div>
              <h2 className="text-xl font-bold mt-2">{item.name}</h2>
              <p className="text-gray-400 p-2">{item.description}</p>
              <p className="text-gray-600 ml-0 pt-2 pb-2">
                <span className="text-zinc-800">Seller : </span>
                <span className="text-gray-600">{item.sellerName}</span>
              </p>
              <p className="text-gray-600 ml-0 pt-2 pb-2">
                <span className="text-zinc-800">Starting Price : </span>
                <span className="text-gray-600">{item.startingPrice}</span>
              </p>
              <p className="text-gray-600 ml-0 pt-2 pb-2">
                <span className="text-zinc-800">Item Status : </span>
                <span className="text-gray-600">
                  {calculateTimeStatus(item.startTime, item.sold)}
                </span>
              </p>
              <Link
                to="/Chat"
                className="text-center inline-block bg-primary text-white px-4 py-2 rounded-md my-2 h-10 mr-4 mb-2"
              >
                Chat With Seller
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowsingPage;
