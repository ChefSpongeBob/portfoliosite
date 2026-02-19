import { json } from '@sveltejs/kit';
import { insertReading, fetchReadings } from '$lib/db';

export async function POST({ request }) {
    const data = await request.json();
    try {
        await insertReading(data.device_id, data.sensor_type, data.value);
        return json({ success: true });
    } catch (err) {
        return json({ success: false, error: err }, { status: 500 });
    }
}

export async function GET({ url }) {
    const sensor_type = url.searchParams.get('sensor_type') || 'temperature';
    const last = Number(url.searchParams.get('last') || 50);
    try {
        const data = await fetchReadings(sensor_type, last);
        return json(data);
    } catch (err) {
        return json({ error: err }, { status: 500 });
    }
}
