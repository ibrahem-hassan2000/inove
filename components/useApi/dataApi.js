
export const getCourses = async () => { 
    try {
      const res =  fetch(
       "https://bigramyweb.inovaeg.com/api/v2/storefront/products",
        {
          method: "GET",
        }
      )
      console.log(res.json());
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("Error in Add New Category (service) =>", error);
    }
  };
  