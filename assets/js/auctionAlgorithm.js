export function nextPrice(currentPrice, maxBid) {
    console.log(maxBid);
    return Math.min(currentPrice + 0.1 * maxBid, maxBid);
}

