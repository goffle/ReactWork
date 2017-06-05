import elasticsearch from 'elasticsearch';

const ROOT_URL = `127.0.0.1:9200`;
export const FETCH_APPLICATIONS = 'FETCH_APPLICATIONS';

export function fetchApplications() {

    var client = new elasticsearch.Client({ host: ROOT_URL, log: 'trace' });

    const request = client.search({
        index: 'monitoring',
        type: 'applications'
    })

    console.log('Request : ', request);
    return {
        type: FETCH_APPLICATIONS,
        payload: request
    };
}