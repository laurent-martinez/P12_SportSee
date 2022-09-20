/**
 *@class to modelise personals user datas from an array of datas
 *@param {array} array of datas from the api
 *
 */
class UserDataFormater {
   constructor(userData) {
      this.userData = userData
      this.firstName = userData.firstName
   }
}
export default UserDataFormater
