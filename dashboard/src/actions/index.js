import elasticsearch from 'elasticsearch';

const ROOT_URL = `127.0.0.1:9200`;

export const FETCH_APPLICATIONS = 'FETCH_APPLICATIONS';
export const FETCH_STATUS = 'FETCH_STATUS';


export function fetchApplications() {
    var client = new elasticsearch.Client({ host: ROOT_URL });

    const request = client.search({
        index: 'monitoring',
        type: 'applications',
        size: 50
    })
    return {
        type: FETCH_APPLICATIONS,
        payload: request
    };
}


export function fetchStatus(appId) {

    var client = new elasticsearch.Client({ host: ROOT_URL, log: 'trace' });
    const request = client.search(
        {
            body:
            {
                query:
                {
                    match:
                    {
                        application_id: appId
                    }
                },
                size: 0,
                aggs:
                {
                    events:
                    {
                        terms:
                        {
                            field: '_type'
                        }
                    },
                    uptime:
                    {
                        stats:
                        {
                            field: 'created'
                        }
                    }
                }
            }
        }
    );

    return {
        type: FETCH_STATUS,
        payload: request,
        meta : appId
    };

}




