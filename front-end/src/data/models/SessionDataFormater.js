class SessionDataFormater {
   constructor(session) {
      this.sessions = this.getDayFr(session.day)
      this.sessionsData = session.map((session, index) => ({
         ...session,
         sessionLength: session.sessionLength,
         day: this.sessions[index],
      }))
   }
   getDayFr() {
      const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
      return days
   }
}
export default SessionDataFormater
