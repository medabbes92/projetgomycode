import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search"; // Import de l'icône de recherche
import "./NvBarProduct.css";

const NvBarProduct = ({ handleCat, handleSearch, text, handleText }) => {
  return (
    <div>
      <section className="input-section">
        <div>
          <form
            action=""
            style={{ display: "flex", justifyContent: "space-around" }}
            onSubmit={(e) => handleSearch(text, e)}
          >
            <SearchIcon className="search-icon" /> {/* Icône de loupe */}
            <input
              type="text"
              value={text}
              onChange={(e) => handleText(e)}
              style={{
                width: "250px",
                height: "38px",
                borderRadius: "5px",
                backgroundColor: "transparent",
                border: " gray solid 0.1px",
              }}
            />
            <Stack spacing={2} direction="row">
              <Button
                className={text ? "search-button active" : "search-button"} // Ajouter la classe "active" si le champ de recherche n'est pas vide
                variant="contained"
                style={{
                  textTransform: "capitalize",
                  marginLeft: "0px",
                  backgroundColor: "transparent",
                  border: " gray solid 0.1px",
                  color: "black",
                }}
                type="submit"
              >
                Rechercher
              </Button>
            </Stack>
          </form>
        </div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
            <InputLabel>Categorie</InputLabel>
            <Select label="Category" onChange={(e) => handleCat(e.target.value)}>
              <MenuItem value="all">Produits</MenuItem>
              <MenuItem value="irrigation">Irrigation</MenuItem>
              <MenuItem value="engrais">Engrais & Pesticides</MenuItem>
              <MenuItem value="machinisme">Machinisme</MenuItem>
            </Select>
          </FormControl>
        </div>
      </section>
    </div>
  );
};

export default NvBarProduct;
