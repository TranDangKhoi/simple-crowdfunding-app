import { debounce } from "lodash";
import { useState } from "react";

export default function useOnChange(timeout = 1000) {
  const [value, setValue] = useState(null);
  const onChange = debounce((e) => {
    setValue(e.target.value);
  }, timeout);
  return [value, onChange];
}
