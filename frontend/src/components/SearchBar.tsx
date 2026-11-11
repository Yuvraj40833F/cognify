
type SearchBarProps={
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
}

function SearchBar({value, placeholder, onChange}: SearchBarProps){
    return(
         <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />            
    )
}
 export default SearchBar;