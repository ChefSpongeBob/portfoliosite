import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
    const db = event.platform?.env?.iot_database;

    if (!db) {
        return {
            temperatureReadings: [],
            humidityReadings: []
        };
    }

    const temperature = await db
        .prepare(`SELECT * FROM readings WHERE sensor_type = ? ORDER BY timestamp DESC LIMIT 100`)
        .bind('temperature')
        .all();

    const humidity = await db
        .prepare(`SELECT * FROM readings WHERE sensor_type = ? ORDER BY timestamp DESC LIMIT 100`)
        .bind('humidity')
        .all();

    return {
        temperatureReadings: temperature.results ?? [],
        humidityReadings: humidity.results ?? []
    };
};
