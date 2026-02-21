import { json } from '@sveltejs/kit';

export async function POST({ request, platform }) {
    const db = platform?.env?.iot_database;
    if (!db) return json({ error: 'No DB binding' }, { status: 500 });

    const data = await request.json();

    if (!data.device_id || !data.sensor_type || data.value === undefined) {
        return json({ success: false, error: 'Missing fields' }, { status: 400 });
    }

    await db
        .prepare(`INSERT INTO readings (device_id, sensor_type, value) VALUES (?, ?, ?)`)
        .bind(data.device_id, data.sensor_type, data.value)
        .run();

    return json({ success: true });
}

export async function GET({ url, platform }) {
    const db = platform?.env?.iot_database;
    if (!db) return json([]);

    const sensor_type = url.searchParams.get('sensor_type') || 'temperature';
    const last = Number(url.searchParams.get('last') || 50);

    const result = await db
        .prepare(`SELECT * FROM readings WHERE sensor_type = ? ORDER BY timestamp DESC LIMIT ?`)
        .bind(sensor_type, last)
        .all();

    return json(result.results ?? []);
}
