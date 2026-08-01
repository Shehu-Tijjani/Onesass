const userImages = async (num) => {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?results=${num}&gender=male`,
    );
    const data = await response.json();
    return data.results.map((result) => result.picture.large);
  } catch (error) {
    console.error("Error fetching user image:", error);
    return "";
  }
};

export default userImages;
