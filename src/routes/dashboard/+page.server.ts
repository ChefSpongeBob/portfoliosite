import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
    const db = platform?.env?.iot_database;

    if (!db) {
        return { temperatureReadings: [] };
    }

    const result = await db
        .prepare(`SELECT * FROM readings ORDER BY timestamp DESC LIMIT 20`)
        .all();

    return {
        temperatureReadings: result.results ?? []
    };
};
