import { FETCH_APPLICATIONS } from '../actions/index';



export default function (state = [], action) {
    console.log('Action received ', action)

    switch (action.type) {
        case FETCH_APPLICATIONS:

            let answer = action.payload.hits.hits.map((application) => {

                const DeviceName = application._source.mac;
                const ApplicationVersion = application._source.application_name;
                const Project = application._source.application_name;

                const Connexion = Math.random() >= 0.5 ? 'ON' : 'OFF';
                let Status = Math.random() >= 0.4 ? 'ON' : 'OFF';
                if (Connexion === 'OFF') {
                    Status = '??';
                }

                const UpTime = Math.floor((Math.random() * 100) + 1);
                const NumberOfOutage = Math.floor((Math.random() * 100) + 1);

                return {
                    DeviceName,
                    ApplicationVersion,
                    Project,
                    Connexion,
                    Status,
                    UpTime,
                    NumberOfOutage
                }
            });
            return answer;
    }
    return state;
}

