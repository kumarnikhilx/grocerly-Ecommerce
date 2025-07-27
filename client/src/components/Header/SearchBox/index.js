
import { CiSearch } from "react-icons/ci";
import Button from "@mui/material/Button";
function SearchBox() {
  return (
    <>
      <div className="headerSearch  ml-3 mr-2">
                      <input
                        type="text"
                        name="item-name"
                        placeholder="Search for products..."
                      />
                      <Button>
                        <CiSearch />
                      </Button>
                    </div>
    </>
  )
}

export default SearchBox
