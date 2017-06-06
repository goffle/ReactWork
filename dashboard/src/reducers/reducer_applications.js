import { FETCH_APPLICATIONS, FETCH_STATUS } from '../actions/index';



export default function (state = [], action) {
    console.log('Action received ', action)

    switch (action.type) {
        case FETCH_APPLICATIONS:
            if (!action.payload.hits) {
                console.warn("No data found");
                return state;
            }
            let appMap = action.payload.hits.hits.reduce((appMap, application) => {
                const DeviceId = application._id;
                const DeviceName = application._source.device_name;
                const ApplicationVersion = application._source.application_name;
                const Project = application._source.project_name;
                const CreatedAt = application._source.created;
                const Mac = application._source.mac;
                const Connexion = "??"; // Math.random() >= 0.5 ? 'ON' : 'OFF';
                const Status = "??";
                const UpTime = "??";
                const NumberOfOutage = "??";

                appMap.set(DeviceId, {
                    DeviceId,
                    DeviceName,
                    ApplicationVersion,
                    Project,
                    Connexion,
                    Status,
                    UpTime,
                    NumberOfOutage,
                    CreatedAt,
                    Mac
                });
                return appMap;
            }, new Map());

            return appMap;

        case FETCH_STATUS:
            {
                //Retrieve data
                let aggs = action.payload.aggregations;
                const Connexion = (Date.now() / 1000 - aggs.uptime.max) < 10 ? 'ON' : 'OFF';
                let Status = '??'
                if (Connexion === 'ON') {
                    Status = Math.random() >= 0.4 ? 'ON' : 'OFF';
                }
                const Period = Date.now() / 1000 - aggs.uptime.min; // should be app created at
                const UpTime = aggs.events.buckets[0].doc_count * 100 / (Period / 3);
                const NumberOfOutage = aggs.events.buckets[1].doc_count;

                var clonedMap = new Map(state)
                let app = clonedMap.get(action.meta);

                app.Connexion = Connexion;
                app.UpTime = `${UpTime.toFixed(2)} %`;
                app.Status = Status;
                app.NumberOfOutage = NumberOfOutage;

                return clonedMap;
            }

    }
    return state;
}




