import SearchInput from "./SearchInput";
import ListBox from "./ListBox";
function SearchBox() {
  const transformData = (data) => data.results;

  return (
    <div>
      <SearchInput
        id="personName"
        name="personName"
        label="Enter Person Name"
        placeholder="Enter you fav char"
        autoComplete={true}
        maxItems={5}
        styles={{ label: "", input: "" }}
        debounceWait={400}
        listBox={(items) => <ListBox items={items} />}
        noItemMessage={() => <div>Sorry No items found</div>}
        errorMessage={() => <div>Something went wrong</div>}
        transformData={transformData}
      />
    </div>
  );
}

export default SearchBox;
