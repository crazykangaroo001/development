import "./App.css";
import { useState } from "react";
import clubData from "./assets/clubs-data.json";
import { Item } from "./components/Item";
import {
  Checkbox,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Divider,
} from "@mui/material";
import "typeface-bebas-neue";
import Aggregator from "./components/DividerWithText";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
clubData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */
function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [liked, setLike] = useState([]);
  const [totalTime, setTime] = useState(0);
  const [sortBy, setSort] = useState("");
  const [type, setType] = useState("");
  const [day, setDay] = useState("");
  const [items, setItems] = useState(clubData);

  const updateTime = (time) => {
    setTime(totalTime + time);
  };

  const updateFavorites = (name, time) => {
    if (time < 0) {
      let removed = liked.filter((ele) => ele != name);
      setLike(removed);
    } else {
      setLike([...liked, name]);
    }
    updateTime(time);
  };

  const filterChangeHandler = (event) => {
    setType(event.target.value);
    let filtered = clubData;
    if (day !== "All") {
      filtered = filtered.filter((item) => item.meeting.includes(day));
    }
    if (event.target.value !== "All") {
      filtered = filtered.filter((item) => item.type == event.target.value);
    }
    if (sortBy != "") {
      filtered = filtered.sort(sortByVal(sortBy));
    }
    setItems(filtered);
  };

  const dayChangeHandler = (event) => {
    setDay(event.target.value);
    let filtered = clubData;
    if (type !== "All") {
      filtered = filtered.filter((item) => item.type.includes(type));
    }
    if (event.target.value !== "All") {
      filtered = filtered.filter((item) =>
        item.meeting.includes(event.target.value)
      );
    }
    if (sortBy != "") {
      filtered = filtered.sort(sortByVal(sortBy));
    }
    setItems(filtered);
  };

  const sortChangeHandler = (event) => {
    setSort(event.target.value);
    let res = items;
    res = [...res].sort(sortByVal(event.target.value));
    console.log(res);
    setItems(res);
  };

  const sortByVal = (value) => {
    switch (value) {
      case "Name (A - Z)":
        return (a, b) => (a.name > b.name ? 1 : -1);
      case "Name (Z - A)":
        return (a, b) => (a.name < b.name ? 1 : -1);
      case "Time (Low - High)":
        return (a, b) => (a.time > b.time ? 1 : -1);
      case "Time (High - Low)":
        return (a, b) => (a.time < b.time ? 1 : -1);
    }
  };

  return (
    <div className="App">
      <Typography variant="h2" fontWeight={700} mt={7} mb={7}>
        Clubs @ Brown
      </Typography>

      <div className="filters">
        <div className="filterParams">
          <label id="filterLabel">Filter by:</label>
          <div className="filter">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Day</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={day}
                label="day"
                onChange={dayChangeHandler}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Monday"}>Monday</MenuItem>
                <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                <MenuItem value={"Thursday"}>Thursday</MenuItem>
                <MenuItem value={"Friday"}>Friday</MenuItem>
                <MenuItem value={"Saturday"}>Saturday</MenuItem>
                <MenuItem value={"Sunday"}>Sunday</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="filter">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="filter"
                onChange={filterChangeHandler}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Service"}>Service</MenuItem>
                <MenuItem value={"Academic & Professional"}>
                  Academic & Professional
                </MenuItem>
                <MenuItem value={"Political"}>Political</MenuItem>
                <MenuItem value={"A Cappella"}>A Cappella</MenuItem>
                <MenuItem value={"News & Publication"}>
                  News & Publication
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="filter">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortBy}
              label="Sort"
              onChange={sortChangeHandler}
            >
              <MenuItem value={"Time (Low - High)"}>Time (Low - High)</MenuItem>
              <MenuItem value={"Time (High - Low)"}>Time (High - Low)</MenuItem>
              <MenuItem value={"Name (A - Z)"}>Name (A - Z)</MenuItem>
              <MenuItem value={"Name (Z - A)"}>Name (Z - A)</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="itemContainer">
        {items.map((item) => (
          <div className="ClubItem">
            <Item
              name={item.name}
              description={item.description}
              image={item.image}
              time={item.time}
              type={item.type}
              meeting={item.meeting}
              updateFavorites={updateFavorites}
            />
          </div>
        ))}
        <div className="ClubItem"></div>
      </div>
      <Aggregator children={"Favorited Clubs"} />
      <div className="summary">
        <p>
          <b>Clubs you liked: </b>
          {liked.join(", ")}
        </p>
        <p>
          <b>Total time commitment: </b>
          {totalTime} hours
        </p>
      </div>
    </div>
  );
}

export default App;
