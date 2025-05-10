
export const getReviews = async () => {
    try {
      const response = await fetch("https://en33e9gbnl.execute-api.eu-west-1.amazonaws.com/dev/reviews", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch reviews. Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("Fetched reviews:", result);
      return result.data; // Assuming the response is an array of reviews
    } catch (error) {
      console.error("Error fetching reviews:", error);
      throw error;
    }
  };


  export const postReview = async (review:{}) => {
    try {
      console.log("Sending review to API:", review); // Debugging log
      const response = await fetch("https://en33e9gbnl.execute-api.eu-west-1.amazonaws.com/dev/reviews", {
        method: "POST",
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to post review. Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("Review successfully posted:", result);
      return result;
    } catch (error) {
      console.error("Error posting review:", error);
      throw error;
    }
  };