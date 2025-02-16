export const formatDate = (dateString) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    
    // Check if date is valid
    if (isNaN(date.getTime())) return dateString;

    // Format options
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };

    try {
        return date.toLocaleDateString('nl-NL', options);
    } catch (error) {
        console.error('Error formatting date:', error);
        return dateString;
    }
}; 