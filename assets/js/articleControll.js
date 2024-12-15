import { inWatchlist, allBids, user, currentPrice } from "./article.js";
import { nextPrice } from "./auctionAlgorithm.js";

let bidInput = document.getElementById('bidInput');
bidInput.value = bidInput.getAttribute('placeholder');

bidInput.addEventListener('input', function () {
    let bid = parseFloat(bidInput.value);
    if (bid < 0) {
        bidInput.value = 0;
    }
});

let bidButton = document.getElementById('bidButton');
bidButton.addEventListener('click', function () {
    let bid = parseFloat(bidInput.value);
    if (bid < 0) {
        bidInput.value = 0;
    }

    console.log("Bidding: " + bid);
    allBids.set(user, bid);

    let currentHighestBid = Math.max(...allBids.values());
    if (allBids.get(user) === currentHighestBid) {
        alert("You are the highest bidder!");
        updateCurrentPrice(nextPrice(currentPrice, currentHighestBid));
    }
});

function updateCurrentPrice(newPrice) {
    console.log("Current Bid: " + newPrice);
}


let watchlistButton = document.getElementById('watchlistButton');
if (inWatchlist) {
    watchlistButton.innerHTML = "Remove from Watchlist";
} else {
    watchlistButton.innerHTML = "Add to Watchlist";
}

watchlistButton.addEventListener('click', function () {
    inWatchlist = !inWatchlist;
});
