import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

export default function GAutocomplete() {
  const [options, setOptions] = React.useState([]);
  // const loading = open && options.length === 0;
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    const url = `https://recs.sachtrang.com/autoComplete?command=get&q=${inputValue}`;
    fetch(url)
      .then((rs) => rs.json())
      .then((v) => {
        var [_, _, _, suggestions] = v;
        var smt = Object.values(suggestions ?? {}).map((name) => {
          return name
        })
        setOptions(smt)
      })
      .catch(error => console.error('Error: ', error));
  }, [inputValue])

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 600 }}
      filterOptions={(options, state) => options}
      onChange={(event, newValue) => {
        event.preventDefault();
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        event.preventDefault();
        setInputValue(newInputValue);
      }}
      isOptionEqualToValue={(option, value) => {
        return option === value
      }}
      getOptionLabel={(option) => {
        return option || "";
      }}
      options={options}
      // loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="G-Autocomplete"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {/* {loading
                  ? <CircularProgress color="inherit" size={20} />
                  : null} */}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
