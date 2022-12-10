const pictures = document.querySelectorAll('.item')

pictures.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus()
        item.classList.add('selected')
    })
})

removeFocus = () => {
    pictures.forEach(item => {
        item.classList.remove('selected')
    })
}

function countDown() {
    const beginTour = new Date("Jule 10, 2023 00:00")
    //const beginTour = new Date("September 15, 2022 18:00")
    const nowDay = new Date()
    const diff = beginTour - nowDay

    const msInSecond = 1000
    const msInMinute = 60 * 1000
    const msInHour = 60 * 60 * 1000
    const msInDay = 24 * 60 * 60 * 1000

    const displayDay = Math.floor(diff/msInDay)
    document.querySelector(".days").textContent = displayDay

    const displayHours = Math.floor((diff%msInDay)/msInHour)
    document.querySelector(".hours").textContent = displayHours

    const displayMinutes = Math.floor((diff%msInHour)/msInMinute)
    document.querySelector(".minutes").textContent = displayMinutes

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond)
    document.querySelector(".seconds").textContent = displaySecond

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0
        document.querySelector(".hours").textContent = 0
        document.querySelector(".minutes").textContent = 0
        document.querySelector(".seconds").textContent = 0
        clearInterval(timeID)
        happyDay()
    }
}

let timeID = setInterval(countDown, 1000)

function happyDay() {
    const tourBegin = document.querySelector(".nearTourText")
    tourBegin.textContent = "The tour has begun!"
    tourBegin.classList.add("tourBeginColor")

    const period = document.querySelectorAll(".block")
    period.forEach(item => {
        item.querySelector(".blockName").classList.add("periodColor")
        item.querySelector(".days, .hours, .minutes, .seconds").classList.add("periodColor")
    })
}
