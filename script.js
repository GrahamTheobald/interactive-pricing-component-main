/* - 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month */
const PRICE_MAP = {
    '10K': 8,
    '50K': 12,
    '100K': 16,
    '500K': 24,
    '1M': 36,
}
let perYear = false

const slider = document.querySelector(".main__slider-slider")
const views = document.querySelector(".main__views-amount")
const cost = document.querySelector(".main__cost_c")
const toggle = document.querySelector(".main__billing__toggle")
const bit = toggle.querySelector(".bit")


slider.addEventListener("input", ()=> {
    render(slider.value)
})

toggle.addEventListener("click", ()=> {
    perYear = !perYear
    render(slider.value)
    bit.classList.toggle("tog")
})

function render(value) {
    const key = calibrate(value)
    views.innerText = key + ' '
    const cost_ = perYear? PRICE_MAP[key] * 0.75 : PRICE_MAP[key]
    cost.innerText = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', trailingZeroDisplay: "stripIfInteger",}).format(cost_)
}

function calibrate(value) {
    if (value <= 200) {
        return '10K'
    }
    else if (value <= 400) {
        return '50K'
    }
    else if (value <= 600) {
        return '100K'
    }
    else if (value <= 800) {
        return '500K'
    }
    else return '1M'
}