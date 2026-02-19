import { D1Database } from '@cloudflare/d1';

// 'iot_database' matches the binding in wrangler.toml
const db = new D1Database({ binding: 'iot_database' });

export async function insertReading(device_id: string, sensor_type: string, value: number) {
    await db.prepare(
        `INSERT INTO readings (device_id, sensor_type, value) VALUES (?, ?, ?)`
    )
    .bind(device_id, sensor_type, value)
    .run();
}

export async function fetchReadings(sensor_type: string, last = 50) {
    const result = await db.prepare(
        `SELECT * FROM readings WHERE sensor_type = ? ORDER BY timestamp DESC LIMIT ?`
    )
    .bind(sensor_type, last)
    .all();

    return result.results;
}
