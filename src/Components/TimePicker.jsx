import React, { forwardRef, useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const DateTimePicker = forwardRef((props, ref) => {
  useEffect(() => {
    flatpickr(ref.current, {
      enableTime: true,
      noCalendar: false,
      dateFormat: "Y-m-d h:i K",
      time_24hr: false,
    });
  }, [ref]);

  return <input type="text" ref={ref} {...props} />;
});

export default DateTimePicker;
