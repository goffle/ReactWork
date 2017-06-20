var Twitter = require('twitter');




export const FETCH_PORTFOLIO = 'FETCH_PORTFOLIO';
export const POST_PORTFOLIO = 'POST_PORTFOLIO';
export const FETCH_TWEET = 'FETCH_TWEET';



export function postPortfolio(props, cb) {
    console.log("Props : ", props)

    const p3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'foo');
    }).then(() => cb());

    return {
        type: POST_PORTFOLIO,
        payload: p3
    };
}


export function fetchPortfolio() {

}


//https://github.com/desmondmorris/node-twitter


export function fetchTweets(twitterId) {
    var client = new Twitter({
        consumer_key: 's9ebQuG493QsaBiNVa4R387FR',
        consumer_secret: 'r4miCX1kGvkFA4nJ0XzmQoGZQeFgb7GnSLTgEIWM4tzUioWhGC',
        access_token_key: '1156774262-QTUMs4A6LR9BZvliATZ6VnkMnKgOsCS9CJKjBbH',
        access_token_secret: 'KgoaitMVdHOfpkbzdgnc0i8D1xLDg1gdvN4m3V7LWYMvp'
    });

    let request = client.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${twitterId}&count=2`, function (error, tweets, response) {
        if (error) throw error;
        console.log(tweets);  // The favorites.
        console.log(response);  // Raw response object.
    });

    return {
        type : FETCH_TWEET,
        payload : request
    }

}



