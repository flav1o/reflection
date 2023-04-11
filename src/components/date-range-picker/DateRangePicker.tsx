import React, { useState } from "react";
import { Nullable } from "@/types";
import { Moment } from "moment";
import { DateChange } from "./DateRangePicker.types";
import { FocusedInputShape } from "react-dates";
import S from "./DateRangePicker.styles";
import { DateRangePicker } from "react-dates";

const RangeDatePicker = () => {
  const [startDate, setStartDate] = useState<Nullable<Moment>>(null);
  const [endDate, setEndDate] = useState<Nullable<Moment>>(null);
  const [focusedInput, setFocusedInput] =
    useState<Nullable<FocusedInputShape>>(null);

  const handleDatesChange = ({ startDate, endDate }: DateChange) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <S.DatePickerWrapper>
      <DateRangePicker
        startDate={startDate}
        startDateId="tata-start-date"
        endDate={endDate}
        endDateId="tata-end-date"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
        small
      />
    </S.DatePickerWrapper>
  );
};

export { RangeDatePicker };
