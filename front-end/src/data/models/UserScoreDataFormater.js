/**
 *@class to modelise the score of the user from an array of datas
 *@param {array} array of datas from the api
 *
 */

class UserScoreFormater {
   constructor(userScore) {
      this.userScore = userScore
      this.score = userScore * 100
   }
}
export default UserScoreFormater
