export const pushRecord = (userProfile) => {
  const userProfileList = getUserProfile();
  userProfileList.push(userProfile);
  localStorage.setItem("userProfile", JSON.stringify(userProfileList));
};

export const findMatchingRecord = (id) => {
  const userProfileList = getUserProfile();
  return userProfileList.filter((item) => item.id === id);
};

export const filterList = (id) => {
  const userProfileList = getUserProfile();
  return userProfileList.filter((item) => item.id !== id);
};

export const getUserProfile = () => {
  const userProfileList = JSON.parse(localStorage.getItem("userProfile"));
  return userProfileList && userProfileList.length > 0 ? userProfileList : [];
};

export const addOrEditProfile = (userProfile) => {
  const userProfileList = getUserProfile();
  if (userProfileList.length) {
    const recordToEdit = findMatchingRecord(userProfile.id);
    if (recordToEdit) {
      const filteredList = filterList(userProfile.id);
      const updatedList = [...filteredList, userProfile];
      localStorage.setItem("userProfile", JSON.stringify(updatedList));
    } else {
      pushRecord(userProfile);
    }
  } else {
    pushRecord(userProfile);
  }
};

export const deleteUserProfile = (recordId) => {
  const updatedList = filterList(recordId);
  localStorage.setItem("userProfile", JSON.stringify(updatedList));
};
