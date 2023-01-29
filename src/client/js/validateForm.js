export function validateForm(content){
    
    // if one of fields is empty
    if(content.from == "" || content.to == "" || content.departDate == "" || content.returnDate == "") {
        return false;
    }
    
    return true;
}