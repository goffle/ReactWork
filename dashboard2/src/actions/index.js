export const FETCH_PORTFOLIO = 'FETCH_PORTFOLIO';
export const POST_PORTFOLIO = 'POST_PORTFOLIO';

export function postPortfolio(props)
{
    console.log("Props : ",props)
    return {
        type : POST_PORTFOLIO,
        payload : props
    };
}


export function fetchPortfolio() {

}





