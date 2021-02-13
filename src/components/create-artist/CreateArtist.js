import { Button, Grid, MenuItem, Select, TextField, Typography } from "@material-ui/core";

export default function CreateArtist({ type }) {
  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="stretch"
    >
      <Typography variant="h1">
        Create artist
      </Typography>

      <Select
        value={ type == null ? "PERSON" : type }
      >
        <MenuItem value="PERSON">Person</MenuItem>
        <MenuItem value="BAND">Band</MenuItem>
      </Select>

      <TextField
        id="name"
        label="Artist name"
      />

      <Grid
        container
        justify="space-evenly"
      >
        <TextField
          id="longitude"
          label="Longitude"
        />

        <TextField
          id="latitude"
          label="Latitude"
        />
      </Grid>

      <Button
        variant="outlined"
        color="primary"
      >
          Create
      </Button>
    </Grid>
  );
}