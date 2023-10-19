import React, { useEffect } from "react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { useState } from "react";
import { Select } from "@chakra-ui/react";
import { hours } from "../assets/constants";
function Calander() {
  const [date, setDate] = useState(new Date());
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [pickedHour, setPickedHour] = useState(currentHour);
  const [currentDay,setCurrentDay]=useState(new Date().toDateString().split(' ')[2]);
  const [filteredHours,setFilteredHours]=useState(hours);
  useEffect(()=>{
   if(Number.parseInt(currentDay)===Number.parseInt(date.toDateString().split(' ')[2])){
    setFilteredHours(hours.filter(hour=>currentHour < Number.parseInt(hour)))
   }else setFilteredHours(hours);
  },[date])
  return (
    <>
      <SingleDatepicker
        name="date-input"
        date={date}
        onDateChange={setDate}
        propsConfigs={{
          dateNavBtnProps: {
            colorScheme: "teal",
            variant: "outline",
          },
          dayOfMonthBtnProps: {
            defaultBtnProps: {
              borderColor: "red.300",
              _hover: {
                background: "gold",
              },
            },
            isInRangeBtnProps: {
              color: "yellow",
            },
            selectedBtnProps: {
              background: "teal",
              color: "white",
            },
            todayBtnProps: {
              colorScheme: "teal",
              variant: "outline",
            },
          },
          inputProps: {
            size: "md",
          },
          popoverCompProps: {
            popoverContentProps: {
              background: "#fefefe",
              color: "teal",
            },
          },
          calendarPanelProps: {
            wrapperProps: {
              borderColor: "teal",
            },
            contentProps: {
              borderWidth: 0,
            },
            headerProps: {
              padding: "5px",
            },
            dividerProps: {
              display: "none",
            },
          },
          weekdayLabelProps: {
            fontWeight: "normal",
          },
          dateHeadingProps: {
            fontWeight: "semibold",
          },
        }}
      />
      <Select
        w={"20%"}
        placeholder="Select Hour"
        onChange={(e) =>
          setPickedHour(
            (Number.parseInt(e.target.value)) * 3600000
          )
        }
      >
        {filteredHours.map((hour) =><option key={hour} value={Number.parseInt(hour)}>{hour}</option>)}

      </Select>
    </>
  );
}

export default Calander;
