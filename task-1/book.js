function isBookApplicable(searchString) {

  // Normalize the search string: trim whitespace and convert to lowercase
    const normalizedSearch = searchString.trim().toLowerCase();
    
    // Define the book title and convert to lowercase
    const bookTitle = "The fundamentals of JavaScript".toLowerCase();
    
    // Check if the book title contains the search string
    return bookTitle.includes(normalizedSearch);
} 

// Test 
console.log(isBookApplicable("javascript"));
console.log(isBookApplicable("javascript "));
console.log(isBookApplicable("python"));
console.log(isBookApplicable("JavaScript"));
console.log(isBookApplicable("JAVASCRIPT"));


