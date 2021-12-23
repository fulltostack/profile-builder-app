export const AddUserProfile = (userProfile) =>{
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
}