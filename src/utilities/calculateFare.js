export default  calculateFare = (falag_fall,sur_charge,distance,time,time_rate) =>{
const timeInMin = 0.0166667
const distance_in_km = distance * 0.001
const price_per_km = time_rate * timeInMin
const price_per_min = distance_rate * distance_in_km
const totalFare = (flag_fall *  price_per_km * price_per_min + booking_fee) * sur_charge
math.round(totalFare)

}