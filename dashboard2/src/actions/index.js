export const FETCH_PORTFOLIO = 'FETCH_PORTFOLIO';
export const POST_PORTFOLIO = 'POST_PORTFOLIO';

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





