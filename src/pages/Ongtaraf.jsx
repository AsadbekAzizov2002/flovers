// import * as React from "react";
// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";

// export default function LabTabs() {
//   const [value, setValue] = React.useState("1");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);

//     const fetchData = async () => {
//       const res = await axios({
//         method: "Get",
//         url: "http://localhost:3000/flowers",
//       });
//       console.log(res);
//     };
//     useEffect(() => {
//       fetchData();
//     }, []);
//   };

//   return (
//     <Box sx={{ width: "100%", typography: "body1" }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="Item One" value="1" />
//             <Tab label="Item Two" value="2" />
//             <Tab label="Item Three" value="3" />
//           </TabList>
//         </Box>
//         <TabPanel value="1"></TabPanel>
//         <TabPanel value="2">2</TabPanel>
//         <TabPanel value="3">3</TabPanel>
//       </TabContext>
//     </Box>
//   );
// }

// import { Axios } from "axios";
// import React, { useEffect } from "react";

// const Ongtaraf = () => {
//   const fetchData = async () => {
//     const res = await Axios({
//       method: "Get",
//       url: "http://localhost:7774/flowers",
//     });
//     console.log(res);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return <div>Ongtaraf</div>;
// };

// export default Ongtaraf;

// import React, { useEffect, useState } from "react";

// const Ongtaraf = () => {
//   const [flover, setFlove] = useState([]);
//   console.log(flover);
//   useEffect(() => {
//     fetch("http://localhost:7774/flowers")
//       .then((res) => res.json())
//       .then((data) => setFlove(data));
//   }, []);
//   return (
//     <div>
//       <div className=" flex ">
//         <h2 className=" font-semibold active:text-green-500 hover:text-green-300">All Plants</h2>
//         <h2 className=" font-semibold ml-[37px] mr-[40px] mb-[31px] active:text-green-500 hover:text-green-300">New Arrivals</h2>
//         <h2 className=" font-semibold active:text-green-500 hover:text-green-300">Sale</h2>
//       </div>
//       <div className="      w-[800px] grid grid-cols-4 gap-[41px] ml-[54px]">
//         {flover.map((flow) => (
//           <div className="">
//             <img className=" h-[250px] w-[250px]" src={flow.image_url} alt="" />
//             <h2>{flow.common_name}</h2>
//             <h2 className=" font-bold text-green-500">${flow.id}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Ongtaraf;

import React, { useEffect, useState } from "react";

const Ongtaraf = () => {
  const [flowers, setFlowers] = useState([]);
  console.log(flowers);
  useEffect(() => {
    fetch("http://localhost:7774/flowers")
      .then((res) => res.json())
      .then((data) => setFlowers(data.slice(0, 9))); // Api hisobidan 9 ta rasmni olib olamiz
  }, []);
  return (
    <div>
      <div className="flex">
        <h2 className="font-semibold active:text-green-500 hover:text-green-300">
          All Plants
        </h2>
        <h2 className="font-semibold ml-[37px] mr-[40px] mb-[31px] active:text-green-500 hover:text-green-300">
          New Arrivals
        </h2>
        <h2 className="font-semibold active:text-green-500 hover:text-green-300">
          Sale
        </h2>
      </div>
      <div className="w-[800px] grid grid-cols-3 gap-[41px] ml-[54px]">
        {flowers.map((flower) => (
          <div key={flower.id} className="">
            <img
              className="h-[250px] w-[250px]"
              src={flower.image_url}
              alt={flower.common_name}
            />
            <h2>{flower.common_name}</h2>
            <h2 className="font-bold text-green-500">${flower.id}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ongtaraf;
