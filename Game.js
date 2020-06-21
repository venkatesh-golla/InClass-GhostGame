const GameState = Object.freeze({
    WELCOMING: Symbol("welcoming"),
    MainOptions: Symbol("mainOptions"),
    Restaurant: Symbol("restaurant"),
    Movie: Symbol("movie"),
    College: Symbol("college"),
    Hospital: Symbol("hospital"),
    InquiryEnd: Symbol("end"),
    GameStart: Symbol("gamestart"),
    PlayAgain:Symbol("playagain"),
    EndGame: Symbol("endgame")
});
const gameString='\nWould like to play a small quiz about capital cities in Canada??\nIf yes please type \'Yes\' or else type \'NO\''
const regionString="Please enter an area from the list. \nLaurelwood\nWestmount\nDoon\nUniversityAvenue\nBoardwalk\nFairway\nJacobs"
const questions = [
    ['Canada', 'ottawa'],
    ['Newfoundland and Labrador', 'st.John\'s'],
    ['Nova Scotia', 'halifax'],
    ['New Brunswick', 'fredericton'],
    ['Prince Edward Island', 'charlottetown'],
    ['Quebec', 'quebec'],
    ['Ontario', 'toronto'],
    ['Manitoba', 'winnipeg'],
    ['Saskatchewan', 'regina'],
    ['Alberta', 'edmonton'],
    ['British Columbia', 'victoria'],
    ['Nunavut', 'iqaluit'],
    ['Northwest Territories', 'yellowknife'],
    ['Yukon', 'whitehorse']
]

module.exports = class Game {
    constructor() {
        this.curState = GameState.WELCOMING
        this.currentCount = 0
        this.numberOfQuestions = Math.floor(Math.random() * 10+2)
        this.currentScore = 0
        this.pos = 0
    }
    makeAMove(sInput) {
        let sReply = ""
        const userInput = sInput.toLowerCase()
        switch (this.curState) {
            case GameState.WELCOMING:
                sReply = "Welcome to Kitchener and Waterloo Assistance. You can know about \nRestaurant \nMovies \nColleges \nHospitals. \nPlease choose a category from the available categories and type it"
                this.curState = GameState.MainOptions
                break
            case GameState.MainOptions:
                if (userInput.match("restaurant") || userInput.match("restaurants")) {
                    sReply = regionString
                    this.curState = GameState.Restaurant
                } else if (userInput.match("movie") || userInput.match("movies")) {
                    sReply = regionString
                    this.curState = GameState.Movie
                } else if (userInput.match("college") || userInput.match("colleges")) {
                    sReply = regionString
                    this.curState = GameState.College
                } else if (userInput.match("hospital") || userInput.match("hospitals")) {
                    sReply =regionString
                    this.curState = GameState.Hospital
                } else {
                    sReply = "Please enter valid option available.\nYou can know about \nRestaurant \nMovies \nColleges \nHospitals. \nPlease choose a category from the available categories and type it"
                }
                break
            case GameState.Restaurant:
                if (userInput.match("laurelwood")) {
                    sReply = "List of Restaurants:\n1. Wild Sushi\n2. Java Garden\n3. Big Bite Pizza\n4. Wild Wings"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("westmount")) {
                    sReply = "List of Restaurants:\n1. Raja Fine Indian Cuisine\n2. Janet Lynn's Bistro\n3. Wilhelm's Cafe\n4. Arabella Park Beer Bar"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("doon")) {
                    sReply = "List of Restaurants:\n1. Country Boy Family Restaurant\n2. Moxie's Grill and Bar\n3. Jack Astro's Bar and Grill"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("universityave")) {
                    sReply = "List of Restaurants:\n1. Tandoori Express\n2. Angel's\n3. Saj Time\n4. Chic Pea Pita and Grill\n5. Bhima's Warung\n6. Exotica"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("boardwalk")) {
                    sReply = "List of Restaurants:\n1. Meet Point\n2. Montana's\n3. MileStones\n4. Al Madina"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("fairway")) {
                    sReply = "List of Restaurants:\n1. Subway\n2. Burger King\n3. Royal Indian Buffet"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("jacob")) {
                    sReply = "List of Restaurants: \n1. Arby's\n2. St. George Restaurant\n3. The Crazy Canuck"+gameString
                    this.curState = GameState.InquiryEnd
                } else {
                    sReply = "Please type a valid option.\nLaurelwood\nWestmount\nDoon\nUniversityAvenue\Boardwalk\nFairway\nJacobs"
                }
                break
            case GameState.Movie:
                if (userInput.match("laurelwood")) {
                    sReply = "Sorry there are no theatres to display in this region"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("westmount")) {
                    sReply = "List of Theatres:\n1. Princess Twin Cinemas"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("doon")) {
                    sReply = "List of Theatres:\n1. Imagine Cinemas"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("universityave")) {
                    sReply = "List of Theatres:\n1. Apollo Cinemas"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("boardwalk")) {
                    sReply = "List of Theatres:\n1. Landmark Cinemas"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("fairway")) {
                    sReply = "List of Theatres:\n1. Landmark Cinemas\n2. Cineplex Movies"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("jacob")) {
                    sReply = "Sorry there are no theatres available in this region"+gameString
                    this.curState = GameState.InquiryEnd
                } else {
                    sReply = "Please type a valid option.\nLaurelwood\nWestmount\nDoon\nUniversityAvenue\Boardwalk\nFairway\nJacobs"
                }
                break
            case GameState.College:
                if (userInput.match("laurelwood")) {
                    sReply = "List of Colleges:\n1. Laurelwood Public School\n2. St Nicholas Catholic School"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("westmount")) {
                    sReply = "List of Colleges:\n1. Renison University College\n2. St.Paul's University College\n3. Conred Grabel College"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("doon")) {
                    sReply = "List of Colleges:\n1. Conestoga College\n2. Emmanuel Bible College\n3. Summit College"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("universityave")) {
                    sReply = "List of Colleges:\n1. Conestoga College\n2. University of Waterloo\n3. Wilfred Laurier University\n4. Martin Luther King University College\n5. Gina's College"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("boardwalk")) {
                    sReply = "List of Colleges:\n1. Resurrection Catholic Secondary School\n2. Grand River Secondary School\n3. Kitchener-Waterloo Bilingual School"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("fairway")) {
                    sReply = "List of Colleges:\nLiaison College of Culinary and Arts"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("jacob")) {
                    sReply = "List of Colleges:\nConrad Grebel University College"+gameString
                    this.curState = GameState.InquiryEnd
                } else {
                    sReply = "Please type a valid option.\nLaurelwood\nWestmount\nDoon\nUniversityAvenue\Boardwalk\nFairway\nJacobs"
                }
                break

            case GameState.Hospital:
                if (userInput.match("laurelwood")) {
                    sReply = "List of Hospitals:\n1. Laurelwood Clinic"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("westmount")) {
                    sReply = "List of Hospitals: \n1. St. Mary's"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("doon")) {
                    sReply = "List of Hospitals:\n1. Tri City Hospitals"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("universityave")) {
                    sReply = "List of Hospitals:\n1. PCC Pain Care\n2. Grand River Hospitals\n3. Kaufman Building\n4. KARMA Hospitals"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("boardwalk")) {
                    sReply = "List of Hospitals: \n1. Westvale Health and wellness Center\n2. KW CardioPulmonary Center\n3. The Armoury"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("fairway")) {
                    sReply = "List of Hospitals:\n1. KingsDale\n2. Meadowcroft\n3. East Village Hospital"+gameString
                    this.curState = GameState.InquiryEnd
                } else if (userInput.match("jacob")) {
                    sReply = "List of Hospitals:\n1. Monarch House\n2. Oculys Health Informatics"+gameString
                    this.curState = GameState.InquiryEnd
                } else {
                    sReply = "Please enter a valid region.\nLaurelwood\nWestmount\nDoon\nUniversityAvenue\Boardwalk\nFairway\nJacobs"
                }
                break
            case GameState.InquiryEnd:
                if (userInput.match("yes")) {
                    this.curState = GameState.GameStart
                } else {
                    this.curState = GameState.WELCOMING
                    sReply = "Thank you for visiting"
                    break
                }
            case GameState.GameStart:
                if (this.currentCount === this.numberOfQuestions) {
                    if (userInput.match(questions[this.pos - 1][1].toLowerCase())) {
                        this.currentScore++
                    }
                    sReply = `Your score is ${this.currentScore}. Please enter GAME if you would like to play game again\nOR\nEnter anything to go to Inquiry `
                    this.curState = GameState.EndGame
                    this.currentCount = 0
                    this.numberOfQuestions = Math.floor(Math.random() * 10+2)
                    this.currentScore = 0
                    this.pos = 0
                    break
                }
                if (this.pos == 0) {
                    sReply = `What is the Capital of ${questions[this.pos][0]}?`
                    this.pos++
                    break
                }
                else {
                    if (userInput.match(questions[this.pos - 1][1].toLowerCase())) {
                        this.currentScore++
                    }
                    console.log(userInput,questions[this.pos - 1][1].toLowerCase())
                    console.log(this.currentScore+' Score')
                    sReply = `What is the Capital of ${questions[this.pos][0]}?`
                    this.pos++
                    this.currentCount++
                }
            break
            case GameState.EndGame:
                if(userInput.match("game")){
                    this.curState = GameState.GameStart
                    sReply='Please enter GAME or something again'
                    console.log(userInput.match('game')+" This is from endgame from if")
                }else{
                    this.curState = GameState.WELCOMING
                    sReply='Please enter welcome to go to Welcome chat'
                }
                break
        }
        return ([sReply])

    }
}